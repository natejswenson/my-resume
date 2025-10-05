# Skills Visual Redesign Specification

## Overview
Redesign the Skills section with visually appealing icons and graphics similar to the reference image (image.png), creating a more engaging and modern visual experience. Ensure Skills and Tools & Technologies remain distinct sections with different visual treatments.

## Reference Design Analysis
The reference image shows:
- Colorful, illustrative icons (teal, yellow, orange color scheme)
- Numbered items (1-8+) with clear labels
- Icons are descriptive and metaphorical (chat bubbles for communication, hands for teamwork, etc.)
- Clean, organized grid layout
- Playful, modern aesthetic with yellow/teal/orange accent colors

## Requirements

### Functional Requirements
1. **Skills Section** must display 5 core skills with:
   - Large, colorful, illustrative icons
   - Skill names clearly labeled
   - Visual hierarchy emphasizing this as a primary section
   - Grid layout similar to reference image

2. **Tools & Technologies Section** must remain distinct with:
   - Different visual treatment from Skills
   - Current pill-style design maintained OR enhanced with subtle icons
   - Clear separation from Skills section
   - Category groupings preserved

3. **Icon System**:
   - High-quality SVG or icon font icons
   - Colorful illustrations matching site color scheme (teal #2B9DAC, yellow, orange)
   - Icons must be meaningful and representative of each skill
   - Consistent sizing and spacing

4. **Responsive Design**:
   - Grid adapts from 1-column (mobile) to multi-column (tablet/desktop)
   - Icons scale appropriately on different screen sizes
   - Touch-friendly on mobile (44px minimum tap targets)

### Non-Functional Requirements
1. Accessibility (WCAG 2.1 AA)
2. Performance (icons optimized, lazy loading if needed)
3. Cross-browser compatibility
4. Smooth animations and transitions
5. Maintain existing test coverage

## Visual Design Specification

### Skills Section Design

```
┌─────────────────────────────────────────────────┐
│           Core Skills                           │
│                                                 │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐     │
│  │   🤖     │  │   ⚙️      │  │   ☁️      │     │
│  │  [icon]  │  │  [icon]  │  │  [icon]  │     │
│  │  AI/LLM  │  │  DevOps  │  │  Cloud   │     │
│  └──────────┘  └──────────┘  └──────────┘     │
│                                                 │
│  ┌──────────┐  ┌──────────┐                    │
│  │   🔄     │  │   🚀     │                    │
│  │  [icon]  │  │  [icon]  │                    │
│  │Automation│  │  CI/CD   │                    │
│  └──────────┘  └──────────┘                    │
└─────────────────────────────────────────────────┘
```

#### Skills Visual Specifications:
- **Section Background**: Light gradient or solid color (#f8f9fa)
- **Heading**: Large, bold "Core Skills" (40px desktop, 32px mobile)
- **Icon Container**:
  - 120px x 120px on desktop
  - 100px x 100px on tablet
  - 80px x 80px on mobile
  - Colorful background circles or shapes
  - Drop shadow for depth
- **Icons**:
  - 60-80px size
  - Multi-color illustrations (teal, yellow, orange, white)
  - SVG format for scalability
- **Labels**:
  - Below icon, 18px font
  - Bold weight (600-700)
  - Dark text (#333)
- **Hover Effect**:
  - Subtle lift (transform: translateY(-8px))
  - Increased shadow
  - Icon animation (slight rotation or scale)
- **Grid**:
  - Desktop: 3 columns
  - Tablet: 2 columns
  - Mobile: 1 column or 2 columns (smaller icons)

### Tools & Technologies Section Design

```
┌─────────────────────────────────────────────────┐
│      Tools & Technologies                       │
│                                                 │
│  Infrastructure as Code                         │
│  ┌──────────┐ ┌──────────┐                     │
│  │Terraform │ │ OpenTofu │                     │
│  └──────────┘ └──────────┘                     │
│                                                 │
│  AWS Services                                   │
│  ┌────┐ ┌────┐ ┌──────────────┐ ...            │
│  │ECS │ │ S3 │ │CloudFormation│                │
│  └────┘ └────┘ └──────────────┘                │
│                                                 │
│  DevOps & Monitoring                            │
│  ┌────────┐ ┌──────┐ ┌──────────────┐ ...      │
│  │DataDog │ │Scalr │ │GitHub Actions│          │
│  └────────┘ └──────┘ └──────────────┘          │
└─────────────────────────────────────────────────┘
```

#### Tools Visual Specifications:
- **Section Background**: White or very light (#ffffff)
- **Heading**: "Tools & Technologies" (36px desktop, 28px mobile)
- **Current pill-style maintained** with optional enhancements:
  - Small technology logos/icons inside pills (16x16px)
  - Subtle color coding by category
- **Visual Separation**: Clear spacing/border between Skills and Tools sections

## Icon Selection for Skills

### Recommended Icon Sources:
1. **Font Awesome Pro** (requires license) - extensive library
2. **Remix Icon** (free, open source) - modern, consistent
3. **Heroicons** (free, MIT) - clean, simple
4. **Custom SVG illustrations** - unique, on-brand

### Suggested Icons for Each Skill:

1. **AI / LLM**:
   - Icon: Brain with circuit patterns or neural network
   - Colors: Teal primary, yellow accents
   - Alternative: Robot head, AI chip

2. **DevOps**:
   - Icon: Infinity symbol with gears
   - Colors: Orange primary, teal accents
   - Alternative: Pipeline/workflow diagram

3. **Cloud**:
   - Icon: Cloud with server/database icons
   - Colors: Light blue/teal, white accents
   - Alternative: Multi-cloud symbol

4. **Automation**:
   - Icon: Robotic arm or gears with arrows
   - Colors: Yellow primary, teal/orange accents
   - Alternative: Workflow automation symbol

5. **CI/CD**:
   - Icon: Rocket or circular arrows with pipeline
   - Colors: Teal primary, yellow/orange accents
   - Alternative: Deployment pipeline graphic

## Data Structure

### Updated resume.json Structure:

```json
{
  "skills": [
    {
      "name": "AI / LLM",
      "category": "core",
      "icon": {
        "type": "svg",
        "name": "brain-circuit",
        "colors": ["#2B9DAC", "#FFD166"],
        "path": "/icons/brain-circuit.svg"
      },
      "description": "Artificial Intelligence & Large Language Models"
    },
    {
      "name": "DevOps",
      "category": "core",
      "icon": {
        "type": "svg",
        "name": "infinity-gears",
        "colors": ["#F77F00", "#2B9DAC"],
        "path": "/icons/infinity-gears.svg"
      },
      "description": "Development & Operations Integration"
    },
    {
      "name": "Cloud",
      "category": "core",
      "icon": {
        "type": "svg",
        "name": "cloud-server",
        "colors": ["#2B9DAC", "#FFFFFF"],
        "path": "/icons/cloud-server.svg"
      },
      "description": "Cloud Infrastructure & Services"
    },
    {
      "name": "Automation",
      "category": "core",
      "icon": {
        "type": "svg",
        "name": "robot-arm",
        "colors": ["#FFD166", "#2B9DAC", "#F77F00"],
        "path": "/icons/robot-arm.svg"
      },
      "description": "Process & Infrastructure Automation"
    },
    {
      "name": "CI/CD",
      "category": "core",
      "icon": {
        "type": "svg",
        "name": "rocket-pipeline",
        "colors": ["#2B9DAC", "#FFD166"],
        "path": "/icons/rocket-pipeline.svg"
      },
      "description": "Continuous Integration & Deployment"
    }
  ],
  "tools": [
    {
      "category": "Infrastructure as Code",
      "items": [
        {"name": "Terraform", "logo": "/logos/terraform.svg"},
        {"name": "OpenTofu", "logo": "/logos/opentofu.svg"}
      ]
    },
    {
      "category": "AWS Services",
      "items": [
        {"name": "ECS", "logo": "/logos/aws-ecs.svg"},
        {"name": "S3", "logo": "/logos/aws-s3.svg"},
        {"name": "CloudFormation", "logo": "/logos/aws-cf.svg"},
        {"name": "Lambda", "logo": "/logos/aws-lambda.svg"},
        {"name": "API Gateway", "logo": "/logos/aws-apigw.svg"},
        {"name": "Route 53", "logo": "/logos/aws-r53.svg"},
        {"name": "CloudWatch", "logo": "/logos/aws-cw.svg"}
      ]
    },
    {
      "category": "DevOps & Monitoring",
      "items": [
        {"name": "DataDog", "logo": "/logos/datadog.svg"},
        {"name": "Scalr", "logo": "/logos/scalr.svg"},
        {"name": "GitHub Actions", "logo": "/logos/github-actions.svg"},
        {"name": "Seed", "logo": "/logos/seed.svg"},
        {"name": "SSTv2", "logo": "/logos/sst.svg"}
      ]
    }
  ]
}
```

## TDD Implementation Plan

### Phase 1: RED - Write Failing Tests

#### 1.1 Skills Component Visual Tests

**File**: `src/components/__tests__/skills.test.js`

```javascript
describe('Skills Component - Visual Redesign', () => {
  // Rendering tests
  test('renders with illustrative icon containers', () => {
    // Check for icon-container div
    // Verify icon image/svg element exists
  });

  test('displays 5 skill cards with icons and labels', () => {
    // Verify 5 skill-card elements
    // Each has icon and label
  });

  test('icons have proper sizing and colors', () => {
    // Check icon dimensions
    // Verify color attributes/classes
  });

  test('skill cards are in a responsive grid layout', () => {
    // Check for grid container
    // Verify grid classes/styles
  });

  // Accessibility tests
  test('icons have proper alt text', () => {
    // Check aria-label or alt attributes
  });

  test('skill cards are keyboard accessible', () => {
    // Check tabIndex
    // Verify focus states
  });

  // Visual hierarchy tests
  test('section heading is prominent and centered', () => {
    // Check heading size, weight, alignment
  });

  test('skill cards have hover animations', () => {
    // Verify hover class or animation attribute
  });

  // Icon loading tests
  test('renders SVG icons correctly', () => {
    // Check for <svg> or <img src="*.svg">
  });

  test('handles missing icon gracefully', () => {
    // Test fallback behavior
  });
});
```

#### 1.2 Tools Component Tests (Verify Unchanged)

**File**: `src/components/__tests__/Tools.test.js`

```javascript
describe('Tools Component - Maintains Current Design', () => {
  test('maintains pill-style design', () => {
    // Verify tool-pill class still exists
  });

  test('Tools section is visually distinct from Skills', () => {
    // Check section backgrounds differ
    // Verify heading styles differ
  });

  test('optionally displays technology logos in pills', () => {
    // Check for logo img elements (optional enhancement)
  });
});
```

#### 1.3 Visual Separation Tests

**File**: `src/components/__tests__/SkillsToolsSeparation.test.js`

```javascript
describe('Skills and Tools Section Separation', () => {
  test('Skills section has distinct background color', () => {
    // Verify #skills background
  });

  test('Tools section has different background color', () => {
    // Verify #tools background
  });

  test('sections have adequate spacing between them', () => {
    // Check margin/padding between sections
  });

  test('headings are clearly differentiated', () => {
    // Compare heading sizes, weights, colors
  });
});
```

#### 1.4 Responsive Design Tests

**File**: `e2e/skills-responsive.spec.js`

```javascript
describe('Skills Section - Responsive Design', () => {
  test('displays 1 column on mobile (320px-479px)', async () => {
    // Set viewport to 375px
    // Check grid-template-columns
  });

  test('displays 2 columns on tablet (480px-767px)', async () => {
    // Set viewport to 600px
    // Check grid layout
  });

  test('displays 3 columns on desktop (768px+)', async () => {
    // Set viewport to 1024px
    // Check grid layout
  });

  test('icons scale appropriately on mobile', async () => {
    // Verify icon size on mobile viewport
  });

  test('skill cards are touch-friendly (≥44px)', async () => {
    // Check card dimensions on mobile
  });
});
```

#### 1.5 Performance Tests

**File**: `src/components/__tests__/SkillsPerformance.test.js`

```javascript
describe('Skills Component - Performance', () => {
  test('SVG icons load without blocking render', () => {
    // Test lazy loading or async loading
  });

  test('component renders within performance budget', () => {
    // Measure render time
  });
});
```

### Phase 2: GREEN - Implement Features

#### 2.1 Create Icon Assets

**Create**: `public/icons/` directory with SVG files:
- `brain-circuit.svg` (AI/LLM)
- `infinity-gears.svg` (DevOps)
- `cloud-server.svg` (Cloud)
- `robot-arm.svg` (Automation)
- `rocket-pipeline.svg` (CI/CD)

**Icon Requirements**:
- SVG format
- Optimized/minified
- Inline colors or CSS classes
- 256x256px base size
- Clean, minimal path data

#### 2.2 Update Data Structure

**File**: `src/resume.json`

Update skills array with icon data (see structure above).

#### 2.3 Redesign Skills Component

**File**: `src/components/skills.js`

```javascript
import React, { Component } from 'react';
import './Skills.css';

class Skills extends Component {
  render() {
    const resumeData = this.props.resumeData;
    const skills = resumeData?.skills || [];

    return (
      <section id="skills">
        <div className="container">
          <h2 className="section-heading">Core Skills</h2>
          <p className="section-description">
            Key competencies and areas of expertise
          </p>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="skill-card"
                role="article"
                tabIndex={0}
                aria-label={`${skill.name}: ${skill.description}`}
              >
                <div className="icon-container">
                  {skill.icon && skill.icon.type === 'svg' && (
                    <img
                      src={skill.icon.path}
                      alt={skill.name}
                      className="skill-icon"
                      loading="lazy"
                    />
                  )}
                </div>
                <h3 className="skill-name">{skill.name}</h3>
                {skill.description && (
                  <p className="skill-description">{skill.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
```

#### 2.4 Create New Skills CSS

**File**: `src/components/Skills.css`

```css
/* Skills Section - Visual Redesign */
#skills {
  padding: 80px 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  width: 100%;
}

#skills .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

#skills .section-heading {
  font-size: 40px;
  margin-bottom: 16px;
  color: #212529;
  font-weight: 700;
  text-align: center;
}

#skills .section-description {
  font-size: 18px;
  color: #6c757d;
  text-align: center;
  margin-bottom: 50px;
  font-weight: 400;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  margin: 40px 0;
  justify-items: center;
}

.skill-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 30px 20px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  width: 100%;
  max-width: 280px;
  position: relative;
}

.skill-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 12px 28px rgba(43, 157, 172, 0.2);
}

.skill-card:focus {
  outline: 3px solid #2B9DAC;
  outline-offset: 4px;
}

.icon-container {
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #2B9DAC 0%, #1a7a86 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  box-shadow: 0 6px 16px rgba(43, 157, 172, 0.25);
  transition: transform 0.3s ease;
}

.skill-card:hover .icon-container {
  transform: scale(1.1) rotate(5deg);
}

.skill-icon {
  width: 70px;
  height: 70px;
  filter: brightness(0) invert(1); /* Make icons white */
}

.skill-name {
  font-size: 22px;
  font-weight: 700;
  color: #212529;
  margin-bottom: 12px;
  line-height: 1.3;
}

.skill-description {
  font-size: 14px;
  color: #6c757d;
  line-height: 1.6;
  margin: 0;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .skills-grid {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 30px;
  }
}

@media (max-width: 768px) {
  #skills {
    padding: 60px 16px;
  }

  #skills .section-heading {
    font-size: 32px;
  }

  #skills .section-description {
    font-size: 16px;
    margin-bottom: 40px;
  }

  .skills-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 24px;
  }

  .icon-container {
    width: 100px;
    height: 100px;
  }

  .skill-icon {
    width: 60px;
    height: 60px;
  }

  .skill-name {
    font-size: 18px;
  }

  .skill-card {
    padding: 24px 16px;
  }
}

@media (max-width: 480px) {
  .skills-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .icon-container {
    width: 80px;
    height: 80px;
  }

  .skill-icon {
    width: 50px;
    height: 50px;
  }

  .skill-card {
    max-width: 100%;
  }
}

/* Alternate: Multi-color icon containers */
.skill-card:nth-child(1) .icon-container {
  background: linear-gradient(135deg, #2B9DAC 0%, #1a7a86 100%);
}

.skill-card:nth-child(2) .icon-container {
  background: linear-gradient(135deg, #F77F00 0%, #d66d00 100%);
}

.skill-card:nth-child(3) .icon-container {
  background: linear-gradient(135deg, #06A4FF 0%, #0582c9 100%);
}

.skill-card:nth-child(4) .icon-container {
  background: linear-gradient(135deg, #FFD166 0%, #e6bc4e 100%);
}

.skill-card:nth-child(5) .icon-container {
  background: linear-gradient(135deg, #2B9DAC 0%, #F77F00 50%, #FFD166 100%);
}
```

#### 2.5 Update Tools Section Styling (Optional Enhancement)

**File**: `src/components/Tools.css`

Add subtle enhancements while maintaining pill design:

```css
/* Ensure Tools section is visually distinct */
#tools {
  padding: 60px 0;
  background: #ffffff; /* White background vs Skills gradient */
  width: 100%;
  border-top: 3px solid #e9ecef; /* Separator */
}

/* Optional: Add small logos to pills */
.tool-pill img.tool-logo {
  width: 16px;
  height: 16px;
  margin-right: 6px;
}

/* Optional: Category color coding */
.tool-category:nth-child(1) .tool-pill {
  border-color: #2B9DAC;
}

.tool-category:nth-child(2) .tool-pill {
  border-color: #F77F00;
}

.tool-category:nth-child(3) .tool-pill {
  border-color: #FFD166;
}
```

#### 2.6 Update Tools Component (Optional)

**File**: `src/components/Tools.js`

Add optional logo support:

```javascript
<div className="tool-pill" /* ... */>
  {tool.logo && (
    <img src={tool.logo} alt="" className="tool-logo" />
  )}
  {typeof tool === 'string' ? tool : tool.name}
</div>
```

#### 2.7 Update Test Mock Data

**File**: `src/test-utils/mock-data.js`

```javascript
export const mockResumeData = {
  skills: [
    {
      name: "AI / LLM",
      category: "core",
      icon: {
        type: "svg",
        name: "brain-circuit",
        path: "/icons/brain-circuit.svg"
      },
      description: "Artificial Intelligence & Large Language Models"
    },
    // ... other skills
  ],
  tools: [
    {
      category: "Infrastructure as Code",
      items: [
        { name: "Terraform", logo: "/logos/terraform.svg" },
        { name: "OpenTofu", logo: "/logos/opentofu.svg" }
      ]
    },
    // ... other categories
  ]
};
```

### Phase 3: REFACTOR - Optimize & Polish

#### 3.1 Icon Optimization
- Minify SVG files
- Remove unnecessary metadata
- Optimize path data
- Consider icon sprite sheet for performance

#### 3.2 Accessibility Audit
- Test with screen readers
- Verify keyboard navigation
- Check color contrast ratios
- Add skip links if needed

#### 3.3 Performance Optimization
- Lazy load icons below the fold
- Implement image preloading for critical icons
- Optimize CSS animations (use transform/opacity only)
- Review bundle size impact

#### 3.4 Cross-browser Testing
- Test in Chrome, Firefox, Safari, Edge
- Verify SVG rendering
- Check animation performance
- Test responsive breakpoints

#### 3.5 Code Quality
- Remove duplicate CSS
- Extract common styles
- Add CSS custom properties for colors
- Document component props

## Testing Strategy

### Unit Tests (Jest + RTL)
- **Skills Component**: 15 tests
- **Tools Component**: 5 tests (verify no regression)
- **Visual Separation**: 5 tests
- **Performance**: 3 tests
- **Total**: ~28 unit tests

### Integration Tests
- **Skills + Tools Integration**: 5 tests
- **Navigation**: 3 tests
- **Total**: ~8 integration tests

### E2E Tests (Playwright)
- **Responsive Design**: 10 tests
- **Visual Regression**: 5 tests
- **Accessibility**: 8 tests
- **Performance**: 3 tests
- **Total**: ~26 E2E tests

### Visual Regression Tests
- Screenshot comparison for each breakpoint
- Icon rendering verification
- Animation testing

## Icon Implementation Options

### Option 1: Inline SVG (Recommended)
**Pros**: Full control, easy styling, no HTTP requests
**Cons**: Larger HTML payload

### Option 2: External SVG Files
**Pros**: Cacheable, smaller HTML, easy to update
**Cons**: Additional HTTP requests, harder to style

### Option 3: Icon Font (Font Awesome, Remix Icon)
**Pros**: Easy to implement, widely supported
**Cons**: Limited customization, accessibility concerns

### Option 4: React Icon Library (react-icons)
**Pros**: Tree-shakeable, JSX components, no files to manage
**Cons**: Limited to library icons, bundle size

**Recommendation**: Use Option 2 (External SVG Files) with preloading for critical icons, falling back to Option 4 (react-icons) if custom SVGs are not feasible.

## Alternative: Using React Icons Library

If creating custom SVGs is too time-consuming, use `react-icons`:

```bash
npm install react-icons
```

```javascript
import { FaBrain, FaInfinity, FaCloud, FaRobot, FaRocket } from 'react-icons/fa';
import { GiBrain, GiGears } from 'react-icons/gi';

const skillIcons = {
  'AI / LLM': <GiBrain className="skill-icon" />,
  'DevOps': <FaInfinity className="skill-icon" />,
  'Cloud': <FaCloud className="skill-icon" />,
  'Automation': <FaRobot className="skill-icon" />,
  'CI/CD': <FaRocket className="skill-icon" />
};
```

## Acceptance Criteria

### Must Have
- [ ] Skills section displays 5 skills with large, colorful illustrative icons
- [ ] Icons are visually similar to reference image (colorful, modern, illustrative)
- [ ] Skills section has distinct visual treatment (gradient background, card layout)
- [ ] Tools section maintains current pill design
- [ ] Tools section is visually distinct from Skills (white background, different layout)
- [ ] Section headings are clearly differentiated
- [ ] All icons have proper alt text and ARIA labels
- [ ] Responsive grid layout (1-column mobile, 2-column tablet, 3-column desktop)
- [ ] Smooth hover animations on skill cards
- [ ] All tests passing (unit, integration, E2E)
- [ ] Build successful with acceptable bundle size increase
- [ ] No accessibility regressions

### Should Have
- [ ] Icon color scheme matches site branding (teal, yellow, orange)
- [ ] Skill descriptions displayed below skill names
- [ ] Icon containers have colored backgrounds (different per skill)
- [ ] Touch-friendly on mobile (≥44px targets)
- [ ] Subtle rotation/scale animation on icon hover
- [ ] Technology logos in Tools pills (optional enhancement)
- [ ] Loading states for icons
- [ ] Visual regression tests passing

### Nice to Have
- [ ] Animated icon illustrations (subtle movement)
- [ ] Icon sprite sheet for performance
- [ ] Dark mode support
- [ ] Skill proficiency indicators
- [ ] Tooltips with additional skill information
- [ ] Staggered animation on page load
- [ ] Parallax scrolling effect

## Definition of Done

1. ✅ All acceptance criteria met
2. ✅ All tests passing (≥95% coverage maintained)
3. ✅ Build successful (bundle size increase <50KB)
4. ✅ Cross-browser testing complete (Chrome, Firefox, Safari, Edge)
5. ✅ Accessibility audit passed (WCAG 2.1 AA)
6. ✅ Performance budget met (LCP <2.5s, CLS <0.1)
7. ✅ Code review approved
8. ✅ Documentation updated (CHANGELOG.md)
9. ✅ Visual design approved by stakeholder
10. ✅ Responsive design tested on real devices

## Risk Assessment

### High Risk
- **Custom SVG icons**: Time-consuming to create, may need designer
  - **Mitigation**: Use react-icons library as fallback

### Medium Risk
- **Performance impact**: Large icons may increase bundle size
  - **Mitigation**: Optimize SVGs, use lazy loading, code splitting
- **Browser compatibility**: SVG rendering differences
  - **Mitigation**: Thorough cross-browser testing, fallback images

### Low Risk
- **Accessibility**: Icon-only elements may confuse screen readers
  - **Mitigation**: Proper ARIA labels, alt text, descriptive headings

## Implementation Timeline

- **Day 1**: RED Phase - Write all tests (4-6 hours)
- **Day 2**: GREEN Phase - Create icons, update data structure (6-8 hours)
- **Day 3**: GREEN Phase - Implement Skills component, CSS (4-6 hours)
- **Day 4**: GREEN Phase - Update Tools component, run tests (4-6 hours)
- **Day 5**: REFACTOR Phase - Optimize, accessibility, polish (4-6 hours)
- **Day 6**: Testing, documentation, code review (4-6 hours)

**Total Estimated Time**: 26-38 hours

## Success Metrics

1. **Visual Appeal**: Stakeholder approval of design
2. **Performance**: Bundle size increase <50KB, LCP <2.5s
3. **Accessibility**: WCAG 2.1 AA compliance, screen reader compatible
4. **Test Coverage**: ≥95% coverage maintained
5. **User Engagement**: Increased time on Skills section (analytics)
6. **Mobile Experience**: Zero horizontal scroll, smooth animations

## References

- Reference Image: `image.png`
- Current Skills Component: `src/components/skills.js`
- Current Tools Component: `src/components/Tools.js`
- Color Scheme: Teal (#2B9DAC), Yellow (#FFD166), Orange (#F77F00)
- Icon Resources:
  - https://react-icons.github.io/react-icons/
  - https://remixicon.com/
  - https://heroicons.com/
  - https://fontawesome.com/

---

**Document Version**: 1.0
**Created**: 2025-10-05
**Last Updated**: 2025-10-05
**Author**: Claude Code
**Status**: Ready for Implementation
