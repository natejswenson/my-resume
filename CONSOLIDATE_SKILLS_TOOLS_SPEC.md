# Consolidate Skills & Tools Specification

## Overview
Remove the separate Core Skills section and redesign the Tools & Technologies section to use the same visually appealing card-based format with colorful icons. This consolidates both sections into a single, unified "Tools & Technologies" section.

## Problem Statement
Currently, there are two separate sections:
1. **Core Skills** - Card-based layout with colorful icons (AI/LLM, DevOps, Cloud, Automation, CI/CD)
2. **Tools & Technologies** - Pill-style layout with categories (Infrastructure as Code, AWS Services, DevOps & Monitoring)

The Core Skills section is somewhat redundant with the Tools section. We should consolidate into a single "Tools & Technologies" section using the attractive card-based design.

## Requirements

### Functional Requirements
1. **Remove Core Skills Section**:
   - Remove Skills component from App.js
   - Remove Skills navigation link from Header
   - Remove #skills section entirely

2. **Redesign Tools & Technologies Section**:
   - Apply card-based layout (currently used in Skills)
   - Large colorful icon containers with gradients
   - Reorganize tools into individual cards
   - Each tool gets its own card with icon, name, and optional description

3. **Tool Cards Structure**:
   - **Infrastructure & IaC**: Terraform, OpenTofu, CloudFormation
   - **Cloud Platforms**: AWS (with cloud icon), Azure (optional), GCP (optional)
   - **Containers & Orchestration**: ECS, Kubernetes, Docker
   - **Serverless**: Lambda, API Gateway, Seed, SSTv2
   - **Storage & Data**: S3, CloudWatch
   - **Networking**: Route 53
   - **Monitoring & Observability**: DataDog, CloudWatch
   - **CI/CD & Automation**: GitHub Actions, GitLab CI, Scalr

4. **Visual Design**:
   - Same card-based layout as current Skills section
   - Large colorful icon containers (120px circles)
   - Gradient backgrounds (various colors)
   - Hover animations (lift, rotation, scale)
   - React Icons integration
   - Responsive grid layout

5. **Navigation**:
   - Update Header to remove "Skills" link
   - Keep "Tools" link (or rename to "Tools & Technologies")
   - Update smooth scroll navigation

### Non-Functional Requirements
1. Maintain existing accessibility standards
2. Maintain responsive design
3. Maintain test coverage
4. Build size should not increase significantly
5. Smooth transition animations

## Current State Analysis

### Current Skills Section (to be removed):
```javascript
// src/components/skills.js
- 5 skills with card-based design
- Colorful icon containers
- React Icons (GiBrain, IoMdSettings, FaCloud, FaRobot, FaInfinity)
- Gradient backgrounds
- Skill descriptions
```

### Current Tools Section (to be redesigned):
```javascript
// src/components/Tools.js
- Pill-style design
- 3 categories:
  - Infrastructure as Code: Terraform, OpenTofu
  - AWS Services: ECS, S3, CloudFormation, Lambda, API Gateway, Route 53, CloudWatch
  - DevOps & Monitoring: DataDog, Scalr, GitHub Actions, Seed, SSTv2
```

## Proposed Design

### New Tools & Technologies Section Structure

