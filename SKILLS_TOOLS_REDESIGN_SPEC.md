# Skills & Tools Redesign Specification

## Overview
Redesign the Skills section with a modern, minimalist design and create a new Tools section with similar styling. Both sections must be visually appealing, match the site's existing design, and be mobile-responsive.

## Success Criteria
**Success is dependent on:**
1. Skills section redesigned with new categories: AI/LLM, DevOps, Cloud, Automation, CI/CD
2. New Tools section created with technologies: Terraform/OpenTofu, AWS services, DataDog, Scalr, GitHub Actions, Seed, SSTv2
3. Both sections are visually appealing and minimalist
4. Styling matches existing site design language
5. Tools section added to header navigation menu
6. Fully mobile responsive (320px - 768px+)
7. All tests passing (unit, integration, E2E)

## Current State Analysis

### Existing Skills Section
Based on codebase review:
- Located in `src/components/skills.js`
- Uses Semantic UI Progress bars
- Data comes from `src/resume.json` (skills array)
- Current skills: DevOps, CICD, AWS, Agile Methodologies, Cloud Native
- Uses progress bars with percentages and colors

### Issues with Current Design
- Progress bars may not effectively communicate skill proficiency
- Limited visual appeal
- Doesn't showcase modern tech stack effectively
- No dedicated section for tools/technologies

## Requirements

### Functional Requirements

#### FR1: Skills Section Redesign
- **FR1.1**: Display 5 skill categories: AI/LLM, DevOps, Cloud, Automation, CI/CD
- **FR1.2**: Use modern, minimalist visual design (not progress bars)
- **FR1.3**: Each skill should have an icon or visual indicator
- **FR1.4**: Skills should be presented as tags or cards
- **FR1.5**: Section must be responsive (1-column mobile, multi-column desktop)
- **FR1.6**: Maintain consistent color scheme with site (teal accent)

#### FR2: New Tools Section
- **FR2.1**: Create new Tools component
- **FR2.2**: Display tools in categories:
  - **Infrastructure as Code**: Terraform, OpenTofu
  - **AWS Services**: ECS, S3, CloudFormation, Lambda, API Gateway, Route 53, CloudWatch
  - **Monitoring**: DataDog
  - **Platform**: Scalr
  - **CI/CD**: GitHub Actions, Seed
  - **Framework**: SSTv2
- **FR2.3**: Use similar visual design as redesigned Skills section
- **FR2.4**: Tools should be grouped logically
- **FR2.5**: Each tool should be clickable/hoverable with subtle animation

#### FR3: Navigation Integration
- **FR3.1**: Add "Tools" link to header navigation menu
- **FR3.2**: Menu item should scroll to Tools section smoothly
- **FR3.3**: Update mobile navigation to include Tools
- **FR3.4**: Maintain proper navigation order (Home, About, Resume, Skills, Tools, Portfolio, Testimonials, Contact)

#### FR4: Mobile Responsiveness
- **FR4.1**: Skills and Tools sections must work on 320px viewport
- **FR4.2**: Single-column layout on mobile (<768px)
- **FR4.3**: Multi-column layout on tablet/desktop (≥768px)
- **FR4.4**: Touch-friendly elements (≥44px tap targets)
- **FR4.5**: No horizontal scroll

### Non-Functional Requirements

#### NFR1: Visual Design
- **NFR1.1**: Minimalist aesthetic with generous white space
- **NFR1.2**: Consistent with existing site design (fonts, colors, spacing)
- **NFR1.3**: Smooth animations on hover/interaction
- **NFR1.4**: Use site's teal accent color (#2B9DAC or similar)
- **NFR1.5**: Clean typography hierarchy

#### NFR2: Performance
- **NFR2.1**: No additional image assets (use CSS/SVG icons or icon fonts)
- **NFR2.2**: Minimal CSS footprint
- **NFR2.3**: Fast render time on mobile devices

