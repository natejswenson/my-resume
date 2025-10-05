import { test, expect } from '@playwright/test';

test.describe('Touch Target Accessibility', () => {
  test.use({ viewport: { width: 375, height: 667 } }); // iPhone 8 size

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });

  test('All interactive elements meet 44x44px minimum', async ({ page }) => {
    // Get all interactive elements
    const buttons = await page.locator('button, a[href], input[type="submit"]').all();

    expect(buttons.length).toBeGreaterThan(0);

    for (const button of buttons) {
      // Only check visible elements
      if (await button.isVisible()) {
        const box = await button.boundingBox();

        if (box) {
          // Allow some tolerance for inline links in text
          const isInlineLink = await button.evaluate(el => {
            const display = window.getComputedStyle(el).display;
            return display === 'inline' || el.closest('p');
          });

          if (!isInlineLink) {
            expect(box.width).toBeGreaterThanOrEqual(44);
            expect(box.height).toBeGreaterThanOrEqual(44);
          }
        }
      }
    }
  });

  test('Social media icons are tappable on mobile', async ({ page }) => {
    const socialIcons = await page.locator('.social a, header a').all();
    let tappableIconCount = 0;

    for (const icon of socialIcons) {
      if (await icon.isVisible()) {
        const box = await icon.boundingBox();
        if (box) {
          expect(box.width).toBeGreaterThanOrEqual(44);
          expect(box.height).toBeGreaterThanOrEqual(44);
          tappableIconCount++;
        }
      }
    }

    // Should have at least some social icons
    expect(tappableIconCount).toBeGreaterThan(0);
  });

  test('Navigation menu items are touch-friendly', async ({ page }) => {
    const navLinks = await page.locator('nav a, .menu a').all();

    for (const link of navLinks) {
      if (await link.isVisible()) {
        const box = await link.boundingBox();
        if (box) {
          expect(box.height).toBeGreaterThanOrEqual(44);
        }
      }
    }
  });

  test('Form inputs have adequate touch targets', async ({ page }) => {
    const contactSection = page.locator('#contact').first();
    await contactSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);

    const inputs = await page.locator('input[type="text"], input[type="email"], textarea').all();

    for (const input of inputs) {
      if (await input.isVisible()) {
        const box = await input.boundingBox();
        if (box) {
          expect(box.height).toBeGreaterThanOrEqual(44);
        }
      }
    }
  });

  test('Submit button is easily tappable', async ({ page }) => {
    const contactSection = page.locator('#contact').first();
    await contactSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);

    const submitBtn = page.locator('button[type="submit"], input[type="submit"]').first();

    if (await submitBtn.count() > 0 && await submitBtn.isVisible()) {
      const box = await submitBtn.boundingBox();
      if (box) {
        expect(box.height).toBeGreaterThanOrEqual(48); // Extra large for primary action
        expect(box.width).toBeGreaterThanOrEqual(120);
      }
    }
  });

  test('Portfolio items are tappable', async ({ page }) => {
    const portfolioSection = page.locator('#portfolio').first();
    await portfolioSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);

    const portfolioItems = await page.locator('.portfolio-item, .card').all();

    if (portfolioItems.length > 0) {
      for (const item of portfolioItems) {
        if (await item.isVisible()) {
          const box = await item.boundingBox();
          if (box) {
            // Portfolio items should have adequate touch area
            expect(box.height).toBeGreaterThanOrEqual(100);
            expect(box.width).toBeGreaterThanOrEqual(150);
          }
        }
      }
    }
  });
});

test.describe('Touch Target Spacing', () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });

  test('Adjacent interactive elements have adequate spacing', async ({ page }) => {
    // Check social icons spacing
    const socialIcons = await page.locator('.social a').all();

    if (socialIcons.length >= 2) {
      const firstBox = await socialIcons[0].boundingBox();
      const secondBox = await socialIcons[1].boundingBox();

      if (firstBox && secondBox) {
        // Calculate spacing between icons
        const spacing = Math.abs(secondBox.x - (firstBox.x + firstBox.width));

        // Should have at least 8px spacing
        expect(spacing).toBeGreaterThanOrEqual(8);
      }
    }
  });

  test('Form fields have adequate vertical spacing', async ({ page }) => {
    const contactSection = page.locator('#contact').first();
    await contactSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);

    const inputs = await page.locator('input, textarea').all();

    if (inputs.length >= 2) {
      for (let i = 0; i < inputs.length - 1; i++) {
        const currentBox = await inputs[i].boundingBox();
        const nextBox = await inputs[i + 1].boundingBox();

        if (currentBox && nextBox && await inputs[i].isVisible() && await inputs[i + 1].isVisible()) {
          // Calculate vertical spacing
          const spacing = nextBox.y - (currentBox.y + currentBox.height);

          // Should have at least 12px vertical spacing
          expect(spacing).toBeGreaterThanOrEqual(12);
        }
      }
    }
  });
});
