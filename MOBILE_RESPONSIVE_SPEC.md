# Mobile Responsive Specification

## Overview
Transform the resume application to be fully mobile-friendly, ensuring all components are comfortably viewable and interactive on mobile devices (320px - 768px viewports).

## Success Criteria
**Success is dependent on all components being comfortably viewed on mobile devices.**

All components must:
- Display properly on viewport widths from 320px (iPhone SE) to 768px (iPad)
- Have touch-friendly interactive elements (min 44x44px tap targets)
- Load and render within 3 seconds on 3G networks
- Maintain readability without horizontal scrolling
- Preserve all functionality available on desktop

## Current State Analysis

### Existing Mobile Issues
Based on codebase review:

1. **Header Component** (src/components/Header.js)
   - Fixed navigation bar may overlap content on small screens
   - Social icons might be too small for comfortable tapping
   - Profile image might not scale appropriately

2. **About Component** (src/components/About.js)
   - Two-column grid layout needs to stack vertically on mobile
   - Text blocks may be too wide causing readability issues

3. **Work Experience** (src/components/work.js)
   - Achievement lists may have too much nesting for narrow screens
   - Date formatting might cause text wrapping issues

4. **Skills Component** (src/components/skills.js)
   - Skill progress bars may not be touch-friendly
   - Grid layout needs mobile adaptation

5. **Portfolio Component** (src/components/Portfolio.js)
   - Image gallery grid needs responsive column adjustments
   - Modal views may not be optimized for mobile

6. **Contact Form** (src/components/ContactUs.js)
   - Form inputs need mobile-optimized sizing
   - Submit button needs to be easily tappable

7. **Typography & Spacing**
   - Font sizes may be too small on mobile (< 16px causes zoom on iOS)
   - Padding/margins need mobile-specific adjustments

## TDD Approach

### Phase 1: RED - Write Failing Tests

#### 1.1 Mobile Viewport E2E Tests
Create `e2e/mobile-responsive.spec.js`:

```javascript
test.describe('Mobile Responsive - iPhone SE (320px)', () => {
  test.use({ viewport: { width: 320, height: 568 } });

  test('Header displays properly on 320px width', async ({ page }) => {
    // Profile image scales appropriately
    // Navigation is accessible (hamburger or collapsed)
    // Social icons are tappable (min 44x44px)
  });

  test('About section is readable without horizontal scroll', async ({ page }) => {
    // Text blocks fit within viewport
    // Grid stacks vertically
    // Images scale proportionally
  });

  test('Work experience cards are comfortably viewable', async ({ page }) => {
    // Company headers are readable
    // Achievement lists don't overflow
    // Dates wrap appropriately
  });

  test('Skills section displays with mobile-friendly layout', async ({ page }) => {
    // Skill bars are full width
    // Progress indicators are visible
    // Touch targets are adequate
  });

  test('Portfolio grid adapts to single column', async ({ page }) => {
    // Images scale to fit
    // Cards stack vertically
    // Clickable areas are adequate
  });

  test('Contact form is usable on mobile', async ({ page }) => {
    // Input fields are appropriately sized
    // Labels are readable
    // Submit button is easily tappable
  });
});

test.describe('Mobile Responsive - iPhone 12 Pro (390px)', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  // Similar tests for 390px viewport
});

test.describe('Mobile Responsive - Tablet (768px)', () => {
  test.use({ viewport: { width: 768, height: 1024 } });

  // Tests for tablet breakpoint
});
```

#### 1.2 Touch Target Tests
Create `e2e/touch-targets.spec.js`:

```javascript
test('All interactive elements meet 44x44px minimum', async ({ page }) => {
  const buttons = await page.locator('button, a, input[type="submit"]').all();

  for (const button of buttons) {
    const box = await button.boundingBox();
    expect(box.width).toBeGreaterThanOrEqual(44);
    expect(box.height).toBeGreaterThanOrEqual(44);
  }
});

test('Social media icons are tappable on mobile', async ({ page }) => {
  test.use({ viewport: { width: 375, height: 667 } });

  const socialIcons = await page.locator('.social a').all();
  expect(socialIcons.length).toBeGreaterThan(0);

  for (const icon of socialIcons) {
    const box = await icon.boundingBox();
    expect(box.width).toBeGreaterThanOrEqual(44);
    expect(box.height).toBeGreaterThanOrEqual(44);
  }
});
```

#### 1.3 No Horizontal Scroll Tests
Create `e2e/viewport-overflow.spec.js`:

```javascript
test.describe('No horizontal scroll on mobile viewports', () => {
  const mobileWidths = [320, 375, 390, 414];

  for (const width of mobileWidths) {
    test(`${width}px viewport has no horizontal overflow`, async ({ page }) => {
      await page.setViewportSize({ width, height: 667 });
      await page.goto('http://localhost:3000');

      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);

      expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1); // Allow 1px tolerance
    });
  }
});
```

#### 1.4 Typography Tests
Create `e2e/mobile-typography.spec.js`:

```javascript
test('Body text is at least 16px on mobile', async ({ page }) => {
  test.use({ viewport: { width: 375, height: 667 } });

  const fontSize = await page.locator('body').evaluate(el =>
    window.getComputedStyle(el).fontSize
  );

  expect(parseFloat(fontSize)).toBeGreaterThanOrEqual(16);
});

test('Headings scale appropriately for mobile', async ({ page }) => {
  test.use({ viewport: { width: 375, height: 667 } });

  const h1Size = await page.locator('h1').first().evaluate(el =>
    window.getComputedStyle(el).fontSize
  );

  expect(parseFloat(h1Size)).toBeGreaterThanOrEqual(24);
  expect(parseFloat(h1Size)).toBeLessThanOrEqual(36);
});
```

#### 1.5 Component-Specific Mobile Tests
Update existing component tests with mobile rendering:

```javascript
// src/components/__tests__/Header.test.js
describe('Header Mobile Rendering', () => {
  beforeEach(() => {
    global.innerWidth = 375;
    global.innerHeight = 667;
  });

  test('renders mobile navigation', () => {
    // Test mobile menu behavior
  });

  test('social icons have adequate spacing on mobile', () => {
    // Test icon sizing and spacing
  });
});
```

### Phase 2: GREEN - Implement Mobile Styles

#### 2.1 Update App.css with Mobile-First Approach

```css
/* Base mobile styles (320px+) */
body {
  font-size: 16px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

/* Touch-friendly targets */
a, button, input[type="submit"] {
  min-height: 44px;
  min-width: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

/* Prevent horizontal scroll */
* {
  box-sizing: border-box;
}

img {
  max-width: 100%;
  height: auto;
}

/* Mobile typography */
h1 { font-size: 28px; }
h2 { font-size: 24px; }
h3 { font-size: 20px; }
p { font-size: 16px; }

/* Container padding for mobile */
.container {
  padding: 0 16px;
}

/* Grid stacking for mobile */
.ui.grid > .row {
  flex-direction: column;
}

/* Tablet breakpoint (768px+) */
@media (min-width: 768px) {
  h1 { font-size: 36px; }
  h2 { font-size: 30px; }
  h3 { font-size: 24px; }

  .ui.grid > .row {
    flex-direction: row;
  }
}

/* Desktop breakpoint (1024px+) */
@media (min-width: 1024px) {
  h1 { font-size: 48px; }
  h2 { font-size: 36px; }
  h3 { font-size: 28px; }
}
```

#### 2.2 Component-Specific Mobile Styles

**Header Component:**
```css
/* Header mobile styles */
header {
  padding: 16px;
}

header .profile-pic {
  width: 100px;
  height: 100px;
}

header .social a {
  width: 48px;
  height: 48px;
  margin: 8px;
}

header nav {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

@media (min-width: 768px) {
  header .profile-pic {
    width: 150px;
    height: 150px;
  }

  header nav {
    flex-direction: row;
  }
}
```

**Work Experience:**
```css
.work-item {
  padding: 16px;
  margin-bottom: 24px;
}

.work-item .date {
  display: block;
  margin-top: 8px;
}

@media (min-width: 768px) {
  .work-item .date {
    display: inline;
    margin-left: 12px;
  }
}
```

**Skills Component:**
```css
.skills-grid {
  grid-template-columns: 1fr;
  gap: 16px;
}

@media (min-width: 768px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .skills-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

**Portfolio Component:**
```css
.portfolio-grid {
  grid-template-columns: 1fr;
  gap: 20px;
}

.portfolio-item img {
  width: 100%;
  height: auto;
  min-height: 200px;
  object-fit: cover;
}

