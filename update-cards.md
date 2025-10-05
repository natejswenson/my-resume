# Skills Section Update Specification

## Overview
Update the Skills section to display skill cards with icons, names, and related activities based on the data from `icons.md`. Skills with sub-services (like AWS and AI/LLM) should be displayed as parent cards containing nested child cards.

## Requirements

### Functional Requirements
1. **Card Structure**
   - Each skill card must display:
     - Icon (React icon component)
     - Skill name
     - Related activities/description
   - Cards with sub-services (AWS, AI/LLM) must contain nested child cards
   - Placeholder activity text must be added for skills without descriptions

2. **Data Source**
   - Parse and transform data from `icons.md` into structured format
   - Map icon strings (e.g., `<SiTerraform />`) to actual React icon imports
   - Handle hierarchical structure (parent skills with sub-skills)

3. **Hierarchical Display**
   - AWS parent card contains: ECS, S3, CloudFormation, Lambda, API Gateway, Route53, Datadog
   - AI/LLM parent card contains: OpenAI, Anthropic, Cursor, Bedrock
   - Other skills: Terraform, OpenTofu, Scalr, GitHub Actions, SEED displayed as standalone cards

### Non-Functional Requirements
1. Responsive design maintaining current layout principles
2. Consistent styling with existing resume theme
3. Accessible markup with proper ARIA labels
4. Smooth visual transitions for nested card interactions

## Data Structure

### Icons.md Parsed Structure
```javascript
{
  skills: [
    {
      id: "terraform",
      name: "Terraform",
      icon: "SiTerraform",
      description: "Infrastructure Management for ECS and Serverless applications. Subject Matter Expert for Terraform and OpenTofu",
      isParent: false
    },
    {
      id: "aws",
      name: "AWS",
      icon: "FaAws",
      description: "Responsible for Managing Infrastructure across 36 AWS accounts using Cloud Formation and Terraform. Hold several certifications including AI Professional, DevOps Professional, and Cloud Architect.",
      isParent: true,
      children: [
        {
          id: "ecs",
          name: "ECS",
          icon: "SiAmazonecs",
          description: "Migrated services from 36 AWS accounts from EKS --> ECS saving the company thousands each month."
        },
        {
          id: "s3",
          name: "S3",
          icon: null,
          description: "Placeholder: AWS S3 storage and management"
        },
        // ... other AWS services
      ]
    },
    // ... other skills
  ]
}
```

### Icon Import Mapping
```javascript
{
  SiTerraform: "react-icons/si",
  SiOpentofu: "react-icons/si",
  FaAws: "react-icons/fa",
  SiAmazonecs: "react-icons/si",
  // ... complete mapping
}
```

## TDD Plan

### Phase 1: Data Transformation (Red-Green-Refactor)

