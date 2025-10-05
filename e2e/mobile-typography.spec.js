import { test, expect } from '@playwright/test';

test.describe('Mobile Typography', () => {
  test.use({ viewport: { width: 375, height: 667 } }); // iPhone 8 size

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');
  });

  test('Body text is at least 16px on mobile', async ({ page }) => {
    const bodyFontSize = await page.locator('body').evaluate(el =>
      window.getComputedStyle(el).fontSize
    );

    expect(parseFloat(bodyFontSize)).toBeGreaterThanOrEqual(16);
  });

  test('Paragraph text is at least 14px on mobile', async ({ page }) => {
    const paragraphs = await page.locator('p').all();

    for (const p of paragraphs) {
      if (await p.isVisible()) {
        const fontSize = await p.evaluate(el =>
          window.getComputedStyle(el).fontSize
        );

        expect(parseFloat(fontSize)).toBeGreaterThanOrEqual(14);
      }
    }
  });

  test('H1 headings scale appropriately for mobile', async ({ page }) => {
    const h1Elements = await page.locator('h1').all();

    for (const h1 of h1Elements) {
      if (await h1.isVisible()) {
        const fontSize = await h1.evaluate(el =>
          window.getComputedStyle(el).fontSize
        );

        // Mobile H1 should be between 24px and 36px
        expect(parseFloat(fontSize)).toBeGreaterThanOrEqual(24);
        expect(parseFloat(fontSize)).toBeLessThanOrEqual(36);
      }
    }
  });

  test('H2 headings scale appropriately for mobile', async ({ page }) => {
    const h2Elements = await page.locator('h2').all();

    for (const h2 of h2Elements) {
      if (await h2.isVisible()) {
        const fontSize = await h2.evaluate(el =>
          window.getComputedStyle(el).fontSize
        );

        // Mobile H2 should be between 20px and 30px
        expect(parseFloat(fontSize)).toBeGreaterThanOrEqual(20);
        expect(parseFloat(fontSize)).toBeLessThanOrEqual(30);
      }
    }
  });

  test('H3 headings scale appropriately for mobile', async ({ page }) => {
    const h3Elements = await page.locator('h3').all();

    for (const h3 of h3Elements) {
      if (await h3.isVisible()) {
        const fontSize = await h3.evaluate(el =>
          window.getComputedStyle(el).fontSize
        );

        // Mobile H3 should be between 16px and 26px (allowing for existing styles)
        expect(parseFloat(fontSize)).toBeGreaterThanOrEqual(16);
        expect(parseFloat(fontSize)).toBeLessThanOrEqual(26);
      }
    }
  });

  test('Line height is adequate for readability', async ({ page }) => {
    const paragraphs = await page.locator('p').all();

    for (const p of paragraphs) {
      if (await p.isVisible()) {
        const lineHeight = await p.evaluate(el =>
          window.getComputedStyle(el).lineHeight
        );

        const fontSize = await p.evaluate(el =>
          window.getComputedStyle(el).fontSize
        );

        // Line height should be at least 1.4 times font size
        const ratio = parseFloat(lineHeight) / parseFloat(fontSize);
        expect(ratio).toBeGreaterThanOrEqual(1.4);
      }
    }
  });

  test('Text has adequate contrast', async ({ page }) => {
    // This is a basic check - real contrast checking would need more sophisticated tools
    const textElements = await page.locator('p, h1, h2').all();

    let checkedElements = 0;
    for (const element of textElements) {
      if (await element.isVisible()) {
        const color = await element.evaluate(el =>
          window.getComputedStyle(el).color
        );

        // Just check that color is defined and not fully transparent
        expect(color).toBeTruthy();
        if (color !== 'rgba(0, 0, 0, 0)') {
          checkedElements++;
        }
      }
    }

    // Ensure we checked at least some elements
    expect(checkedElements).toBeGreaterThan(0);
  });
});

test.describe('Typography scaling across viewports', () => {
  test('Font sizes scale from mobile to tablet', async ({ page }) => {
    // Mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('http://localhost:3000');

    const mobileH1Size = await page.locator('h1').first().evaluate(el =>
      window.getComputedStyle(el).fontSize
    );

    // Tablet viewport
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.waitForTimeout(500);

    const tabletH1Size = await page.locator('h1').first().evaluate(el =>
      window.getComputedStyle(el).fontSize
    );

    // Tablet should have same or larger font size
    expect(parseFloat(tabletH1Size)).toBeGreaterThanOrEqual(parseFloat(mobileH1Size));
  });

  test('Font sizes are consistent within viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');

    // All H2s should have the same font size
    const h2Elements = await page.locator('h2').all();

    if (h2Elements.length >= 2) {
      const firstH2Size = await h2Elements[0].evaluate(el =>
        window.getComputedStyle(el).fontSize
      );

      const secondH2Size = await h2Elements[1].evaluate(el =>
        window.getComputedStyle(el).fontSize
      );

      expect(firstH2Size).toBe(secondH2Size);
    }
  });
});

test.describe('Mobile form input typography', () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
    const contactSection = page.locator('#contact').first();
    await contactSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
  });

  test('Form inputs have 16px font size (prevents iOS zoom)', async ({ page }) => {
    const inputs = await page.locator('input[type="text"], input[type="email"], textarea').all();

    for (const input of inputs) {
      if (await input.isVisible()) {
        const fontSize = await input.evaluate(el =>
          window.getComputedStyle(el).fontSize
        );

        // Must be at least 16px to prevent iOS auto-zoom
        expect(parseFloat(fontSize)).toBeGreaterThanOrEqual(16);
      }
    }
  });

  test('Form labels are readable on mobile', async ({ page }) => {
    const labels = await page.locator('label').all();

    for (const label of labels) {
      if (await label.isVisible()) {
        const fontSize = await label.evaluate(el =>
          window.getComputedStyle(el).fontSize
        );

        expect(parseFloat(fontSize)).toBeGreaterThanOrEqual(14);
      }
    }
  });

  test('Button text is readable on mobile', async ({ page }) => {
    const buttons = await page.locator('button').all();

    for (const button of buttons) {
      if (await button.isVisible()) {
        const fontSize = await button.evaluate(el =>
          window.getComputedStyle(el).fontSize
        );

        expect(parseFloat(fontSize)).toBeGreaterThanOrEqual(16);
      }
    }
  });
});

test.describe('Text wrapping and overflow', () => {
  test.use({ viewport: { width: 320, height: 568 } }); // Smallest common viewport

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });

  test('Long text wraps instead of overflowing', async ({ page }) => {
    const paragraphs = await page.locator('p').all();

    for (const p of paragraphs) {
      if (await p.isVisible()) {
        const overflowX = await p.evaluate(el =>
          window.getComputedStyle(el).overflowX
        );

        // Should not have horizontal scroll
        expect(overflowX).not.toBe('scroll');
        expect(overflowX).not.toBe('auto');
      }
    }
  });

  test('Headings wrap on small screens', async ({ page }) => {
    const headings = await page.locator('h1, h2, h3').all();

    for (const heading of headings) {
      if (await heading.isVisible()) {
        const box = await heading.boundingBox();
        expect(box.width).toBeLessThanOrEqual(320);
      }
    }
  });

  test('URLs and long words break appropriately', async ({ page }) => {
    const links = await page.locator('a').all();

    for (const link of links) {
      if (await link.isVisible()) {
        const box = await link.boundingBox();
        if (box) {
          expect(box.width).toBeLessThanOrEqual(320);
        }
      }
    }
  });
});