```
┌─────────────────────────────────────────────────────────────────┐
│              Tools & Technologies                               │
│         Technologies and platforms I work with                  │
│                                                                 │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐      │
│  │   🏗️     │  │   🔧     │  │   ☁️      │  │   🐋     │      │
│  │[Terraform│  │[OpenTofu]│  │  [AWS]   │  │  [ECS]   │      │
│  │   IaC    │  │   IaC    │  │  Cloud   │  │Container │      │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘      │
│                                                                 │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐      │
│  │   λ      │  │   🔍     │  │   📊     │  │   🚀     │      │
│  │ [Lambda] │  │[DataDog] │  │   [S3]   │  │[GitHub   │      │
│  │Serverless│  │Monitoring│  │ Storage  │  │ Actions] │      │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘      │
│                                                                 │
│  ... (12-15 total tool cards)                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Tool Categories & Icons

**Infrastructure as Code:**
- 🏗️ Terraform (orange/brown gradient)
- 🔧 OpenTofu (teal gradient)
- 📋 CloudFormation (blue gradient)

**Cloud & Platforms:**
- ☁️ AWS (orange gradient)
- ☁️ Azure (blue gradient) - optional
- ☁️ GCP (multi-color gradient) - optional

**Containers & Orchestration:**
- 🐋 ECS (teal/blue gradient)
- ⚓ Kubernetes (blue gradient) - if applicable
- 🐳 Docker (blue gradient) - if applicable

**Serverless:**
- λ Lambda (yellow/orange gradient)
- 🌐 API Gateway (purple gradient)
- 🌱 Seed (green gradient)
- 🚀 SSTv2 (teal gradient)

**Storage & Data:**
- 📦 S3 (green gradient)
- 📊 CloudWatch (orange gradient)

**Networking:**
- 🌐 Route 53 (blue gradient)

**Monitoring & Observability:**
- 🔍 DataDog (purple gradient)
- 📈 CloudWatch (orange gradient)

**CI/CD & Automation:**
- 🚀 GitHub Actions (gray/black gradient)
- 🔄 GitLab CI (orange gradient)
- ⚙️ Scalr (teal gradient)

## Data Structure

### Updated resume.json Structure:

```json
{
  "tools": [
    {
      "name": "Terraform",
      "category": "Infrastructure as Code",
      "icon": "terraform",
      "description": "Infrastructure as Code provisioning"
    },
    {
      "name": "OpenTofu",
      "category": "Infrastructure as Code",
      "icon": "opentofu",
      "description": "Open-source Terraform alternative"
    },
    {
      "name": "AWS",
      "category": "Cloud Platform",
      "icon": "aws",
      "description": "Amazon Web Services cloud platform"
    },
    {
      "name": "ECS",
      "category": "Containers",
      "icon": "ecs",
      "description": "Elastic Container Service"
    },
    {
      "name": "S3",
      "category": "Storage",
      "icon": "s3",
      "description": "Simple Storage Service"
    },
    {
      "name": "CloudFormation",
      "category": "Infrastructure as Code",
      "icon": "cloudformation",
      "description": "AWS Infrastructure as Code"
    },
    {
      "name": "Lambda",
      "category": "Serverless",
      "icon": "lambda",
      "description": "Serverless compute functions"
    },
    {
      "name": "API Gateway",
      "category": "Serverless",
      "icon": "apigateway",
      "description": "API management service"
    },
    {
      "name": "Route 53",
      "category": "Networking",
      "icon": "route53",
      "description": "DNS and traffic management"
    },
    {
      "name": "CloudWatch",
      "category": "Monitoring",
      "icon": "cloudwatch",
      "description": "Monitoring and observability"
    },
    {
      "name": "DataDog",
      "category": "Monitoring",
      "icon": "datadog",
      "description": "Application performance monitoring"
    },
    {
      "name": "Scalr",
      "category": "CI/CD",
      "icon": "scalr",
      "description": "Terraform automation platform"
    },
    {
      "name": "GitHub Actions",
      "category": "CI/CD",
      "icon": "github",
      "description": "CI/CD automation workflows"
    },
    {
      "name": "Seed",
      "category": "Serverless",
      "icon": "seed",
      "description": "Serverless deployment platform"
    },
    {
      "name": "SSTv2",
      "category": "Serverless",
      "icon": "sst",
      "description": "Serverless Stack framework"
    }
  ]
}
```

## TDD Implementation Plan

### Phase 1: RED - Write Failing Tests

#### 1.1 Tools Component Tests

**File**: `src/components/__tests__/Tools.test.js`

```javascript
describe('Tools Component - Card-Based Redesign', () => {
  // Rendering tests
  test('renders without crashing', () => {
    // Should render Tools component
  });

  test('displays tool cards with icons and labels', () => {
    // Check for tool-card elements (not tool-pill)
    // Verify 12-15 tool cards
  });

  test('renders with illustrative icon containers', () => {
    // Check for icon-container div
    // Verify icon elements exist
  });

  test('tool cards are in a responsive grid layout', () => {
    // Check for tools-grid container
    // Verify grid classes/styles
  });

  // Visual design tests
  test('tools section has gradient background', () => {
    // Verify #tools has background styling
  });

  test('each tool card has colorful icon container', () => {
    // Check icon-container elements
    // Verify gradient backgrounds
  });

  test('tool cards have hover animations', () => {
    // Verify hover class or animation attribute
  });

  // Accessibility tests
  test('icons have proper alt text', () => {
    // Check aria-label or alt attributes
  });

  test('tool cards are keyboard accessible', () => {
    // Check tabIndex
    // Verify focus states
  });

  // Data structure tests
  test('tools data comes from resumeData prop', () => {
    // Verify tools array is used
  });

  test('displays tool descriptions', () => {
    // Check for tool-description elements
  });

  test('renders React Icons correctly', () => {
    // Check for .tool-icon elements
  });

  test('handles missing icon gracefully', () => {
    // Test fallback behavior
  });
});
```

#### 1.2 Navigation Tests

**File**: `src/components/__tests__/Header.test.js`

```javascript
describe('Header - Skills Section Removed', () => {
  test('does not include Skills link in navigation', () => {
    // Verify Skills link is removed
  });

  test('includes Tools link in navigation', () => {
    // Verify Tools link exists
  });

  test('navigation order is correct without Skills', () => {
    // Home → About → Resume → Tools → Works → Testimonials → Contact
  });

  test('Tools link has correct href', () => {
    // Check href="#tools"
  });
});
```

#### 1.3 App Integration Tests

**File**: `src/App.test.js` or integration test

```javascript
describe('App - Skills Section Removed', () => {
  test('does not render Skills component', () => {
    // Verify Skills component not in DOM
  });

  test('renders Tools component with card design', () => {
    // Verify Tools component exists
    // Check for card-based layout
  });

  test('no #skills section in DOM', () => {
    // Verify #skills doesn't exist
  });

  test('Tools section uses card-based design', () => {
    // Check for tool-card elements
    // Verify icon-container elements
  });
});
```

#### 1.4 Responsive Design Tests

**File**: `e2e/tools-responsive.spec.js`

```javascript
describe('Tools Section - Responsive Card Design', () => {
  test('displays tool cards on desktop (1024px+)', async () => {
    // Set viewport to 1024px
    // Check grid layout
    // Verify tool cards visible
  });

  test('tool cards scale appropriately on mobile', async () => {
    // Set viewport to 375px
    // Verify icon size adjusts
    // Check 1-column layout
  });

  test('tool cards are touch-friendly (≥44px)', async () => {
    // Check card dimensions on mobile
  });

  test('no horizontal overflow on mobile', async () => {
    // Verify no scroll issues
  });
});
```

### Phase 2: GREEN - Implement Features

#### 2.1 Remove Skills Section

**Step 1: Remove Skills Component from App.js**

**File**: `src/App.js`

```javascript
import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
// import Skills from './components/skills'; // REMOVE THIS
import Tools from './components/Tools';
import Portfolio from './components/Portfolio';
import Testimonials from  './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import resumeData from './resume.json';
import json from './resume.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <About resumeData={json}/>
        <Resume resumeData={resumeData}/>
        {/* <Skills resumeData={resumeData}/> */} {/* REMOVE THIS */}
        <Tools resumeData={resumeData}/>
        <Portfolio resumeData={resumeData}/>
        <Testimonials resumeData={resumeData}/>
        <ContactUs resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
      </div>
    );
  }
}