#### NFR3: Accessibility
- **NFR3.1**: Proper semantic HTML
- **NFR3.2**: ARIA labels where needed
- **NFR3.3**: Keyboard navigable
- **NFR3.4**: Sufficient color contrast (WCAG AA)

## Design Proposal

### Visual Design Pattern
Use **pill-style tags** with subtle shadows and hover effects:

```
┌─────────────────────────────────────────────────┐
│  SKILLS                                         │
├─────────────────────────────────────────────────┤
│                                                 │
│  ╭─────────╮ ╭────────╮ ╭───────╮ ╭──────────╮│
│  │ AI/LLM  │ │ DevOps │ │ Cloud │ │Automation││
│  ╰─────────╯ ╰────────╯ ╰───────╯ ╰──────────╯│
│  ╭────────╮                                     │
│  │ CI/CD  │                                     │
│  ╰────────╯                                     │
│                                                 │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  TOOLS & TECHNOLOGIES                           │
├─────────────────────────────────────────────────┤
│                                                 │
│  Infrastructure as Code                         │
│  ╭───────────╮ ╭──────────╮                    │
│  │ Terraform │ │ OpenTofu │                    │
│  ╰───────────╯ ╰──────────╯                    │
│                                                 │
│  AWS Services                                   │
│  ╭─────╮ ╭────╮ ╭──────────────╮ ╭────────╮   │
│  │ ECS │ │ S3 │ │CloudFormation│ │ Lambda │   │
│  ╰─────╯ ╰────╯ ╰──────────────╯ ╰────────╯   │
│  ╭─────────────╮ ╭──────╮ ╭────────────╮      │
│  │ API Gateway │ │ R53  │ │ CloudWatch │      │
│  ╰─────────────╯ ╰──────╯ ╰────────────╯      │
│                                                 │
│  DevOps & Monitoring                            │
│  ╭──────────╮ ╭───────╮ ╭───────────────╮     │
│  │ DataDog  │ │ Scalr │ │ GitHub Actions│     │
│  ╰──────────╯ ╰───────╯ ╰───────────────╯     │
│  ╭──────╮ ╭───────╮                            │
│  │ Seed │ │ SSTv2 │                            │
│  ╰──────╯ ╰───────╯                            │
│                                                 │
└─────────────────────────────────────────────────┘
```

### CSS Approach
```css
.skill-tag {
  display: inline-block;
  padding: 12px 24px;
  margin: 8px;
  background: #fff;
  border: 2px solid #e0e0e0;
  border-radius: 25px;
  font-size: 16px;
  font-weight: 600;
  color: #333;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.skill-tag:hover {
  border-color: #2B9DAC;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(43, 157, 172, 0.2);
}
```

## TDD Approach

### Phase 1: RED - Write Failing Tests

#### 1.1 Unit Tests - Skills Component

**File**: `src/components/__tests__/skills.test.js`

```javascript
describe('Skills Component Redesign', () => {
  test('renders all 5 skill categories', () => {
    // AI/LLM, DevOps, Cloud, Automation, CI/CD
  });

  test('displays skills as pill-style tags', () => {
    // Check for pill-style class
  });

  test('each skill is clickable/hoverable', () => {
    // Verify interaction handlers
  });

  test('skills section has proper heading', () => {
    // "Skills" or "Core Skills"
  });

  test('renders within #skills section', () => {
    // Semantic HTML check
  });

  test('skills data comes from resume.json', () => {
    // Verify data binding
  });

  test('applies teal accent color on hover', () => {
    // Style check
  });
});
```

#### 1.2 Unit Tests - Tools Component

**File**: `src/components/__tests__/Tools.test.js`

```javascript
describe('Tools Component', () => {
  test('renders without crashing', () => {});

  test('displays all tool categories', () => {
    // Infrastructure, AWS, DevOps & Monitoring
  });

  test('renders Infrastructure as Code tools (Terraform, OpenTofu)', () => {});

  test('renders all 7 AWS services', () => {
    // ECS, S3, CloudFormation, Lambda, API Gateway, R53, CloudWatch
  });

  test('renders DevOps tools (DataDog, Scalr, GitHub Actions, Seed, SSTv2)', () => {});

  test('tools are displayed as pill-style tags', () => {});

  test('tools are grouped under category headings', () => {});

  test('renders within #tools section', () => {});

  test('section has proper heading', () => {});

  test('matches styling of Skills section', () => {});
});
```