#### Test 1: Parse icons.md content
**Red**: Write test expecting parsed skill objects
```javascript
describe('parseIconsData', () => {
  it('should parse icons.md into structured skill objects', () => {
    const mockContent = `# Terraform\n-Icon=<SiTerraform />\nDescription here`;
    const result = parseIconsData(mockContent);
    expect(result).toHaveLength(1);
    expect(result[0]).toMatchObject({
      name: 'Terraform',
      icon: 'SiTerraform',
      description: 'Description here'
    });
  });
});
```
**Green**: Implement parseIconsData function
**Refactor**: Extract regex patterns, clean up string processing

#### Test 2: Identify parent-child relationships
**Red**: Write test for hierarchical structure detection
```javascript
it('should identify AWS as parent with child services', () => {
  const result = parseIconsData(iconsContent);
  const aws = result.find(s => s.name === 'AWS');
  expect(aws.isParent).toBe(true);
  expect(aws.children).toHaveLength(7); // ECS, S3, CloudFormation, Lambda, API Gateway, Route53, Datadog
});
```
**Green**: Implement hierarchy detection logic
**Refactor**: Create reusable parent-child mapping utility

#### Test 3: Add placeholder activities
**Red**: Write test for missing descriptions
```javascript
it('should add placeholder activity for skills without description', () => {
  const result = parseIconsData(iconsContent);
  const s3 = result.find(s => s.name === 'AWS').children.find(c => c.name === 'S3');
  expect(s3.description).toContain('Placeholder:');
});
```
**Green**: Implement placeholder generation
**Refactor**: Standardize placeholder text format

### Phase 2: Icon Component Mapping

#### Test 4: Map icon strings to React components
**Red**: Write test for icon import resolution
```javascript
describe('getIconComponent', () => {
  it('should resolve SiTerraform to correct react-icon import', () => {
    const IconComponent = getIconComponent('SiTerraform');
    expect(IconComponent).toBeDefined();
  });
});
```
**Green**: Implement icon mapping and dynamic imports
**Refactor**: Create icon registry/factory pattern

#### Test 5: Handle missing icons
**Red**: Write test for fallback icon behavior
```javascript
it('should return default icon for missing icon string', () => {
  const IconComponent = getIconComponent(null);
  expect(IconComponent).toBe(DefaultIcon);
});
```
**Green**: Implement fallback icon logic
**Refactor**: Centralize default icon configuration

### Phase 3: Skill Card Components

#### Test 6: Render basic skill card
**Red**: Write test for SkillCard component
```javascript
describe('SkillCard', () => {
  it('should render icon, name, and description', () => {
    const skill = { name: 'Terraform', icon: 'SiTerraform', description: 'IaC tool' };
    const { getByText } = render(<SkillCard skill={skill} />);
    expect(getByText('Terraform')).toBeInTheDocument();
    expect(getByText('IaC tool')).toBeInTheDocument();
  });
});
```
**Green**: Implement SkillCard component
**Refactor**: Extract reusable card styles

#### Test 7: Render parent card with children
**Red**: Write test for ParentSkillCard
```javascript
it('should render parent card with nested child cards', () => {
  const skill = {
    name: 'AWS',
    icon: 'FaAws',
    isParent: true,
    children: [{ name: 'ECS', icon: 'SiAmazonecs', description: 'Container service' }]
  };
  const { getByText } = render(<ParentSkillCard skill={skill} />);
  expect(getByText('AWS')).toBeInTheDocument();
  expect(getByText('ECS')).toBeInTheDocument();
});
```
**Green**: Implement ParentSkillCard with nested rendering
**Refactor**: Share styles between parent/child cards

#### Test 8: Interactive nested cards
**Red**: Write test for expand/collapse behavior
```javascript
it('should toggle child cards visibility on parent click', () => {
  const { getByText, queryByText } = render(<ParentSkillCard skill={awsSkill} />);
  expect(queryByText('ECS')).toBeVisible();
  fireEvent.click(getByText('AWS'));
  expect(queryByText('ECS')).not.toBeVisible();
});
```
**Green**: Implement toggle state management
**Refactor**: Use custom hook for collapse logic

### Phase 4: Integration

#### Test 9: Update Skills component
**Red**: Write test for Skills section integration
```javascript
describe('Skills Component', () => {
  it('should render all skills from icons.md', () => {
    const { getByText } = render(<Skills />);
    expect(getByText('Terraform')).toBeInTheDocument();
    expect(getByText('AWS')).toBeInTheDocument();
    expect(getByText('AI / LLM')).toBeInTheDocument();
  });
});
```
**Green**: Integrate parsed data into Skills component
**Refactor**: Clean up data flow and prop passing

#### Test 10: Grid layout with Semantic UI
**Red**: Write test for responsive grid
```javascript
it('should render cards in responsive grid layout', () => {
  const { container } = render(<Skills />);
  expect(container.querySelector('.ui.grid')).toBeInTheDocument();
  expect(container.querySelectorAll('.card')).toHaveLength(8); // Total parent cards
});
```
**Green**: Implement Semantic UI Grid structure
**Refactor**: Optimize grid breakpoints and spacing

## Architecture Design

### Component Hierarchy
```
Skills (Container)
├── SkillsGrid (Semantic UI Grid)
│   ├── SkillCard (Standalone skills)
│   │   ├── IconComponent
│   │   ├── SkillName
│   │   └── Description
│   └── ParentSkillCard (AWS, AI/LLM)
│       ├── ParentIcon
│       ├── ParentName
│       ├── ParentDescription
│       └── ChildrenContainer
│           └── SkillCard[] (nested children)
```

### File Structure
```
src/
├── components/
│   ├── Resume.js (existing)
│   ├── Skills.js (update)
│   ├── SkillCard.js (new)
│   └── ParentSkillCard.js (new)
├── utils/
│   ├── parseIconsData.js (new)
│   └── iconMapper.js (new)
├── data/
│   └── skillsData.js (generated from icons.md)
└── icons.md (source data)
```

### Data Flow
1. Build-time or runtime parsing of `icons.md`
2. Transform raw markdown into structured JSON
3. Map icon strings to React components
4. Pass structured data to Skills component
5. Render appropriate card types based on isParent flag

## Implementation Phases

### Phase 1: Parser Utility (TDD)
- [ ] Create `parseIconsData.js` utility
- [ ] Write tests for markdown parsing
- [ ] Implement regex-based extraction
- [ ] Handle special cases (missing data, formatting issues)
- [ ] Add placeholder generation logic

### Phase 2: Icon System (TDD)
- [ ] Create `iconMapper.js` utility
- [ ] Map all icon strings to react-icons imports
- [ ] Implement dynamic icon loading
- [ ] Add fallback/default icon
- [ ] Write tests for icon resolution

### Phase 3: Card Components (TDD)
- [ ] Create `SkillCard.js` component
- [ ] Create `ParentSkillCard.js` component
- [ ] Implement card styling (Semantic UI Cards)
- [ ] Add hover effects and transitions
- [ ] Write component tests

### Phase 4: Skills Integration (TDD)
- [ ] Update `Skills.js` component
- [ ] Integrate parsed skills data
- [ ] Implement responsive grid layout
- [ ] Add loading states
- [ ] Write integration tests

### Phase 5: Styling & Polish
- [ ] Match existing design system
- [ ] Add animations for parent card expansion
- [ ] Ensure mobile responsiveness
- [ ] Add accessibility features (ARIA, keyboard navigation)

## Testing Strategy

### Unit Tests
- Parser functions (parseIconsData, hierarchy detection)
- Icon mapper utility
- Individual components (SkillCard, ParentSkillCard)
- Placeholder generation logic

### Integration Tests
- Skills component rendering
- Data flow from icons.md to UI
- Parent-child card interactions
- Grid layout responsiveness

### Visual Regression Tests
- Card appearance across breakpoints
- Nested card states (expanded/collapsed)
- Icon rendering consistency

### Accessibility Tests
- Keyboard navigation
- Screen reader compatibility
- Color contrast ratios
- Focus management

## Definition of Done

### Functional Completeness
- [x] All skills from icons.md rendered as cards
- [x] Icons displayed correctly for each skill
- [x] Descriptions/activities shown on all cards
- [x] AWS services nested within AWS parent card
- [x] AI/LLM tools nested within AI/LLM parent card
- [x] Placeholder text added for missing activities
- [x] Parent cards can expand/collapse child cards

### Technical Quality
- [x] All unit tests passing (>90% coverage)
- [x] Integration tests passing
- [x] No console errors or warnings
- [x] TypeScript types defined (if applicable)
- [x] Code reviewed and approved

### Design & UX
- [x] Responsive across mobile, tablet, desktop
- [x] Consistent with existing design system
- [x] Smooth animations and transitions
- [x] Accessible (WCAG 2.1 AA compliant)

### Documentation
- [x] Component usage documented
- [x] Parser utility documented
- [x] Icons.md format documented
- [x] README updated with new structure

## Acceptance Criteria

1. **Visual Verification**
   - Skills section displays all skills from icons.md
   - Each card shows icon, name, and description
   - AWS card contains 7 nested service cards
   - AI/LLM card contains 4 nested tool cards
   - Placeholders visible for items without descriptions

2. **Interaction Verification**
   - Parent cards (AWS, AI/LLM) toggle child visibility on click
   - Smooth expand/collapse animations
   - Hover effects on all cards
   - Keyboard accessible

3. **Data Verification**
   - All skills from icons.md accounted for
   - Icon mappings correct (no broken icons)
   - Descriptions accurately transcribed
   - Typos from icons.md corrected (e.g., "Manangement" → "Management")

4. **Responsive Verification**
   - Cards stack properly on mobile (<768px)
   - Grid layout adjusts on tablet (768px-1024px)
   - Optimal spacing on desktop (>1024px)
   - Parent/child cards maintain hierarchy across breakpoints

## Risk Mitigation

### Risk: Icon package size bloat
**Mitigation**: Use tree-shaking with react-icons, import only needed icons

### Risk: Icons.md format changes
**Mitigation**: Robust parser with error handling, validate structure

### Risk: Performance with many nested cards
**Mitigation**: Virtualization for long lists, lazy load child cards

### Risk: Accessibility issues with nested interactive elements
**Mitigation**: Proper ARIA roles, keyboard navigation, focus management

## Success Metrics

- [ ] Zero accessibility violations (aXe/Lighthouse)
- [ ] <100ms render time for Skills section
- [ ] 100% test coverage on parsing logic
- [ ] Mobile Lighthouse score >90
- [ ] Zero TypeScript errors
- [ ] Positive user feedback on visual design

---

## Notes
- Icons.md contains typos that should be corrected during parsing:
  - "Manangement" → "Management"
  - "Terrafomr" → "Terraform"
  - "Proffesional" → "Professional"
  - "Infrastrucure" → "Infrastructure"
- S3 section has no icon specified - use `SiAmazons3` as default
- SEED section is incomplete - add placeholder description
- Consider adding tooltips for condensed activity descriptions