export default App;
```

**Step 2: Remove Skills Link from Header**

**File**: `src/components/Header.js`

```javascript
<ul id="nav" className="nav">
  <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
  <li><a className="smoothscroll" href="#about">About</a></li>
  <li><a className="smoothscroll" href="#resume">Resume</a></li>
  {/* <li><a className="smoothscroll" href="#skills">Skills</a></li> */} {/* REMOVE */}
  <li><a className="smoothscroll" href="#tools">Tools</a></li>
  <li><a className="smoothscroll" href="#portfolio">Works</a></li>
  <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
  <li><a className="smoothscroll" href="#contact">Contact</a></li>
</ul>
```

#### 2.2 Redesign Tools Component

**File**: `src/components/Tools.js`

```javascript
import React, { Component } from 'react';
import {
  SiTerraform,
  SiAmazonaws,
  SiDocker,
  SiGithubactions,
  SiDatadog
} from 'react-icons/si';
import {
  FaCloud,
  FaServer,
  FaDatabase,
  FaNetworkWired,
  FaChartLine,
  FaCog,
  FaRocket
} from 'react-icons/fa';
import { AiOutlineApi } from 'react-icons/ai';
import { DiAws } from 'react-icons/di';
import './Tools.css';

class Tools extends Component {
  getIconComponent(iconName) {
    const iconMap = {
      'terraform': SiTerraform,
      'opentofu': SiTerraform, // Similar to Terraform
      'aws': DiAws,
      'ecs': FaServer,
      's3': FaDatabase,
      'cloudformation': FaCloud,
      'lambda': FaRocket,
      'apigateway': AiOutlineApi,
      'route53': FaNetworkWired,
      'cloudwatch': FaChartLine,
      'datadog': SiDatadog,
      'scalr': FaCog,
      'github': SiGithubactions,
      'seed': FaRocket,
      'sst': FaRocket,
      'docker': SiDocker
    };

    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent className="tool-icon" alt={iconName} /> : null;
  }