#### 1.3 Unit Tests - Header Navigation

**File**: `src/components/__tests__/Header.test.js` (update)

```javascript
describe('Header Navigation - Tools Link', () => {
  test('includes Tools link in navigation', () => {});

  test('Tools link appears after Skills', () => {});

  test('Tools link has correct href (#tools)', () => {});

  test('Tools link has smoothscroll class', () => {});

  test('navigation order is correct', () => {
    // Home, About, Resume, Skills, Tools, Portfolio, Testimonials, Contact
  });
});
```

#### 1.4 Integration Tests

**File**: `src/__tests__/integration/skills-tools-integration.test.js`

```javascript
describe('Skills & Tools Integration', () => {
  test('both sections render in correct order', () => {
    // Skills should come before Tools
  });

  test('both sections use consistent styling', () => {
    // Check shared CSS classes
  });

  test('navigation links scroll to correct sections', () => {});

  test('sections are responsive on mobile', () => {});

  test('data structure supports new design', () => {});
});
```

#### 1.5 E2E Tests - Skills Section

**File**: `e2e/skills-redesign.spec.js`

```javascript
test.describe('Skills Section Redesign', () => {
  test('displays all 5 skills with pill-style design', async ({ page }) => {});

  test('skills are interactive with hover effects', async ({ page }) => {});

  test('section is responsive on mobile (320px)', async ({ page }) => {});

  test('section is responsive on tablet (768px)', async ({ page }) => {});

  test('skills section has no horizontal overflow', async ({ page }) => {});

  test('pill tags are touch-friendly on mobile', async ({ page }) => {});
});
```

#### 1.6 E2E Tests - Tools Section

**File**: `e2e/tools-section.spec.js`

```javascript
test.describe('Tools Section', () => {
  test('displays all tools grouped by category', async ({ page }) => {});

  test('navigation menu includes Tools link', async ({ page }) => {});

  test('clicking Tools link scrolls to section', async ({ page }) => {});

  test('all 14+ tools are visible', async ({ page }) => {});

  test('tools have hover effects', async ({ page }) => {});

  test('section is mobile responsive', async ({ page }) => {});

  test('category headings are visible', async ({ page }) => {});

  test('tools section fits viewport width on mobile', async ({ page }) => {});
});
```

#### 1.7 E2E Tests - Navigation

**File**: `e2e/navigation.spec.js` (update)

```javascript
test.describe('Navigation with Tools Link', () => {
  test('Tools link appears in correct position', async ({ page }) => {});

  test('all 8 navigation items are present', async ({ page }) => {});

  test('clicking each nav item scrolls to correct section', async ({ page }) => {});

  test('mobile navigation includes Tools', async ({ page }) => {});
});
```

### Phase 2: GREEN - Implement Features

#### 2.1 Update Data Structure

**File**: `src/resume.json`

```json
{
  "skills": [
    {
      "name": "AI / LLM",
      "category": "core",
      "icon": "brain"
    },
    {
      "name": "DevOps",
      "category": "core",
      "icon": "cogs"
    },
    {
      "name": "Cloud",
      "category": "core",
      "icon": "cloud"
    },
    {
      "name": "Automation",
      "category": "core",
      "icon": "robot"
    },
    {
      "name": "CI/CD",
      "category": "core",
      "icon": "infinity"
    }
  ],
  "tools": [
    {
      "category": "Infrastructure as Code",
      "items": ["Terraform", "OpenTofu"]
    },
    {
      "category": "AWS Services",
      "items": [
        "ECS",
        "S3",
        "CloudFormation",
        "Lambda",
        "API Gateway",
        "Route 53",
        "CloudWatch"
      ]
    },
    {
      "category": "DevOps & Monitoring",
      "items": ["DataDog", "Scalr", "GitHub Actions", "Seed", "SSTv2"]
    }
  ]
}
```

