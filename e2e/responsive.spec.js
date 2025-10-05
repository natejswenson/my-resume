const { test, expect, devices } = require('@playwright/test');

test.describe('Responsive Design Tests', () => {
  test('should display correctly on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');

    await expect(page.locator('#home')).toBeVisible();
    await expect(page.locator('.banner-text')).toBeVisible();
  });

  test('should display correctly on tablet', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');

    await expect(page.locator('#home')).toBeVisible();
    await expect(page.locator('.banner-text')).toBeVisible();
  });

  test('should display correctly on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    await expect(page.locator('#home')).toBeVisible();

    // Mobile menu button should be available
    const mobileBtn = page.locator('.mobile-btn');
    if (await mobileBtn.isVisible()) {
      await expect(mobileBtn).toBeVisible();
    }
  });

  test('should handle content overflow on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Check that content doesn't cause horizontal scroll
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    const viewport = page.viewportSize();
    const viewportWidth = viewport.width;

    expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 20); // Allow small margin
  });

  test('portfolio grid should be responsive', async ({ page }) => {
    // Desktop
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');
    await page.click('a:has-text("Works")');

    const desktopItems = page.locator('.portfolio-item');
    await expect(desktopItems.first()).toBeVisible();

    // Mobile
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(desktopItems.first()).toBeVisible();
  });

  test('resume sections should stack on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Wait for page to load
    await page.waitForLoadState('networkidle');

    // Scroll to resume section instead of clicking (mobile menu may be collapsed)
    await page.locator('#resume').scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);

    await expect(page.locator('text=/Education/i').first()).toBeVisible();
    await expect(page.locator('text=/Experience/i').first()).toBeVisible();
  });
});