@media (min-width: 500px) {
  .portfolio-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .portfolio-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

**Contact Form:**
```css
form input,
form textarea {
  width: 100%;
  font-size: 16px; /* Prevents zoom on iOS */
  padding: 12px;
  min-height: 44px;
}

form button[type="submit"] {
  width: 100%;
  min-height: 48px;
  font-size: 18px;
}

@media (min-width: 768px) {
  form button[type="submit"] {
    width: auto;
    min-width: 200px;
  }
}
```

#### 2.3 Semantic UI Responsive Overrides

Create `src/styles/semantic-mobile-overrides.css`:

```css
/* Override Semantic UI for mobile */
.ui.grid {
  margin: 0 !important;
}

.ui.grid > .row {
  padding: 12px !important;
}

.ui.header {
  font-size: 1.5rem !important;
}

@media (min-width: 768px) {
  .ui.header {
    font-size: 2rem !important;
  }
}

/* Stack columns on mobile */
.ui.stackable.grid > .row > .column {
  width: 100% !important;
  margin: 0 !important;
}
```

### Phase 3: REFACTOR - Optimize and Polish

#### 3.1 Performance Optimization
- Implement lazy loading for images
- Add responsive image srcset
- Optimize bundle size for mobile

#### 3.2 Accessibility Improvements
- Ensure focus states are visible on mobile
- Add aria labels for mobile navigation
- Test with mobile screen readers

#### 3.3 Cross-Device Testing
- Test on real devices (iPhone, Android, iPad)
- Verify landscape and portrait orientations
- Test with different mobile browsers

## Testing Strategy

### Test Execution Order
1. Run mobile E2E tests: `npm run test:e2e -- e2e/mobile-responsive.spec.js`
2. Run touch target tests: `npm run test:e2e -- e2e/touch-targets.spec.js`
3. Run viewport overflow tests: `npm run test:e2e -- e2e/viewport-overflow.spec.js`
4. Run typography tests: `npm run test:e2e -- e2e/mobile-typography.spec.js`
5. Run full E2E suite to ensure no regressions

### Acceptance Criteria Checklist
- [ ] All components render without horizontal scroll on 320px viewport
- [ ] All interactive elements are at least 44x44px
- [ ] Typography is readable (body text ≥ 16px)
- [ ] Images scale appropriately across all mobile viewports
- [ ] Navigation is accessible and functional on mobile
- [ ] Forms are usable with mobile keyboards
- [ ] No layout breaks between 320px - 768px
- [ ] Touch interactions work smoothly
- [ ] Performance: Page loads in < 3s on 3G
- [ ] All existing functionality preserved
- [ ] All existing tests still pass
- [ ] New mobile tests pass with 100% success rate

## Implementation Checklist

### RED Phase
- [ ] Create e2e/mobile-responsive.spec.js
- [ ] Create e2e/touch-targets.spec.js
- [ ] Create e2e/viewport-overflow.spec.js
- [ ] Create e2e/mobile-typography.spec.js
- [ ] Update component tests with mobile cases
- [ ] Run tests - verify all fail as expected

### GREEN Phase
- [ ] Update App.css with mobile-first styles
- [ ] Create semantic-mobile-overrides.css
- [ ] Add component-specific mobile styles
- [ ] Update Header component for mobile
- [ ] Update About component for mobile
- [ ] Update Work component for mobile
- [ ] Update Skills component for mobile
- [ ] Update Portfolio component for mobile
- [ ] Update ContactUs component for mobile
- [ ] Update Footer component for mobile
- [ ] Run tests - verify all pass

### REFACTOR Phase
- [ ] Optimize images for mobile
- [ ] Add lazy loading
- [ ] Test on real devices
- [ ] Fix any edge cases
- [ ] Update documentation
- [ ] Performance audit
- [ ] Accessibility audit

## File Changes Required

### New Files
- `e2e/mobile-responsive.spec.js`
- `e2e/touch-targets.spec.js`
- `e2e/viewport-overflow.spec.js`
- `e2e/mobile-typography.spec.js`
- `src/styles/semantic-mobile-overrides.css`

### Modified Files
- `src/App.css` - Add mobile-first responsive styles
- `src/components/Header.js` - Add mobile navigation logic
- `src/components/__tests__/Header.test.js` - Add mobile tests
- `src/components/__tests__/About.test.js` - Add mobile tests
- `src/components/__tests__/work.test.js` - Add mobile tests
- `src/components/__tests__/skills.test.js` - Add mobile tests
- `src/components/__tests__/Portfolio.test.js` - Add mobile tests
- `src/components/__tests__/ContactUs.test.js` - Add mobile tests
- `playwright.config.js` - Add mobile device configurations
- `CHANGELOG.md` - Document mobile responsive changes

## Viewport Breakpoints

### Primary Test Viewports
- **320px**: iPhone SE (smallest common mobile)
- **375px**: iPhone 12 Mini
- **390px**: iPhone 12 Pro
- **414px**: iPhone 12 Pro Max
- **768px**: iPad (tablet)
- **1024px**: Desktop baseline

### Playwright Device Configuration
```javascript
// playwright.config.js
projects: [
  {
    name: 'Mobile Safari',
    use: { ...devices['iPhone 12'] },
  },
  {
    name: 'Mobile Chrome',
    use: { ...devices['Pixel 5'] },
  },
  {
    name: 'Tablet',
    use: { ...devices['iPad Pro'] },
  },
]
```

## Success Metrics

### Before Mobile Optimization
- Horizontal scroll present on < 768px
- Touch targets < 44px
- Text requires pinch-zoom on mobile
- Grid layouts broken on small screens

### After Mobile Optimization
- Zero horizontal scroll on all mobile viewports
- 100% of touch targets ≥ 44x44px
- All text readable at default zoom
- Layouts stack appropriately on mobile
- All E2E tests passing on mobile viewports
- Lighthouse mobile score ≥ 90

## Notes
- Follow mobile-first CSS approach
- Use Semantic UI's responsive utilities where possible
- Maintain backward compatibility with desktop views
- Test with real devices, not just browser dev tools
- Consider touch gestures (swipe, pinch, etc.)
- Optimize for both iOS and Android browsers
