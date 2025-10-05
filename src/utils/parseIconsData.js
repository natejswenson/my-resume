/**
 * Utility functions for parsing icons.md markdown file into structured skill data
 */

/**
 * Fix common typos in the icons.md content
 * @param {string} text - Text to fix typos in
 * @returns {string} Text with typos corrected
 */
export function fixTypos(text) {
  if (!text) return text;

  const typoMap = {
    'Manangement': 'Management',
    'Terrafomr': 'Terraform',
    'Proffesional': 'Professional',
    'Proffestional': 'Professional',
    'Infrastrucure': 'Infrastructure',
    'Infastrucure': 'Infrastructure',
    'mananged': 'managed'
  };

  let result = text;
  Object.keys(typoMap).forEach(typo => {
    const regex = new RegExp(typo, 'gi');
    result = result.replace(regex, typoMap[typo]);
  });

  return result;
}

/**
 * Extract icon component name from markdown icon line
 * @param {string} line - Line containing icon definition (e.g., "-icon=<SiTerraform />")
 * @returns {string|null} Icon component name without brackets, or null if not found
 */
function extractIconName(line) {
  if (!line) return null;

  const match = line.match(/-[Ii]con=<(.+?)\s*\/>/);
  if (match && match[1]) {
    return match[1].trim();
  }

  return null;
}

/**
 * Generate placeholder description for skills without descriptions
 * @param {string} skillName - Name of the skill
 * @returns {string} Placeholder description
 */
function generatePlaceholder(skillName) {
  return `Placeholder: ${skillName} experience and expertise`;
}

/**
 * Parse a skill block (lines between headers)
 * @param {string[]} lines - Array of lines for this skill
 * @param {string} name - Skill name from header
 * @param {boolean} isChild - Whether this is a child skill
 * @returns {object} Parsed skill object
 */
function parseSkillBlock(lines, name, isChild = false) {
  let icon = null;
  let description = '';

  for (const line of lines) {
    const trimmedLine = line.trim();

    if (trimmedLine.startsWith('-Icon=') || trimmedLine.startsWith('-icon=')) {
      icon = extractIconName(trimmedLine);
    } else if (trimmedLine && !trimmedLine.startsWith('#') && !trimmedLine.startsWith('-')) {
      description += (description ? ' ' : '') + trimmedLine;
    }
  }

  // Fix typos in description
  description = fixTypos(description).trim();

  // Add placeholder if no description
  if (!description || description.trim() === '') {
    description = generatePlaceholder(name);
  }

  return {
    id: name.toLowerCase().replace(/\s+/g, '-').replace(/\//g, '-'),
    name: name.trim(),
    icon,
    description,
    isParent: false
  };
}

/**
 * Parse icons.md markdown content into structured skill data
 * @param {string} content - Raw markdown content from icons.md
 * @returns {Array} Array of skill objects with hierarchical structure
 */
export function parseIconsData(content) {
  if (!content || content.trim() === '') {
    return [];
  }

  const lines = content.split('\n');
  const skills = [];

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const trimmedLine = line.trim();

    // Check for H1 header (parent or standalone skill)
    if (trimmedLine.match(/^#\s+[^#]/)) {
      const skillName = trimmedLine.substring(2).trim();

      // Collect lines until next header
      const skillLines = [];
      i++;
      while (i < lines.length && !lines[i].trim().match(/^##?\s+/)) {
        skillLines.push(lines[i]);
        i++;
      }

      // Check if this skill has children (next line is ##)
      if (i < lines.length && lines[i].trim().match(/^##\s+/)) {
        // This is a parent skill with children
        const parent = {
          id: skillName.toLowerCase().replace(/\s+/g, '-').replace(/\//g, '-'),
          name: skillName,
          icon: null,
          description: '',
          isParent: true,
          children: []
        };

        // Parse parent's own data
        let parentIcon = null;
        let parentDescription = '';
        for (const l of skillLines) {
          const tl = l.trim();
          if (tl.startsWith('-Icon=') || tl.startsWith('-icon=')) {
            parentIcon = extractIconName(tl);
          } else if (tl && !tl.startsWith('-')) {
            parentDescription += (parentDescription ? ' ' : '') + tl;
          }
        }
        parent.icon = parentIcon;
        parent.description = fixTypos(parentDescription).trim() || generatePlaceholder(skillName);

        // Parse children
        while (i < lines.length && lines[i].trim().match(/^##\s+/)) {
          const childName = lines[i].trim().substring(3).trim();
          i++;

          // Collect child lines
          const childLines = [];
          while (i < lines.length && !lines[i].trim().match(/^##?\s+/)) {
            childLines.push(lines[i]);
            i++;
          }

          const child = parseSkillBlock(childLines, childName, true);
          parent.children.push(child);
        }

        skills.push(parent);
      } else {
        // Standalone skill
        const skill = parseSkillBlock(skillLines, skillName);
        skills.push(skill);
      }
    } else {
      i++;
    }
  }

  return skills;
}

export default {
  parseIconsData,
  fixTypos
};