  render() {
    const resumeData = this.props.resumeData;
    const tools = resumeData?.tools || [];

    return (
      <section id="tools">
        <div className="container">
          <h2 className="section-heading">Tools & Technologies</h2>
          <p className="section-description">
            Technologies and platforms I work with daily
          </p>

          <div className="tools-grid">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="tool-card"
                role="article"
                tabIndex={0}
                aria-label={`${tool.name}: ${tool.description || tool.name}`}
              >
                <div className="icon-container">
                  {tool.icon && this.getIconComponent(tool.icon)}
                </div>
                <h3 className="tool-name">{tool.name}</h3>
                {tool.description && (
                  <p className="tool-description">{tool.description}</p>
                )}
                {tool.category && (
                  <span className="tool-category-badge">{tool.category}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Tools;
```

#### 2.3 Update Tools.css

**File**: `src/components/Tools.css`

```css
/* Tools Section - Card-Based Design (matching Skills) */
#tools {
  padding: 80px 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  width: 100%;
}

#tools .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

#tools .section-heading {
  font-size: 40px;
  margin-bottom: 16px;
  color: #212529;
  font-weight: 700;
  text-align: center;
}

#tools .section-description {
  font-size: 18px;
  color: #6c757d;
  text-align: center;
  margin-bottom: 50px;
  font-weight: 400;
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  margin: 40px 0;
  justify-items: center;
}

.tool-card {
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

.tool-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 12px 28px rgba(43, 157, 172, 0.2);
}

.tool-card:focus {
  outline: 3px solid #2B9DAC;
  outline-offset: 4px;
}

.tool-card .icon-container {
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

.tool-card:hover .icon-container {
  transform: scale(1.1) rotate(5deg);
}

.tool-icon {
  width: 70px;
  height: 70px;
  color: #ffffff;
}

.tool-name {
  font-size: 22px;
  font-weight: 700;
  color: #212529;
  margin-bottom: 12px;
  line-height: 1.3;
}

.tool-description {
  font-size: 14px;
  color: #6c757d;
  line-height: 1.6;
  margin: 0 0 12px 0;
}

.tool-category-badge {
  font-size: 11px;
  font-weight: 600;
  color: #2B9DAC;
  background: rgba(43, 157, 172, 0.1);
  padding: 4px 12px;
  border-radius: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Multi-color icon containers for variety */
.tool-card:nth-child(1) .icon-container {
  background: linear-gradient(135deg, #F77F00 0%, #d66d00 100%); /* Orange */
}

.tool-card:nth-child(2) .icon-container {
  background: linear-gradient(135deg, #2B9DAC 0%, #1a7a86 100%); /* Teal */
}

.tool-card:nth-child(3) .icon-container {
  background: linear-gradient(135deg, #FF9500 0%, #e67e00 100%); /* AWS Orange */
}

.tool-card:nth-child(4) .icon-container {
  background: linear-gradient(135deg, #06A4FF 0%, #0582c9 100%); /* Blue */
}

.tool-card:nth-child(5) .icon-container {
  background: linear-gradient(135deg, #34D399 0%, #10b981 100%); /* Green */
}

.tool-card:nth-child(6) .icon-container {
  background: linear-gradient(135deg, #3B82F6 0%, #2563eb 100%); /* Blue */
}

.tool-card:nth-child(7) .icon-container {
  background: linear-gradient(135deg, #FFD166 0%, #e6bc4e 100%); /* Yellow */
}

.tool-card:nth-child(8) .icon-container {
  background: linear-gradient(135deg, #A855F7 0%, #9333ea 100%); /* Purple */
}

.tool-card:nth-child(9) .icon-container {
  background: linear-gradient(135deg, #0EA5E9 0%, #0284c7 100%); /* Light Blue */
}

.tool-card:nth-child(10) .icon-container {
  background: linear-gradient(135deg, #F59E0B 0%, #d97706 100%); /* Amber */
}

.tool-card:nth-child(11) .icon-container {
  background: linear-gradient(135deg, #8B5CF6 0%, #7c3aed 100%); /* Violet */
}

.tool-card:nth-child(12) .icon-container {
  background: linear-gradient(135deg, #6B7280 0%, #4b5563 100%); /* Gray */
}

.tool-card:nth-child(13) .icon-container {
  background: linear-gradient(135deg, #EF4444 0%, #dc2626 100%); /* Red */
}

.tool-card:nth-child(14) .icon-container {
  background: linear-gradient(135deg, #10B981 0%, #059669 100%); /* Emerald */
}

.tool-card:nth-child(15) .icon-container {
  background: linear-gradient(135deg, #2B9DAC 0%, #F77F00 50%, #FFD166 100%); /* Multi */
}

/* Responsive Design */
@media (max-width: 1024px) {
  .tools-grid {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 30px;
  }
}

@media (max-width: 768px) {
  #tools {
    padding: 60px 16px;
  }

  #tools .section-heading {
    font-size: 32px;
  }

  #tools .section-description {
    font-size: 16px;
    margin-bottom: 40px;
  }

  .tools-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 24px;
  }

  .tool-card .icon-container {
    width: 100px;
    height: 100px;
  }

  .tool-icon {
    width: 60px;
    height: 60px;
  }

  .tool-name {
    font-size: 18px;
  }

  .tool-card {
    padding: 24px 16px;
  }
}

@media (max-width: 480px) {
  .tools-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .tool-card .icon-container {
    width: 80px;
    height: 80px;
  }

  .tool-icon {
    width: 50px;
    height: 50px;
  }

  .tool-card {
    max-width: 100%;
  }
}
```

#### 2.4 Update resume.json

**File**: `src/resume.json`

Remove the `skills` array and update the `tools` array:

```json
{
  "tools": [
    {
      "name": "Terraform",
      "category": "Infrastructure as Code",
      "icon": "terraform",
      "description": "Infrastructure as Code provisioning"
    },
    {
      "name": "OpenTofu",
      "category": "Infrastructure as Code",
      "icon": "opentofu",
      "description": "Open-source Terraform alternative"
    },
    {
      "name": "AWS",
      "category": "Cloud Platform",
      "icon": "aws",
      "description": "Amazon Web Services"
    },
    {
      "name": "ECS",
      "category": "Containers",
      "icon": "ecs",
      "description": "Elastic Container Service"
    },
    {
      "name": "S3",
      "category": "Storage",
      "icon": "s3",
      "description": "Simple Storage Service"
    },
    {
      "name": "CloudFormation",
      "category": "Infrastructure as Code",
      "icon": "cloudformation",
      "description": "AWS Infrastructure as Code"
    },
    {
      "name": "Lambda",
      "category": "Serverless",
      "icon": "lambda",
      "description": "Serverless compute functions"
    },
    {
      "name": "API Gateway",
      "category": "Serverless",
      "icon": "apigateway",
      "description": "API management service"
    },
    {
      "name": "Route 53",
      "category": "Networking",
      "icon": "route53",
      "description": "DNS and traffic management"
    },
    {
      "name": "CloudWatch",
      "category": "Monitoring",
      "icon": "cloudwatch",
      "description": "Monitoring and observability"
    },
    {
      "name": "DataDog",
      "category": "Monitoring",
      "icon": "datadog",
      "description": "Application performance monitoring"
    },
    {
      "name": "Scalr",
      "category": "CI/CD",
      "icon": "scalr",
      "description": "Terraform automation platform"
    },
    {
      "name": "GitHub Actions",
      "category": "CI/CD",
      "icon": "github",
      "description": "CI/CD automation workflows"
    },
    {
      "name": "Seed",
      "category": "Serverless",
      "icon": "seed",
      "description": "Serverless deployment platform"
    },
    {
      "name": "SSTv2",
      "category": "Serverless",
      "icon": "sst",
      "description": "Serverless Stack framework"
    }
  ]
}
```

#### 2.5 Update Mock Data

**File**: `src/test-utils/mock-data.js`

Remove skills array and update tools array with new structure.

### Phase 3: REFACTOR - Optimize & Polish

#### 3.1 Code Quality
- Remove unused Skills.js file (or keep for potential future use)
- Remove unused Skills.css (or keep for reference)
- Clean up imports
- Ensure no dead code

#### 3.2 Performance
- Verify icon bundle size
- Optimize icon imports (tree-shaking)
- Check build size impact

#### 3.3 Accessibility
- Test with screen readers
- Verify keyboard navigation
- Check color contrast ratios
- Ensure ARIA labels are correct

#### 3.4 Visual Polish
- Ensure consistent spacing
- Verify gradient colors are appealing
- Test hover animations are smooth
- Check responsive breakpoints

## Acceptance Criteria

### Must Have
- [ ] Core Skills section completely removed from app
- [ ] Skills navigation link removed from Header
- [ ] Tools & Technologies section uses card-based design
- [ ] 12-15 tool cards displayed with icons
- [ ] Each tool card has colorful gradient icon container
- [ ] Tool cards have hover animations (lift, rotation, scale)
- [ ] Responsive grid layout (1-column mobile, multi-column desktop)
- [ ] All icons have proper alt text and ARIA labels
- [ ] All tests passing (unit, integration, E2E)
- [ ] Build successful with acceptable size
- [ ] No accessibility regressions

### Should Have
- [ ] Tool category badges displayed
- [ ] Tool descriptions displayed
- [ ] Multi-color gradients for variety
- [ ] Smooth animations on all devices
- [ ] Touch-friendly on mobile (≥44px targets)
- [ ] Section description added
- [ ] Visual regression tests passing

### Nice to Have
- [ ] Animated icon illustrations (subtle movement)
- [ ] Staggered animation on page load
- [ ] Tooltips with additional tool information
- [ ] Filter/sort by category (optional)
- [ ] Search functionality (optional)

## Definition of Done

1. ✅ All acceptance criteria met
2. ✅ All tests passing (≥95% coverage maintained)
3. ✅ Build successful (bundle size increase acceptable)
4. ✅ Cross-browser testing complete
5. ✅ Accessibility audit passed (WCAG 2.1 AA)
6. ✅ Performance budget met
7. ✅ Code review approved
8. ✅ Documentation updated (CHANGELOG.md)
9. ✅ Visual design approved
10. ✅ Responsive design tested on real devices

## Risk Assessment

### Medium Risk
- **Skills component removal**: May want to preserve for future use
  - **Mitigation**: Keep files but don't import/render

### Low Risk
- **Navigation changes**: Simple removal of one link
- **Tools redesign**: Following proven pattern from Skills
- **Bundle size**: Should be minimal (already have react-icons)

## Implementation Timeline

- **Day 1**: RED Phase - Write all tests (4-6 hours)
- **Day 2**: GREEN Phase - Remove Skills, update Tools component (4-6 hours)
- **Day 3**: GREEN Phase - Update Tools.css, resume.json (3-4 hours)
- **Day 4**: GREEN Phase - Update navigation, run tests (3-4 hours)
- **Day 5**: REFACTOR Phase - Optimize, accessibility, polish (4-6 hours)
- **Day 6**: Testing, documentation, code review (4-6 hours)

**Total Estimated Time**: 22-32 hours

## Success Metrics

1. **Visual Consistency**: Tools section matches Skills design quality
2. **Performance**: Build size increase <10KB
3. **Accessibility**: WCAG 2.1 AA compliance maintained
4. **Test Coverage**: ≥95% coverage maintained
5. **User Experience**: Smooth animations, no layout shifts
6. **Responsive**: Works perfectly 320px - 1200px+

## Migration Notes

### Files to Remove/Modify:
- **Remove**: `src/components/skills.js` (optional - can keep for reference)
- **Remove**: `src/components/Skills.css` (optional - can keep for reference)
- **Remove**: `src/components/__tests__/skills.test.js` (optional)
- **Modify**: `src/App.js`
- **Modify**: `src/components/Header.js`
- **Modify**: `src/components/Tools.js` (complete redesign)
- **Modify**: `src/components/Tools.css` (complete redesign)
- **Modify**: `src/components/__tests__/Tools.test.js`
- **Modify**: `src/resume.json`
- **Modify**: `src/test-utils/mock-data.js`

### Backward Compatibility:
- No backward compatibility required (UI-only change)
- Resume data structure changes but old structure can be ignored

---

**Document Version**: 1.0
**Created**: 2025-10-05
**Last Updated**: 2025-10-05
**Author**: Claude Code
**Status**: Ready for Implementation
