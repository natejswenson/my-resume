const { test, expect } = require('@playwright/test');

test.describe('Portfolio Interaction Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.click('a:has-text("Works")');
  });

  test('should display portfolio section heading', async ({ page }) => {
    await expect(page.locator('text=/Check Out Some of My Works/i')).toBeVisible();
  });

  test('should display all portfolio items', async ({ page }) => {
    const portfolioItems = page.locator('.portfolio-item');
    const count = await portfolioItems.count();

    expect(count).toBeGreaterThan(0);
  });

  test('should display portfolio images', async ({ page }) => {
    const images = page.locator('.item-img');
    await expect(images.first()).toBeVisible();
  });

  test('portfolio images should have alt attributes', async ({ page }) => {
    const images = page.locator('.item-img');
    const firstImage = images.first();

    await expect(firstImage).toHaveAttribute('alt');
  });

  test('should display project names', async ({ page }) => {
    await expect(page.locator('text=/DevOps Career Handbook/i')).toBeVisible();
  });

  test('should display project descriptions', async ({ page }) => {
    const descriptions = page.locator('.portfolio-item-meta p');
    await expect(descriptions.first()).toBeVisible();
  });

  test('clicking portfolio item should navigate to project URL', async ({ page }) => {
    const portfolioLink = page.locator('.item-wrap a').first();
    const href = await portfolioLink.getAttribute('href');

    expect(href).toBeTruthy();
    expect(href).toMatch(/http/);
  });

  test('should show overlay on hover', async ({ page }) => {
    const portfolioItem = page.locator('.item-wrap').first();

    // Hover over the item
    await portfolioItem.hover();

    // The overlay should be present
    const overlay = portfolioItem.locator('.overlay');
    await expect(overlay).toBeAttached();
  });
});
