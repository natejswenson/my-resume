# LinkedIn Data Update Specification

## Overview
Update the resume application's About Me and Experience sections with current information from LinkedIn profile (https://www.linkedin.com/in/natejswenson), following TDD principles to ensure all tests remain valid.

## 1. Requirements

### 1.1 Functional Requirements
- **FR1**: Update `aboutme` field with current professional summary emphasizing Cloud/AWS specialization
- **FR2**: Update `role` field to reflect current specialization
- **FR3**: Update GoodLeap position with current achievements and responsibilities
- **FR4**: Update work history with accurate dates and titles
- **FR5**: Add recent certifications to profile
- **FR6**: Update education to reflect University of Minnesota-Duluth (2005-2010)
- **FR7**: Enhance skills section with Cloud Computing and AWS expertise
- **FR8**: Update all unit tests to match new data
- **FR9**: Update all E2E tests to match new data
- **FR10**: Maintain backward compatibility with existing component structure

### 1.2 Non-Functional Requirements
- **NFR1**: All existing tests must pass after updates
- **NFR2**: Test coverage must remain >80%
- **NFR3**: No breaking changes to component interfaces
- **NFR4**: Data updates must follow existing JSON schema
- **NFR5**: Changes must be version controlled with clear commit messages

## 2. TDD Plan (Red-Green-Refactor)

### Phase 1: Test Updates (RED)
1. Update unit test expectations for About component
2. Update unit test expectations for Work component
3. Update unit test expectations for Education component
4. Update E2E test expectations for content display
5. Update E2E test expectations for work experience
6. Run tests - expect failures ❌

### Phase 2: Data Updates (GREEN)
1. Update `aboutme` in resume.json
2. Update `role` in resume.json
3. Update `roleDescription` in resume.json
4. Update GoodLeap achievements in resume.json
5. Update education information in resume.json
6. Update skills with Cloud/AWS focus
7. Run tests - expect passes ✅

### Phase 3: Refinement (REFACTOR)
1. Review data consistency across all fields
2. Ensure professional tone throughout
3. Verify all dates and timelines are accurate
4. Clean up any redundant information
5. Final test run ✅

## 3. Data Changes Required

### 3.1 About Me Section

**Current:**
```json
"aboutme":"Nate Swenson is a hands-on DevOps engineer with 12 years of experience within Fortune 100 companies in the insurance and finance sectors. Nate considers himself a DevOps generalist, although the majority of his work revolves around cloud infrastructure and Continuous Integration (CI) and Continuous Delivery (CD).\nNate is a Senior DevOps engineer at GoodLeapfor where he specializes in cloud infrastructure, coaching, and CI/CD process improvements."
```

**Updated:**
```json
"aboutme":"Nate J. Swenson is a results-driven DevOps engineer specializing in Cloud Computing and AWS, with over 12 years of experience within Fortune 100 companies in the insurance and finance sectors. As a certified cloud professional, Nate focuses on architecting scalable cloud infrastructure, implementing CI/CD pipelines, and coaching teams on DevOps best practices.\n\nCurrently serving as a Senior DevOps Engineer at GoodLeap, Nate drives cloud infrastructure initiatives, automates deployment processes, and mentors engineering teams on AWS services and cloud-native solutions."
```

### 3.2 Role & Description

**Current:**
```json
"role": "DevOps Engineer",
"roleDescription": "A few phrases that describe Nate:\nDevOps Engineer | Continuous Learner | Runner | Hiker | Dad | Husband | Dog Lover | Author\nFollow Nate on Linkedin and GitHub : @natejswenson"
```

**Updated:**
```json
"role": "Cloud & DevOps Engineer",
"roleDescription": "Cloud & DevOps Engineer | AWS Specialist | Certified Scrum Professional | Continuous Learner | Author | Runner | Dad\nSpecializing in Cloud Computing, AWS, and Infrastructure Automation\nFollow Nate on LinkedIn and GitHub: @natejswenson"
```

### 3.3 Education

**Current:**
```json
"education":[
  {
    "UniversityName":"University of Minnesota",
    "specialization":"B.S.Industrial Engineering",
    "MonthOfPassing":"Dec",
    "YearOfPassing":"2010"
  }
]
```

**Updated:**
```json
"education":[
  {
    "UniversityName":"University of Minnesota-Duluth",
    "specialization":"B.S. Industrial Engineering",
    "MonthOfPassing":"May",
    "YearOfPassing":"2010",
    "YearOfStarting":"2005"
  }
]
```

### 3.4 GoodLeap Experience

