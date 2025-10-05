const { test, expect } = require('@playwright/test');

test.describe('Social Links Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should have social links in header', async ({ page }) => {
    const socialLinks = page.locator('.social a');
    await expect(socialLinks.first()).toBeVisible();
  });

  test('should have LinkedIn link', async ({ page }) => {
    const linkedinLink = page.locator('.social a[href*="linkedin"]').first();
    await expect(linkedinLink).toBeVisible();
  });

  test('should have GitHub link', async ({ page }) => {
    const githubLink = page.locator('.social a[href*="github"]').first();
    await expect(githubLink).toBeVisible();
  });

  test('social links should open in new tab', async ({ page }) => {
    const socialLink = page.locator('.social a').first();
    await expect(socialLink).toHaveAttribute('target', '_blank');
  });

  test('social links should have rel="noreferrer"', async ({ page }) => {
    const socialLink = page.locator('.social a').first();
    await expect(socialLink).toHaveAttribute('rel', 'noreferrer');
  });

  test('should have social links in footer', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    const footerLinks = page.locator('footer .social-links a');
    await expect(footerLinks.first()).toBeVisible();
  });

  test('footer social links should have correct URLs', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    const linkedinLink = page.locator('footer a[href*="linkedin"]').first();
    await expect(linkedinLink).toHaveAttribute('href', /linkedin\.com/);
  });
});