#### 2.2 Redesign Skills Component

**File**: `src/components/skills.js`

```javascript
import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
import './Skills.css';

export default class Skills extends Component {
  render() {
    const { skills } = this.props.resumeData;

    return (
      <section id="skills">
        <Container>
          <Header as="h2" textAlign="center">
            Core Skills
          </Header>
          <div className="skills-container">
            {skills && skills.map((skill, index) => (
              <div
                key={index}
                className="skill-pill"
                role="button"
                tabIndex={0}
              >
                {skill.icon && <i className={`icon-${skill.icon}`}></i>}
                {skill.name}
              </div>
            ))}
          </div>
        </Container>
      </section>
    );
  }
}
```

#### 2.3 Create Tools Component

**File**: `src/components/Tools.js`

```javascript
import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
import './Tools.css';

export default class Tools extends Component {
  render() {
    const { tools } = this.props.resumeData;

    return (
      <section id="tools">
        <Container>
          <Header as="h2" textAlign="center">
            Tools & Technologies
          </Header>
          {tools && tools.map((category, catIndex) => (
            <div key={catIndex} className="tool-category">
              <h3 className="category-heading">{category.category}</h3>
              <div className="tools-container">
                {category.items.map((tool, toolIndex) => (
                  <div
                    key={toolIndex}
                    className="tool-pill"
                    role="button"
                    tabIndex={0}
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Container>
      </section>
    );
  }
}
```

#### 2.4 Create Shared Styles

**File**: `src/components/Skills.css` & `src/components/Tools.css`

```css
/* Shared styles for Skills and Tools */
#skills, #tools {
  padding: 60px 0;
  background: #f8f9fa;
}

#skills h2, #tools h2 {
  font-size: 36px;
  margin-bottom: 40px;
  color: #333;
  font-weight: 700;
}

.skills-container,
.tools-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  margin: 30px 0;
}

.skill-pill,
.tool-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: #ffffff;
  border: 2px solid #e0e0e0;
  border-radius: 25px;
  font-size: 16px;
  font-weight: 600;
  color: #333;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
  user-select: none;
}

.skill-pill:hover,
.tool-pill:hover {
  border-color: #2B9DAC;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(43, 157, 172, 0.25);
}

.skill-pill:active,
.tool-pill:active {
  transform: translateY(0);
}

.skill-pill:focus,
.tool-pill:focus {
  outline: 2px solid #2B9DAC;
  outline-offset: 2px;
}

/* Tool categories */
.tool-category {
  margin-bottom: 40px;
}

.category-heading {
  font-size: 20px;
  font-weight: 600;
  color: #555;
  margin-bottom: 20px;
  text-align: left;
  padding-left: 20px;
}

/* Responsive */
@media (max-width: 768px) {
  #skills, #tools {
    padding: 40px 16px;
  }

  #skills h2, #tools h2 {
    font-size: 28px;
    margin-bottom: 30px;
  }

  .skill-pill,
  .tool-pill {
    font-size: 14px;
    padding: 10px 20px;
  }

  .category-heading {
    font-size: 18px;
    padding-left: 0;
    text-align: center;
  }

  .skills-container,
  .tools-container {
    gap: 12px;
  }
}

@media (max-width: 480px) {
  .skills-container,
  .tools-container {
    flex-direction: column;
    align-items: stretch;
  }

  .skill-pill,
  .tool-pill {
    justify-content: center;
    width: 100%;
  }
}
```

#### 2.5 Update Header Navigation

**File**: `src/components/Header.js`

```javascript
// Update navigation to include Tools
<ul id="nav" className="nav">
  <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
  <li><a className="smoothscroll" href="#about">About</a></li>
  <li><a className="smoothscroll" href="#resume">Resume</a></li>
  <li><a className="smoothscroll" href="#skills">Skills</a></li>
  <li><a className="smoothscroll" href="#tools">Tools</a></li>
  <li><a className="smoothscroll" href="#portfolio">Works</a></li>
  <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
  <li><a className="smoothscroll" href="#contact">Contact</a></li>
</ul>
```

