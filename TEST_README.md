# Test Suite Documentation

This document provides comprehensive guidance for running and maintaining the test suite for the resume application.

## Table of Contents
- [Overview](#overview)
- [Test Structure](#test-structure)
- [Running Tests](#running-tests)
- [Test Coverage](#test-coverage)
- [Writing New Tests](#writing-new-tests)
- [Troubleshooting](#troubleshooting)

## Overview

The resume application has a comprehensive test suite including:
- **Unit Tests**: 12 component test files
- **Integration Tests**: 2 integration test files
- **E2E Tests**: 6 end-to-end test suites

**Testing Stack:**
- Jest + React Testing Library (unit/integration tests)
- Playwright (E2E tests)
- React Scripts 5.0.1 (test runner)

**Current Coverage:**
- **Components**: 100% coverage
- **Overall**: See coverage report for details

## Test Structure

```
my-resume/
├── src/
│   ├── components/
│   │   ├── __tests__/              # Component unit tests
│   │   │   ├── App.test.js
│   │   │   ├── Header.test.js
│   │   │   ├── About.test.js
│   │   │   ├── Resume.test.js
│   │   │   ├── Education.test.js
│   │   │   ├── work.test.js
│   │   │   ├── work.achievements.test.js
│   │   │   ├── skills.test.js
│   │   │   ├── Portfolio.test.js
│   │   │   ├── Testimonials.test.js
│   │   │   ├── ContactUs.test.js
│   │   │   └── Footer.test.js
│   ├── __tests__/
│   │   ├── integration/            # Integration tests
│   │   │   ├── data-flow.test.js
│   │   │   └── component-integration.test.js
│   ├── test-utils/                 # Test utilities
│   │   ├── mock-data.js
│   │   └── test-helpers.js
│   └── setupTests.js               # Jest setup
├── e2e/                             # E2E tests
│   ├── navigation.spec.js
│   ├── content-display.spec.js
│   ├── social-links.spec.js
│   ├── responsive.spec.js
│   ├── portfolio.spec.js
│   └── accessibility.spec.js
└── playwright.config.js             # Playwright configuration
```

## Running Tests

### Unit & Integration Tests

```bash
# Run tests in watch mode (interactive)
npm test

# Run all tests once
npm test -- --watchAll=false

# Run with coverage report
npm run test:coverage

# Run specific test file
npm test Header.test.js

# Run tests matching pattern
npm test -- --testPathPattern=integration
```

### E2E Tests

```bash
# Run all E2E tests (headless)
npm run test:e2e

# Run E2E tests with UI
npm run test:e2e:ui

# Run specific E2E test file
npx playwright test navigation.spec.js

# Run E2E tests in headed mode (see browser)
npx playwright test --headed

# Debug E2E tests
npx playwright test --debug
```

### CI/CD Testing

```bash
# Run full test suite for CI
npm run test:ci

# This runs:
# - All unit tests
# - All integration tests
# - Coverage report
```

## Test Coverage

### Viewing Coverage Reports

After running `npm run test:coverage`, open:
```
coverage/lcov-report/index.html
```

### Current Coverage Targets

| Category | Target | Current |
|----------|--------|---------|
| Components | 100% | ✅ 100% |
| Statements | >80% | Check report |
| Branches | >80% | Check report |
| Functions | >80% | Check report |
| Lines | >80% | Check report |

### Coverage by Component

All components have 100% coverage:
- ✅ App.js
- ✅ Header.js
- ✅ About.js
- ✅ Resume.js
- ✅ Education.js
- ✅ Work.js
- ✅ WorkAchievements.js
- ✅ Skills.js
- ✅ Portfolio.js
- ✅ Testimonials.js
- ✅ ContactUs.js
- ✅ Footer.js

## Writing New Tests

### Unit Test Template

```javascript
import React from 'react';
import { render, screen } from '@testing-library/react';
import ComponentName from '../ComponentName';
import { mockResumeData } from '../../test-utils/mock-data';

describe('ComponentName', () => {
  it('renders without crashing', () => {
    render(<ComponentName resumeData={mockResumeData} />);
  });

  it('displays expected content', () => {
    render(<ComponentName resumeData={mockResumeData} />);
    expect(screen.getByText('Expected Text')).toBeInTheDocument();
  });

  // Add more tests...
});
```

### E2E Test Template

```javascript
const { test, expect } = require('@playwright/test');

test.describe('Feature Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should do something', async ({ page }) => {
    await expect(page.locator('selector')).toBeVisible();
  });
});
```

### Testing Best Practices

1. **Arrange-Act-Assert Pattern**
   ```javascript
   // Arrange
   const mockData = getMockData();

   // Act
   render(<Component data={mockData} />);

   // Assert
   expect(screen.getByText('text')).toBeInTheDocument();
   ```

2. **Use Semantic Queries**
   - Prefer `getByRole`, `getByLabelText`, `getByText`
   - Avoid `getByTestId` unless necessary
   - Use accessible queries that users would interact with

3. **Test User Behavior**
   - Test what users see and do
   - Don't test implementation details
   - Focus on user journeys

4. **Keep Tests Isolated**
   - Each test should be independent
   - Clean up after tests
   - Don't rely on test execution order

## Test Categories

### Unit Tests (12 files, 81 tests)

Test individual component rendering and logic:
- Component renders without errors
- Props are correctly displayed
- Component structure is correct
- Edge cases are handled

### Integration Tests (2 files)

Test component interactions:
- Data flows correctly between components
- Components integrate properly within App
- Resume data propagates to all components

### E2E Tests (6 suites)

Test complete user workflows:
- **Navigation**: Menu navigation, section scrolling
- **Content Display**: All content renders correctly
- **Social Links**: External links work properly
- **Responsive**: Mobile/tablet/desktop layouts
- **Portfolio**: Project interaction and links
- **Accessibility**: WCAG compliance, keyboard nav

## Troubleshooting

### Common Issues

#### 1. Tests Failing Due to Missing Key Props

**Problem**: Warning about missing "key" prop in lists

**Solution**: Add unique key to mapped items:
```javascript
{items.map((item, index) => (
  <div key={item.id || index}>
    {/* content */}
  </div>
))}
```

#### 2. E2E Tests Timing Out

**Problem**: Playwright tests timeout waiting for elements

**Solution**: Increase timeout or use better selectors:
```javascript
// Increase timeout
test.setTimeout(60000);

// Use more specific selectors
await page.locator('#specific-id').waitFor();
```

#### 3. Coverage Not Meeting Targets

**Problem**: Coverage below 80%

**Solution**:
- Identify uncovered lines in coverage report
- Write tests for untested branches
- Test error conditions and edge cases

#### 4. Flaky E2E Tests

**Problem**: Tests pass/fail intermittently

**Solution**:
- Add explicit waits
- Use `waitForSelector` or `waitForLoadState`
- Avoid `setTimeout`, use Playwright's built-in waits

### Debug Commands

```bash
# Run tests in debug mode
npm test -- --watch --verbose

# Debug specific test
node --inspect-brk node_modules/.bin/jest --runInBand ComponentName.test.js

# Playwright debug mode
npx playwright test --debug

# Generate Playwright trace
npx playwright test --trace on
```

## Continuous Integration

### GitHub Actions Example

```yaml
name: Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'

      - run: npm ci
      - run: npm run test:ci
      - run: npx playwright install
      - run: npm run test:e2e

      - uses: actions/upload-artifact@v3
        if: always()
        with:
          name: coverage
          path: coverage/
```

## Test Utilities

### Mock Data

Location: `src/test-utils/mock-data.js`

Provides consistent test data:
- `mockResumeData`: Complete resume data
- `emptyResumeData`: Empty data for edge cases

### Test Helpers

Location: `src/test-utils/test-helpers.js`

Utility functions:
- `renderWithProps()`: Render with default props
- `checkAccessibility()`: Validate a11y attributes

## Performance

### Test Execution Time

- **Unit/Integration**: ~14 seconds
- **E2E**: Varies by test suite
- **Total Suite**: < 60 seconds (target)

### Optimization Tips

1. **Run tests in parallel**
   ```bash
   npm test -- --maxWorkers=4
   ```

2. **Skip unnecessary tests during development**
   ```bash
   test.only('specific test', () => {
     // only this test runs
   });
   ```

3. **Use coverage selectively**
   ```bash
   npm test -- --coverage --collectCoverageFrom='src/components/**'
   ```

## Resources

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

## Maintenance

### Adding New Components

1. Create component file
2. Create test file in `__tests__/`
3. Import mock data
4. Write minimum 5 test cases
5. Verify coverage >80%
6. Add E2E tests if needed

### Updating Tests

When refactoring components:
1. Run existing tests first
2. Update tests to match new behavior
3. Keep tests aligned with user perspective
4. Maintain coverage levels

---

**Last Updated**: 2025-10-05
**Maintained By**: Development Team
**Questions**: See TEST_SPECIFICATION.md for detailed testing strategy
