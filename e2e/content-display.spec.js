const { test, expect } = require('@playwright/test');

test.describe('Content Display Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display user name and role', async ({ page }) => {
    await expect(page.locator('h1:has-text("Nate")')).toBeVisible();
    await expect(page.locator('text=/Cloud.*DevOps Engineer/i').first()).toBeVisible();
  });

  test('should display all main sections', async ({ page }) => {
    await expect(page.locator('#home')).toBeVisible();
    await expect(page.locator('#about')).toBeVisible();
    await expect(page.locator('#resume')).toBeVisible();
    await expect(page.locator('#portfolio')).toBeVisible();
    await expect(page.locator('#testimonials')).toBeVisible();
    await expect(page.locator('#contact')).toBeVisible();
  });

  test('should display education information', async ({ page }) => {
    await page.click('a:has-text("Resume")');
    await expect(page.locator('text=/University of Minnesota-Duluth/i')).toBeVisible();
    await expect(page.locator('text=/Industrial Engineering/i')).toBeVisible();
  });

  test('should display work experience', async ({ page }) => {
    await page.click('a:has-text("Resume")');
    await page.waitForTimeout(500); // Wait for scroll
    await expect(page.locator('text=/GoodLeap/i').first()).toBeVisible();
    await expect(page.locator('text=/DevOps Engineer/i').first()).toBeVisible();
  });

  test('should display skills with progress bars', async ({ page }) => {
    await page.click('a:has-text("Resume")');
    const progressBars = page.locator('.ui.progress');
    await expect(progressBars.first()).toBeVisible();
  });

  test('should display portfolio projects', async ({ page }) => {
    await page.click('a:has-text("Works")');
    await expect(page.locator('text=/DevOps Career Handbook/i')).toBeVisible();
  });

  test('should display testimonials', async ({ page }) => {
    await page.click('a:has-text("Testimonials")');
    await page.waitForTimeout(500); // Wait for scroll
    await expect(page.locator('#testimonials')).toBeInViewport();
    const testimonialText = page.locator('blockquote p').first();
    await expect(testimonialText).toBeVisible();
  });

  test('should display contact information', async ({ page }) => {
    await page.click('a:has-text("Contact")');
    await expect(page.locator('text=/Linked in/i')).toBeVisible();
  });

  test('should display profile picture', async ({ page }) => {
    await page.click('a:has-text("About")');
    await page.waitForTimeout(500); // Wait for scroll
    await expect(page.locator('#about')).toBeInViewport();
    const profilePic = page.locator('img.profile-pic');
    await expect(profilePic).toBeVisible();
  });
});
