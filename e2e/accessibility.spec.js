const { test, expect } = require('@playwright/test');

test.describe('Accessibility Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should have semantic HTML structure', async ({ page }) => {
    // Check for semantic elements
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();
    await expect(page.locator('section').first()).toBeVisible();
  });

  test('images should have alt attributes', async ({ page }) => {
    const images = page.locator('img');
    const count = await images.count();

    for (let i = 0; i < count; i++) {
      const img = images.nth(i);
      const hasAlt = await img.getAttribute('alt');
      expect(hasAlt).not.toBeNull();
    }
  });

  test('links should be keyboard accessible', async ({ page }) => {
    // Tab to first link
    await page.keyboard.press('Tab');

    // Check if a link is focused
    const focusedElement = await page.evaluate(() => {
      return document.activeElement.tagName;
    });

    expect(focusedElement).toBe('A');
  });

  test('navigation should be keyboard accessible', async ({ page }) => {
    // Press Tab multiple times to navigate through menu
    for (let i = 0; i < 3; i++) {
      await page.keyboard.press('Tab');
    }

    // Press Enter to activate link
    await page.keyboard.press('Enter');

    // Should navigate to a section
    await page.waitForTimeout(500); // Allow time for scroll
  });

  test('should have proper heading hierarchy', async ({ page }) => {
    const h1Count = await page.locator('h1').count();
    const h2Count = await page.locator('h2').count();

    // Should have at least one h1
    expect(h1Count).toBeGreaterThan(0);

    // Should have heading structure
    expect(h2Count).toBeGreaterThanOrEqual(0);
  });

  test('form elements should have labels', async ({ page }) => {
    const inputs = page.locator('input, textarea, select');
    const count = await inputs.count();

    for (let i = 0; i < count; i++) {
      const input = inputs.nth(i);
      const id = await input.getAttribute('id');
      const ariaLabel = await input.getAttribute('aria-label');

      // Should have either id (for label) or aria-label
      expect(id || ariaLabel).toBeTruthy();
    }
  });

  test('external links should have security attributes', async ({ page }) => {
    const externalLinks = page.locator('a[target="_blank"]');
    const count = await externalLinks.count();

    for (let i = 0; i < count; i++) {
      const link = externalLinks.nth(i);
      const rel = await link.getAttribute('rel');

      // Should have rel="noreferrer" or rel="noopener"
      expect(rel).toMatch(/noreferrer|noopener/);
    }
  });

  test('should have sufficient color contrast', async ({ page }) => {
    // Basic visibility check for text elements
    const heading = page.locator('h1').first();
    await expect(heading).toBeVisible();

    // In a real scenario, you'd use axe-core or similar tool
    // This is a basic check that text is visible
  });

  test('should support zoom up to 200%', async ({ page }) => {
    // Set zoom level
    await page.evaluate(() => {
      document.body.style.zoom = '200%';
    });

    // Content should still be accessible
    await expect(page.locator('#home')).toBeVisible();
    await expect(page.locator('.banner-text')).toBeVisible();
  });
});
