const { test, expect } = require('@playwright/test');

test.describe('Smoke Tests - Critical Paths', () => {
  test('application loads successfully', async ({ page }) => {
    await page.goto('/');

    // Verify main elements are present
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();

    // Verify main content sections exist
    expect(await page.locator('#home').count()).toBeGreaterThan(0);
    expect(await page.locator('#about').count()).toBeGreaterThan(0);
    expect(await page.locator('#resume').count()).toBeGreaterThan(0);
    expect(await page.locator('#portfolio').count()).toBeGreaterThan(0);
    expect(await page.locator('#testimonials').count()).toBeGreaterThan(0);
    expect(await page.locator('#contact').count()).toBeGreaterThan(0);
  });

  test('navigation menu is functional', async ({ page }) => {
    await page.goto('/');

    // Check all navigation links exist
    await expect(page.locator('a:has-text("Home")')).toBeVisible();
    await expect(page.locator('a:has-text("About")')).toBeVisible();
    await expect(page.locator('a:has-text("Resume")')).toBeVisible();
    await expect(page.locator('a:has-text("Works")')).toBeVisible();
    await expect(page.locator('a:has-text("Testimonials")')).toBeVisible();
    await expect(page.locator('a:has-text("Contact")')).toBeVisible();
  });

  test('resume content is displayed', async ({ page }) => {
    await page.goto('/');

    // Scroll to resume section
    await page.locator('#resume').scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);

    // Verify resume sections are present
    const resumeSection = page.locator('#resume');
    await expect(resumeSection).toBeVisible();

    // Check for key content (using first() to avoid strict mode errors)
    await expect(page.locator('text=/Education/i').first()).toBeVisible();
    await expect(page.locator('text=/Experience/i').first()).toBeVisible();

    // Verify updated education
    await expect(page.locator('text=/Minnesota-Duluth/i')).toBeVisible();
  });

  test('portfolio section displays projects', async ({ page }) => {
    await page.goto('/');

    // Scroll to portfolio
    await page.locator('#portfolio').scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);

    // Check portfolio section is visible
    await expect(page.locator('#portfolio')).toBeVisible();

    // Check for portfolio items
    const portfolioItems = page.locator('.portfolio-item');
    expect(await portfolioItems.count()).toBeGreaterThan(0);
  });

  test('social links are present and secure', async ({ page }) => {
    await page.goto('/');

    // Check social links in header
    const socialLinks = page.locator('.social a');
    expect(await socialLinks.count()).toBeGreaterThan(0);

    // Verify first link has security attributes
    const firstLink = socialLinks.first();
    await expect(firstLink).toHaveAttribute('target', '_blank');
    await expect(firstLink).toHaveAttribute('rel', 'noreferrer');
  });

  test('responsive layout works on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Verify page loads on mobile
    await expect(page.locator('header')).toBeVisible();

    // Check content doesn't overflow
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    const viewportWidth = page.viewportSize().width;
    expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 50); // Allow some margin
  });
});
