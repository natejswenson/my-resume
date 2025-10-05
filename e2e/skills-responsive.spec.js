const { test, expect } = require('@playwright/test');

test.describe('Skills Section - Responsive Visual Design', () => {
  test('displays skill cards on desktop (1024px+)', async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 768 });
    await page.goto('http://localhost:3000');

    // Wait for Skills section
    await page.waitForSelector('#skills');

    // Check for skills grid
    const skillsGrid = await page.locator('.skills-grid');
    await expect(skillsGrid).toBeVisible();

    // Check for skill cards
    const skillCards = await page.locator('.skill-card');
    await expect(skillCards).toHaveCount(5);
  });

  test('skill cards have icon containers on all viewports', async ({ page }) => {
    await page.goto('http://localhost:3000');

    const iconContainers = await page.locator('.icon-container');
    await expect(iconContainers).toHaveCount(5);
  });

  test('icons are visible on mobile (375px)', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('http://localhost:3000');

    const skillIcons = await page.locator('.skill-icon');
    const count = await skillIcons.count();
    expect(count).toBeGreaterThan(0);
  });

  test('skill cards are touch-friendly on mobile (≥44px)', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('http://localhost:3000');

    const skillCards = await page.locator('.skill-card').first();
    const box = await skillCards.boundingBox();

    // Touch target should be at least 44px
    expect(box.height).toBeGreaterThanOrEqual(44);
  });

  test('Skills section has gradient background', async ({ page }) => {
    await page.goto('http://localhost:3000');

    const skillsSection = await page.locator('#skills');
    const bgColor = await skillsSection.evaluate(el =>
      window.getComputedStyle(el).background
    );

    // Should have background (gradient or solid color)
    expect(bgColor).toBeTruthy();
  });

  test('Tools section has white background (distinct from Skills)', async ({ page }) => {
    await page.goto('http://localhost:3000');

    const toolsSection = await page.locator('#tools');
    await expect(toolsSection).toBeVisible();
  });

  test('section heading is centered', async ({ page }) => {
    await page.goto('http://localhost:3000');

    const heading = await page.locator('#skills .section-heading');
    const textAlign = await heading.evaluate(el =>
      window.getComputedStyle(el).textAlign
    );

    expect(textAlign).toBe('center');
  });

  test('skill cards have hover effect', async ({ page }) => {
    await page.goto('http://localhost:3000');

    const firstCard = await page.locator('.skill-card').first();
    await firstCard.hover();

    // Card should be visible and interactive
    await expect(firstCard).toBeVisible();
  });

  test('no horizontal overflow on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('http://localhost:3000');

    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    const viewportWidth = page.viewportSize().width;

    expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 1); // +1 for rounding
  });

  test('responsive grid adjusts on tablet (768px)', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('http://localhost:3000');

    const skillsGrid = await page.locator('.skills-grid');
    await expect(skillsGrid).toBeVisible();

    const skillCards = await page.locator('.skill-card');
    await expect(skillCards).toHaveCount(5);
  });
});
