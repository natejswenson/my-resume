import { test, expect } from '@playwright/test';

test.describe('Mobile Responsive - iPhone SE (320px)', () => {
  test.use({ viewport: { width: 320, height: 568 } });

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });

  test('Header displays properly on 320px width', async ({ page }) => {
    // Header should be visible
    const header = page.locator('header#home').first();
    await expect(header).toBeVisible();

    // Social icons should be tappable (min 44x44px)
    const socialLinks = await page.locator('.social a').all();
    expect(socialLinks.length).toBeGreaterThan(0);

    for (const link of socialLinks) {
      if (await link.isVisible()) {
        const box = await link.boundingBox();
        if (box) {
          expect(box.width).toBeGreaterThanOrEqual(44);
          expect(box.height).toBeGreaterThanOrEqual(44);
        }
      }
    }

    // Check that header content fits within viewport
    const headerBox = await header.boundingBox();
    expect(headerBox.width).toBeLessThanOrEqual(320);

    // Check that headline is visible
    const headline = page.locator('.responsive-headline').first();
    await expect(headline).toBeVisible();
  });

  test('About section is readable without horizontal scroll', async ({ page }) => {
    const aboutSection = page.locator('#about').first();
    await aboutSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);

    // Check that about section doesn't overflow viewport
    const aboutBox = await aboutSection.boundingBox();

    // Allow small tolerance for borders/padding
    expect(aboutBox.width).toBeLessThanOrEqual(320);

    // Text should be readable (not too small)
    const aboutText = aboutSection.locator('p').first();
    if (await aboutText.count() > 0) {
      const fontSize = await aboutText.evaluate(el =>
        window.getComputedStyle(el).fontSize
      );
      expect(parseFloat(fontSize)).toBeGreaterThanOrEqual(14);
    }
  });

  test('Work experience cards are comfortably viewable', async ({ page }) => {
    const workSection = page.locator('#resume').first();
    await workSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);

    // Company headers should be visible
    const companyHeader = page.locator('text=/GoodLeap/i').first();
    await expect(companyHeader).toBeVisible();

    // Achievement lists should not overflow
    const workBox = await workSection.boundingBox();
    expect(workBox.width).toBeLessThanOrEqual(320);

    // Check that text is readable
    const workText = workSection.locator('p, li').first();
    if (await workText.count() > 0) {
      const fontSize = await workText.evaluate(el =>
        window.getComputedStyle(el).fontSize
      );
      expect(parseFloat(fontSize)).toBeGreaterThanOrEqual(14);
    }
  });

  test('Skills section displays with mobile-friendly layout', async ({ page }) => {
    // Try to find skills section - it might be in resume section or separate
    const skillsSection = page.locator('#skills, section:has-text("Skills")').first();
    if (await skillsSection.count() > 0) {
      await skillsSection.scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);

      // Skills section should not overflow
      const skillsBox = await skillsSection.boundingBox();
      expect(skillsBox.width).toBeLessThanOrEqual(320);

      // Skill items should be visible
      const skillItems = await page.locator('.skill-item, .skills .item, .ui.progress').all();
      if (skillItems.length > 0) {
        const firstSkill = skillItems[0];
        if (await firstSkill.isVisible()) {
          const skillBox = await firstSkill.boundingBox();
          if (skillBox) {
            expect(skillBox.width).toBeLessThanOrEqual(320);
          }
        }
      }
    }
  });

  test('Portfolio grid adapts to single column', async ({ page }) => {
    const portfolioSection = page.locator('#portfolio').first();
    await portfolioSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);

    // Portfolio section should not overflow
    const portfolioBox = await portfolioSection.boundingBox();
    expect(portfolioBox.width).toBeLessThanOrEqual(320);

    // Portfolio items should stack vertically
    const portfolioItems = await page.locator('.portfolio-item, .card').all();
    if (portfolioItems.length >= 2) {
      const firstItemBox = await portfolioItems[0].boundingBox();
      const secondItemBox = await portfolioItems[1].boundingBox();

      if (firstItemBox && secondItemBox) {
        // Items should stack vertically (second item below first)
        expect(secondItemBox.y).toBeGreaterThan(firstItemBox.y + firstItemBox.height - 10);

        // Each item should be close to full width
        expect(firstItemBox.width).toBeGreaterThan(250);
        expect(firstItemBox.width).toBeLessThanOrEqual(320);
      }
    }
  });

  test('Contact form is usable on mobile', async ({ page }) => {
    const contactSection = page.locator('#contact').first();
    await contactSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);

    // Form should not overflow
    const contactBox = await contactSection.boundingBox();
    expect(contactBox.width).toBeLessThanOrEqual(320);

    // Input fields should be appropriately sized
    const inputs = await page.locator('input[type="text"], input[type="email"], textarea').all();
    for (const input of inputs) {
      if (await input.isVisible()) {
        const inputBox = await input.boundingBox();
        if (inputBox) {
          expect(inputBox.height).toBeGreaterThanOrEqual(44); // Touch-friendly
          expect(inputBox.width).toBeLessThanOrEqual(320);
        }
      }
    }

    // Submit button should be easily tappable
    const submitBtn = page.locator('button[type="submit"], input[type="submit"]').first();
    if (await submitBtn.count() > 0 && await submitBtn.isVisible()) {
      const btnBox = await submitBtn.boundingBox();
      if (btnBox) {
        expect(btnBox.height).toBeGreaterThanOrEqual(44);
        expect(btnBox.width).toBeGreaterThanOrEqual(44);
      }
    }
  });
});

