# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal resume website built with React, showcasing professional experience, skills, portfolio projects, and testimonials. The application is deployed to GitHub Pages at https://natejswenson.github.io/my-resume.

## Tech Stack

- **Framework**: React 16.6.0 with create-react-app
- **UI Library**: Semantic UI React for components and grid layout
- **Styling**: Custom CSS with Font Awesome icons
- **Deployment**: GitHub Pages via gh-pages package
- **Container Support**: Dockerfile available for containerized deployment

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:3000)
npm start

# Build for production
npm run build

# Run tests
npm test

# Deploy to GitHub Pages
npm run deploy
```

## Docker Commands

```bash
# Build Docker image
docker build -t my-resume .

# Run container (exposes port 80)
docker run -p 80:80 my-resume
```

## Architecture

### Data Model
The resume content is stored in two locations:
- **Primary source**: `src/resume.json` - Contains all resume data (personal info, work history, education, skills, portfolio, testimonials)
- **Legacy file**: `src/resumeData.js` - Older JavaScript export format (may contain outdated data)

**Important**: `src/App.js` currently uses both files inconsistently:
- Most components receive `resumeData` from `resume.json`
- About component specifically receives `json` from `resume.json`
- This inconsistency should be unified to use only `resume.json`

### Component Structure
```
App.js (main container)
├── Header (hero section with name/role)
├── About (bio, hobbies, contact details)
├── Resume (education, work experience, skills grid)
│   ├── Education component
│   ├── WorkHistory component
│   └── Skills component
├── Portfolio (projects showcase)
├── Testimonials (professional recommendations)
├── ContactUs (contact form/info)
└── Footer (social links, copyright)
```

### Resume Section Components
The Resume section uses Semantic UI Grid with three columns:
1. Column 1 (width=1): Spacer
2. Column 2 (width=3): Section headers (Education/Experience/Skills)
3. Column 3 (width=12): Content components

### Key Data Schema
Resume data in `src/resume.json` follows this structure:
- `work[]`: Array of job positions with `Company`, `specialization`, `Achievements[]`
- `education[]`: Array with `UniversityName`, `specialization`, `YearOfPassing`
- `skills[]`: Array with `skillname`, `image`, `number` (proficiency), `color`
- `portfolio[]`: Array of projects with `name`, `description`, `imgurl`, `url`
- `testimonials[]`: Array with `description`, `name`

## Editing Resume Content

To update resume information, modify `src/resume.json`. Key fields:
- Personal info: `name`, `role`, `email`, `address`, `website`
- Social links: `socialLinks[]` array with name, url, className (Font Awesome)
- Work history: `work[]` array - add new positions at the top
- Skills: `skills[]` array - image can be icon names or paths
- Portfolio: `portfolio[]` array - showcase projects and links

## Known Issues

1. **Inconsistent data source usage**: App.js imports resume data twice and passes different versions to components
2. **Legacy file**: `resumeData.js` exists but may be outdated compared to `resume.json`
3. **Docker config**: Uses older Node 13 base image (consider updating for security/compatibility)

## Deployment

The site auto-deploys to GitHub Pages when running `npm run deploy`:
1. Builds production bundle
2. Deploys `build/` directory to `gh-pages` branch
3. Available at configured homepage URL in package.json