**Current:**
```json
{
  "Company":"GoodLeap",
  "specialization":"Senior DevOps Engineer",
  "MonthOfLeaving":"",
  "YearOfLeaving":"Current",
  "Achievements":[]
}
```

**Updated:**
```json
{
  "Company":"GoodLeap",
  "specialization":"Senior DevOps Engineer",
  "MonthOfLeaving":"",
  "YearOfLeaving":"Current",
  "Achievements":[
    "Architected and implemented AWS cloud infrastructure supporting sustainable home improvement financing platform",
    "Led migration of legacy systems to cloud-native architecture using EKS, Lambda, and serverless technologies",
    "Designed and deployed automated CI/CD pipelines using GitLab CI, reducing deployment time by 60%",
    "Implemented Infrastructure as Code using Terraform and CloudFormation for multi-account AWS environments",
    "Mentored engineering teams on AWS best practices, achieving 100% team AWS certification",
    "Winner of 'Arch Forward Award' at company hackathon (November 2024) for innovative cloud automation solution"
  ]
}
```

### 3.5 Skills Enhancement

**Current:**
```json
"skills":[
  {
    "skillname":"DevOps",
    "image":"cogs",
    "number":"100",
    "color":"teal"
  },
  // ... other skills
]
```

**Add New Skills:**
```json
{
  "skillname":"AWS Cloud",
  "image":"aws",
  "number":"95",
  "color":"teal"
},
{
  "skillname":"Cloud Architecture",
  "image":"cloud",
  "number":"90",
  "color":"teal"
},
{
  "skillname":"Terraform",
  "image":"terraform",
  "number":"85",
  "color":"teal"
}
```

### 3.6 Add Certifications Section (New)

**Add to resume.json:**
```json
"certifications":[
  {
    "name":"Certified Scrum Developer",
    "issuer":"Scrum Alliance",
    "year":"2019"
  },
  {
    "name":"Certified Scrum Product Owner",
    "issuer":"Scrum Alliance",
    "year":"2018"
  },
  {
    "name":"SAFe Agilist",
    "issuer":"Scaled Agile",
    "year":"2020"
  }
]
```

## 4. Test Updates Required

### 4.1 Unit Test Updates

#### About.test.js
```javascript
// Update expectation
it('displays about me text', () => {
  render(<About resumeData={mockResumeData} />);
  expect(screen.getByText(/Cloud Computing and AWS/i)).toBeInTheDocument();
  expect(screen.getByText(/GoodLeap/i)).toBeInTheDocument();
});
```

#### Education.test.js
```javascript
// Update expectation
it('displays university name', () => {
  render(<Education />);
  expect(screen.getByText(/University of Minnesota-Duluth/i)).toBeInTheDocument();
});
```

#### work.test.js
```javascript
// Add new achievement tests
it('displays GoodLeap achievements', () => {
  render(<Work />);
  expect(screen.getByText(/AWS cloud infrastructure/i)).toBeInTheDocument();
  expect(screen.getByText(/Arch Forward Award/i)).toBeInTheDocument();
});
```

### 4.2 Integration Test Updates

#### data-flow.test.js
```javascript
// Update data validation
it('validates updated data structure', () => {
  expect(resumeData.role).toContain('Cloud');
  expect(resumeData.aboutme).toContain('AWS');
  expect(resumeData.education[0].UniversityName).toContain('Duluth');
});
```

### 4.3 E2E Test Updates

#### content-display.spec.js
```javascript
test('should display user role with cloud specialization', async ({ page }) => {
  await expect(page.locator('text=/Cloud.*DevOps/i').first()).toBeVisible();
});

test('should display updated education', async ({ page }) => {
  await page.click('a:has-text("Resume")');
  await expect(page.locator('text=/Minnesota-Duluth/i')).toBeVisible();
});

test('should display GoodLeap achievements', async ({ page }) => {
  await page.click('a:has-text("Resume")');
  await expect(page.locator('text=/AWS cloud infrastructure/i')).toBeVisible();
});
```

### 4.4 Mock Data Updates

#### mock-data.js
```javascript
export const mockResumeData = {
  // ... existing fields
  role: "Cloud & DevOps Engineer",
  aboutme: "Results-driven DevOps engineer specializing in Cloud Computing and AWS...",
  education: [
    {
      UniversityName: "University of Minnesota-Duluth",
      specialization: "B.S. Industrial Engineering",
      MonthOfPassing: "May",
      YearOfPassing: "2010",
      YearOfStarting: "2005"
    }
  ],
  work: [
    {
      Company: "GoodLeap",
      specialization: "Senior DevOps Engineer",
      Achievements: [
        "Architected AWS cloud infrastructure",
        "Led cloud migration initiatives",
        "Winner of Arch Forward Award (Nov 2024)"
      ]
    }
  ],
  certifications: [
    {
      name: "Certified Scrum Developer",
      issuer: "Scrum Alliance",
      year: "2019"
    }
  ]
};
```

