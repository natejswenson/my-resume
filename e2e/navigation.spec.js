const { test, expect } = require('@playwright/test');

test.describe('Navigation Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load the homepage', async ({ page }) => {
    // Check page loaded by looking for header element
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('h1')).toBeVisible();
  });

  test('should have all navigation links', async ({ page }) => {
    await expect(page.locator('a:has-text("Home")')).toBeVisible();
    await expect(page.locator('a:has-text("About")')).toBeVisible();
    await expect(page.locator('a:has-text("Resume")')).toBeVisible();
    await expect(page.locator('a:has-text("Works")')).toBeVisible();
    await expect(page.locator('a:has-text("Testimonials")')).toBeVisible();
    await expect(page.locator('a:has-text("Contact")')).toBeVisible();
  });

  test('should navigate to About section', async ({ page }) => {
    await page.click('a:has-text("About")');
    await expect(page.locator('#about')).toBeInViewport();
  });

  test('should navigate to Resume section', async ({ page }) => {
    await page.click('a:has-text("Resume")');
    await expect(page.locator('#resume')).toBeInViewport();
  });

  test('should navigate to Portfolio section', async ({ page }) => {
    await page.click('a:has-text("Works")');
    await expect(page.locator('#portfolio')).toBeInViewport();
  });

  test('should navigate to Testimonials section', async ({ page }) => {
    await page.click('a:has-text("Testimonials")');
    await expect(page.locator('#testimonials')).toBeInViewport();
  });

  test('should navigate to Contact section', async ({ page }) => {
    await page.click('a:has-text("Contact")');
    await expect(page.locator('#contact')).toBeInViewport();
  });

  test('should navigate back to top', async ({ page }) => {
    // Scroll to bottom first
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    // Click back to top
    await page.click('#go-top a');
    await expect(page.locator('#home')).toBeInViewport();
  });
});
