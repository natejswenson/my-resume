import { test, expect } from '@playwright/test';

test.describe('No horizontal scroll on mobile viewports', () => {
  const mobileWidths = [320, 375, 390, 414];

  for (const width of mobileWidths) {
    test(`${width}px viewport has no horizontal overflow`, async ({ page }) => {
      await page.setViewportSize({ width, height: 667 });
      await page.goto('http://localhost:3000');

      // Wait for page to fully render
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(1000);

      // Check document scroll width vs client width
      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);

      // Allow 1px tolerance for sub-pixel rendering
      expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1);
    });

    test(`${width}px - No elements overflow viewport width`, async ({ page }) => {
      await page.setViewportSize({ width, height: 667 });
      await page.goto('http://localhost:3000');
      await page.waitForLoadState('networkidle');

      // Check all major sections
      const sections = await page.locator('section, header, footer, div[id]').all();

      for (const section of sections) {
        if (await section.isVisible()) {
          const box = await section.boundingBox();
          if (box) {
            // Elements should not exceed viewport width
            expect(box.width).toBeLessThanOrEqual(width);
          }
        }
      }
    });

    test(`${width}px - Images don't cause horizontal overflow`, async ({ page }) => {
      await page.setViewportSize({ width, height: 667 });
      await page.goto('http://localhost:3000');
      await page.waitForLoadState('networkidle');

      const images = await page.locator('img').all();

      for (const img of images) {
        if (await img.isVisible()) {
          const box = await img.boundingBox();
          if (box) {
            expect(box.width).toBeLessThanOrEqual(width);
          }
        }
      }
    });

    test(`${width}px - Text content doesn't overflow`, async ({ page }) => {
      await page.setViewportSize({ width, height: 667 });
      await page.goto('http://localhost:3000');
      await page.waitForLoadState('networkidle');

      // Check headings and paragraphs
      const textElements = await page.locator('h1, h2, h3, h4, p').all();

      for (const element of textElements) {
        if (await element.isVisible()) {
          const box = await element.boundingBox();
          if (box) {
            expect(box.width).toBeLessThanOrEqual(width);
          }
        }
      }
    });
  }
});

test.describe('Body overflow checks', () => {
  test('No horizontal scroll on iPhone SE (320px)', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 568 });
    await page.goto('http://localhost:3000');

    // Check body overflow
    const hasHorizontalScroll = await page.evaluate(() => {
      return document.body.scrollWidth > document.body.clientWidth;
    });

    expect(hasHorizontalScroll).toBe(false);
  });

  test('No horizontal scroll on iPhone 12 (390px)', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('http://localhost:3000');

    const hasHorizontalScroll = await page.evaluate(() => {
      return document.body.scrollWidth > document.body.clientWidth;
    });

    expect(hasHorizontalScroll).toBe(false);
  });

  test('No horizontal scroll on tablet (768px)', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('http://localhost:3000');

    const hasHorizontalScroll = await page.evaluate(() => {
      return document.body.scrollWidth > document.body.clientWidth;
    });

    expect(hasHorizontalScroll).toBe(false);
  });
});

test.describe('Specific component overflow checks', () => {
  test.use({ viewport: { width: 320, height: 568 } });

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');
  });

  test('Header doesn\'t cause overflow', async ({ page }) => {
    const header = page.locator('header').first();
    const headerBox = await header.boundingBox();

    expect(headerBox.width).toBeLessThanOrEqual(320);
  });

  test('About section doesn\'t cause overflow', async ({ page }) => {
    await page.locator('#about').first().scrollIntoViewIfNeeded();

    const aboutSection = page.locator('#about').first();
    const aboutBox = await aboutSection.boundingBox();

    expect(aboutBox.width).toBeLessThanOrEqual(320);
  });

  test('Work section doesn\'t cause overflow', async ({ page }) => {
    await page.locator('#resume').first().scrollIntoViewIfNeeded();

    const workSection = page.locator('#resume').first();
    const workBox = await workSection.boundingBox();

    expect(workBox.width).toBeLessThanOrEqual(320);
  });

  test('Skills section doesn\'t cause overflow', async ({ page }) => {
    await page.locator('#skills').first().scrollIntoViewIfNeeded();

    const skillsSection = page.locator('#skills').first();
    const skillsBox = await skillsSection.boundingBox();

    expect(skillsBox.width).toBeLessThanOrEqual(320);
  });

  test('Portfolio section doesn\'t cause overflow', async ({ page }) => {
    await page.locator('#portfolio').first().scrollIntoViewIfNeeded();

    const portfolioSection = page.locator('#portfolio').first();
    const portfolioBox = await portfolioSection.boundingBox();

    expect(portfolioBox.width).toBeLessThanOrEqual(320);
  });

  test('Contact section doesn\'t cause overflow', async ({ page }) => {
    await page.locator('#contact').first().scrollIntoViewIfNeeded();

    const contactSection = page.locator('#contact').first();
    const contactBox = await contactSection.boundingBox();

    expect(contactBox.width).toBeLessThanOrEqual(320);
  });

  test('Footer doesn\'t cause overflow', async ({ page }) => {
    await page.locator('footer').first().scrollIntoViewIfNeeded();

    const footer = page.locator('footer').first();
    const footerBox = await footer.boundingBox();

    expect(footerBox.width).toBeLessThanOrEqual(320);
  });
});