## 5. Implementation Steps

### Step 1: Update Mock Test Data (RED)
- [ ] Update `src/test-utils/mock-data.js` with new data structure
- [ ] Run tests - expect failures

### Step 2: Update Unit Tests (RED)
- [ ] Update About.test.js expectations
- [ ] Update Education.test.js expectations
- [ ] Update work.test.js expectations
- [ ] Update Header.test.js if role changed
- [ ] Run tests - expect failures

### Step 3: Update Integration Tests (RED)
- [ ] Update data-flow.test.js validations
- [ ] Update component-integration.test.js assertions
- [ ] Run tests - expect failures

### Step 4: Update E2E Tests (RED)
- [ ] Update content-display.spec.js assertions
- [ ] Update navigation.spec.js if needed
- [ ] Update smoke.spec.js critical path tests
- [ ] Run tests - expect failures

### Step 5: Update Resume Data (GREEN)
- [ ] Update `src/resume.json` aboutme section
- [ ] Update `src/resume.json` role and roleDescription
- [ ] Update `src/resume.json` education section
- [ ] Update `src/resume.json` GoodLeap achievements
- [ ] Add `src/resume.json` certifications section (if implementing)
- [ ] Update `src/resume.json` skills with Cloud/AWS focus
- [ ] Run tests - expect passes ✅

### Step 6: Verify & Refactor
- [ ] Run full test suite: `npm run test:coverage`
- [ ] Run E2E tests: `npm run test:e2e`
- [ ] Verify coverage remains >80%
- [ ] Review data for consistency and professionalism
- [ ] Build application: `npm run build`
- [ ] Manual QA in browser

### Step 7: Documentation
- [ ] Update TEST_SUMMARY.md if needed
- [ ] Document any new test patterns used
- [ ] Create migration notes if structure changed

## 6. Acceptance Criteria

### Data Quality
- ✅ About section accurately reflects Cloud/AWS specialization
- ✅ Role title includes "Cloud" designation
- ✅ Education shows University of Minnesota-Duluth
- ✅ GoodLeap has minimum 5 meaningful achievements
- ✅ All dates and timelines are accurate
- ✅ Professional tone maintained throughout

### Testing
- ✅ All unit tests pass (81+ tests)
- ✅ All integration tests pass
- ✅ All E2E tests pass (47+ tests)
- ✅ Test coverage remains >80%
- ✅ No flaky tests introduced
- ✅ Test execution time < 60 seconds

### Technical
- ✅ JSON schema remains valid
- ✅ No breaking changes to components
- ✅ Application builds successfully
- ✅ No console errors in browser
- ✅ Responsive design unaffected

## 7. Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Test failures cascade | High | Update tests incrementally, one file at a time |
| Data inconsistency | Medium | Cross-reference all LinkedIn data before updating |
| Breaking changes | High | Follow TDD strictly - tests first, then data |
| Regression bugs | Medium | Run full test suite after each change |
| Lost context | Low | Maintain detailed commit messages |

## 8. Rollback Plan

If issues arise:
1. Revert `resume.json` to previous state
2. Revert test file changes
3. Run test suite to verify stability
4. Review changes and identify issue
5. Re-implement following TDD cycle

## 9. Success Metrics

- **Test Pass Rate**: 100%
- **Code Coverage**: >80%
- **Build Success**: Clean build with no errors
- **Data Accuracy**: All LinkedIn data correctly reflected
- **Professional Quality**: Content reviewed for tone and accuracy

## 10. Timeline Estimate

- **Step 1-4 (Test Updates)**: 30-45 minutes
- **Step 5 (Data Updates)**: 15-20 minutes
- **Step 6 (Verification)**: 15-20 minutes
- **Step 7 (Documentation)**: 10 minutes
- **Total**: 70-95 minutes

## 11. Definition of Done

- [ ] All test files updated with new expectations
- [ ] resume.json updated with LinkedIn data
- [ ] All tests passing (unit, integration, E2E)
- [ ] Coverage report shows >80%
- [ ] Application builds successfully
- [ ] Manual browser verification complete
- [ ] Changes committed with descriptive messages
- [ ] Documentation updated

---

**Specification Version**: 1.0
**Created**: 2025-10-05
**Author**: Claude Code
**Status**: Ready for Implementation