#### 2.6 Update App Component

**File**: `src/App.js`

```javascript
import Tools from './components/Tools';

// Add Tools component
<Skills resumeData={resumeData}/>
<Tools resumeData={resumeData}/>
<Portfolio resumeData={resumeData}/>
```

#### 2.7 Update Test Mock Data

**File**: `src/test-utils/mock-data.js`

```javascript
export const mockResumeData = {
  // ... existing data
  skills: [
    { name: "AI / LLM", category: "core", icon: "brain" },
    { name: "DevOps", category: "core", icon: "cogs" },
    { name: "Cloud", category: "core", icon: "cloud" },
    { name: "Automation", category: "core", icon: "robot" },
    { name: "CI/CD", category: "core", icon: "infinity" }
  ],
  tools: [
    {
      category: "Infrastructure as Code",
      items: ["Terraform", "OpenTofu"]
    },
    {
      category: "AWS Services",
      items: ["ECS", "S3", "CloudFormation", "Lambda", "API Gateway", "Route 53", "CloudWatch"]
    },
    {
      category: "DevOps & Monitoring",
      items: ["DataDog", "Scalr", "GitHub Actions", "Seed", "SSTv2"]
    }
  ]
};
```

### Phase 3: REFACTOR - Optimize and Polish

#### 3.1 Performance Optimizations
- Use CSS transforms for animations (GPU accelerated)
- Minimize re-renders with React.memo if needed
- Ensure smooth scrolling with passive event listeners

#### 3.2 Accessibility Enhancements
- Add ARIA labels to pill elements
- Ensure keyboard navigation works smoothly
- Add focus visible states
- Check color contrast ratios

#### 3.3 Visual Polish
- Fine-tune animation timing
- Ensure consistent spacing
- Add subtle gradient or shadow variations
- Test on different screen sizes

#### 3.4 Code Quality
- Remove any unused imports
- Add PropTypes validation
- Ensure consistent naming conventions
- Add comments for complex logic

## Testing Strategy

### Test Execution Order

1. **Unit Tests** (Run first)
   - Skills component tests
   - Tools component tests
   - Header navigation tests
   - Mock data validation

2. **Integration Tests** (Run second)
   - Skills-Tools integration
   - Navigation integration
   - Data flow tests

3. **E2E Tests** (Run last)
   - Skills section E2E
   - Tools section E2E
   - Navigation E2E
   - Mobile responsiveness

### Coverage Goals
- **Unit Tests**: 100% component coverage
- **Integration Tests**: All component interactions tested
- **E2E Tests**: All user journeys validated
- **Overall**: Minimum 90% code coverage

## Acceptance Criteria Checklist

### Design & UX
- [ ] Skills section uses pill-style minimalist design
- [ ] Tools section uses matching pill-style design
- [ ] Both sections are visually appealing
- [ ] Consistent with site's existing design language
- [ ] Smooth hover animations on all pills
- [ ] Generous white space (not cluttered)
- [ ] Teal accent color used appropriately

### Functionality
- [ ] Skills displays: AI/LLM, DevOps, Cloud, Automation, CI/CD
- [ ] Tools displays all 14+ specified technologies
- [ ] Tools are grouped into 3 categories
- [ ] Tools link added to header navigation
- [ ] Navigation scrolls smoothly to sections
- [ ] All data comes from resume.json

### Mobile Responsiveness
- [ ] Works perfectly on 320px viewport (iPhone SE)
- [ ] Works on 375px viewport (iPhone 8)
- [ ] Works on 768px viewport (iPad)
- [ ] No horizontal scroll on any viewport
- [ ] Touch targets are ≥44px
- [ ] Single-column layout on mobile
- [ ] Multi-column layout on desktop