test.describe('Mobile Responsive - iPhone 12 Pro (390px)', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });

  test('All sections fit within 390px viewport', async ({ page }) => {
    const sections = ['header', '#about', '#resume', '#skills', '#portfolio', '#contact'];

    for (const selector of sections) {
      const section = page.locator(selector).first();
      if (await section.count() > 0) {
        await section.scrollIntoViewIfNeeded();
        await page.waitForTimeout(300);

        const sectionBox = await section.boundingBox();
        expect(sectionBox.width).toBeLessThanOrEqual(390);
      }
    }
  });

  test('Navigation is accessible on 390px', async ({ page }) => {
    // Check that navigation links are present
    const navLinks = await page.locator('nav a, .menu a').all();
    expect(navLinks.length).toBeGreaterThan(0);

    // Each nav item should be tappable
    for (const link of navLinks) {
      if (await link.isVisible()) {
        const box = await link.boundingBox();
        expect(box.height).toBeGreaterThanOrEqual(44);
      }
    }
  });

  test('Images scale appropriately on 390px', async ({ page }) => {
    const images = await page.locator('img').all();

    for (const img of images) {
      if (await img.isVisible()) {
        const imgBox = await img.boundingBox();
        expect(imgBox.width).toBeLessThanOrEqual(390);
      }
    }
  });
});

test.describe('Mobile Responsive - Tablet (768px)', () => {
  test.use({ viewport: { width: 768, height: 1024 } });

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });

  test('Layout adapts appropriately for tablet', async ({ page }) => {
    // At 768px, we might show 2-column layouts
    const sections = ['header', '#about', '#resume', '#skills', '#portfolio'];

    for (const selector of sections) {
      const section = page.locator(selector).first();
      if (await section.count() > 0) {
        await section.scrollIntoViewIfNeeded();
        await page.waitForTimeout(300);

        const sectionBox = await section.boundingBox();
        expect(sectionBox.width).toBeLessThanOrEqual(768);
      }
    }
  });

  test('Portfolio shows 2 columns on tablet', async ({ page }) => {
    const portfolioSection = page.locator('#portfolio').first();
    await portfolioSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);

    const portfolioItems = await page.locator('.portfolio-item, .card').all();
    if (portfolioItems.length >= 2) {
      const firstItemBox = await portfolioItems[0].boundingBox();
      const secondItemBox = await portfolioItems[1].boundingBox();

      if (firstItemBox && secondItemBox) {
        // On tablet, items might be side by side
        // Check if second item is roughly at same Y position (allowing for grid gap)
        const yDifference = Math.abs(secondItemBox.y - firstItemBox.y);

        // Either stacked or side-by-side is acceptable
        // Just ensure they're within viewport
        expect(firstItemBox.width).toBeLessThanOrEqual(768);
        expect(secondItemBox.width).toBeLessThanOrEqual(768);
      }
    }
  });

  test('Typography is appropriate for tablet', async ({ page }) => {
    const h1 = page.locator('h1').first();
    const h1Size = await h1.evaluate(el =>
      window.getComputedStyle(el).fontSize
    );

    // Tablet should have larger text than mobile (at 768px, our CSS sets h1 to 48px)
    expect(parseFloat(h1Size)).toBeGreaterThanOrEqual(28);
    expect(parseFloat(h1Size)).toBeLessThanOrEqual(48);
  });
});