### Testing
- [ ] All unit tests passing (Skills, Tools, Header)
- [ ] All integration tests passing
- [ ] All E2E tests passing (skills-redesign, tools-section, navigation)
- [ ] Mobile E2E tests passing
- [ ] Build successful with no errors
- [ ] Test coverage ≥90%

### Code Quality
- [ ] No console errors or warnings
- [ ] Proper semantic HTML
- [ ] ARIA labels where needed
- [ ] No accessibility violations
- [ ] Code follows existing conventions
- [ ] CSS is well-organized
- [ ] Components are reusable

## Implementation Checklist

### RED Phase
- [ ] Create `src/components/__tests__/Tools.test.js`
- [ ] Update `src/components/__tests__/skills.test.js`
- [ ] Update `src/components/__tests__/Header.test.js`
- [ ] Create `src/__tests__/integration/skills-tools-integration.test.js`
- [ ] Create `e2e/skills-redesign.spec.js`
- [ ] Create `e2e/tools-section.spec.js`
- [ ] Update `e2e/navigation.spec.js`
- [ ] Run tests - verify all fail as expected

### GREEN Phase
- [ ] Update `src/resume.json` with new skills and tools data
- [ ] Update `src/test-utils/mock-data.js`
- [ ] Redesign `src/components/skills.js`
- [ ] Create `src/components/Tools.js`
- [ ] Create `src/components/Skills.css`
- [ ] Create `src/components/Tools.css`
- [ ] Update `src/components/Header.js` navigation
- [ ] Update `src/App.js` to include Tools component
- [ ] Run tests - verify all pass

### REFACTOR Phase
- [ ] Optimize animations and transitions
- [ ] Add PropTypes validation
- [ ] Improve accessibility (ARIA, keyboard nav)
- [ ] Fine-tune responsive breakpoints
- [ ] Test on real devices
- [ ] Code review and cleanup
- [ ] Update documentation

### Documentation
- [ ] Update `CHANGELOG.md`
- [ ] Update `README.md` if needed
- [ ] Add component documentation
- [ ] Document data structure changes

## File Changes Required

### New Files
- `src/components/Tools.js`
- `src/components/Skills.css`
- `src/components/Tools.css`
- `src/components/__tests__/Tools.test.js`
- `src/__tests__/integration/skills-tools-integration.test.js`
- `e2e/skills-redesign.spec.js`
- `e2e/tools-section.spec.js`

### Modified Files
- `src/resume.json` (new data structure)
- `src/components/skills.js` (complete redesign)
- `src/components/Header.js` (add Tools nav link)
- `src/App.js` (add Tools component)
- `src/test-utils/mock-data.js` (new mock data)
- `src/components/__tests__/skills.test.js` (new tests)
- `src/components/__tests__/Header.test.js` (navigation tests)
- `e2e/navigation.spec.js` (update for Tools link)
- `CHANGELOG.md` (document changes)

## Color Palette

Based on existing site design:
- **Primary**: #2B9DAC (Teal) - for hover states and accents
- **Background**: #F8F9FA (Light gray)
- **Pill Background**: #FFFFFF (White)
- **Border**: #E0E0E0 (Light gray)
- **Text**: #333333 (Dark gray)
- **Heading**: #333333 (Dark gray)

## Success Metrics

### Before Implementation
- Skills uses progress bars (outdated design)
- No dedicated Tools section
- Limited visual appeal
- Tools link not in navigation

### After Implementation
- Modern pill-style minimalist design
- Dedicated Tools section with 14+ technologies
- Visually appealing and on-brand
- Tools in navigation menu
- Fully mobile responsive
- All tests passing (90+ tests total)
- Build successful

## Notes
- Use Font Awesome or similar for skill icons
- Ensure smooth scrolling is maintained
- Test with actual mobile devices, not just browser devtools
- Consider adding subtle micro-interactions
- Keep design minimalist - less is more
- Ensure color contrast meets WCAG AA standards
- Pills should be keyboard accessible (tab navigation)
