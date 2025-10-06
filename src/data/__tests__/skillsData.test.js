import { skillsData } from '../skillsData';

describe('skillsData', () => {
  describe('data structure', () => {
    it('should be a flat array of skill objects', () => {
      expect(Array.isArray(skillsData)).toBe(true);
      expect(skillsData.length).toBeGreaterThan(0);
    });

    it('should not contain nested children (flat structure)', () => {
      skillsData.forEach(skill => {
        expect(skill).not.toHaveProperty('children');
        expect(skill).not.toHaveProperty('isParent');
      });
    });

    it('should have required properties for each skill', () => {
      skillsData.forEach(skill => {
        expect(skill).toHaveProperty('id');
        expect(skill).toHaveProperty('name');
        expect(skill).toHaveProperty('icon');

        expect(typeof skill.id).toBe('string');
        expect(typeof skill.name).toBe('string');
        expect(typeof skill.icon).toBe('string');

        expect(skill.id.length).toBeGreaterThan(0);
        expect(skill.name.length).toBeGreaterThan(0);
        expect(skill.icon.length).toBeGreaterThan(0);
      });
    });

    it('should not have description property', () => {
      skillsData.forEach(skill => {
        expect(skill).not.toHaveProperty('description');
      });
    });
  });

  describe('skill count', () => {
    it('should contain exactly 17 skills', () => {
      expect(skillsData.length).toBe(17);
    });
  });

  describe('required skills', () => {
    const skillNames = [
      'Terraform',
      'OpenTofu',
      'AWS',
      'CloudFormation',
      'Scalr',
      'ECS',
      'Lambda',
      'S3',
      'API Gateway',
      'Route 53',
      'Datadog',
      'GitHub Actions',
      'SEED',
      'OpenAI',
      'Anthropic',
      'Cursor',
      'Bedrock'
    ];

    skillNames.forEach(expectedName => {
      it(`should include ${expectedName}`, () => {
        const names = skillsData.map(s => s.name);
        expect(names).toContain(expectedName);
      });
    });
  });

  describe('unique IDs', () => {
    it('should have unique IDs for all skills', () => {
      const ids = skillsData.map(s => s.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(skillsData.length);
    });
  });

  describe('icon coverage', () => {
    it('should have icons for all skills', () => {
      skillsData.forEach(skill => {
        expect(skill.icon).toBeTruthy();
        expect(skill.icon).not.toBe('');
      });
    });

    it('should use valid react-icons format', () => {
      skillsData.forEach(skill => {
        // Icons should start with common react-icons prefixes
        const validPrefixes = ['Si', 'Fa', 'Ai', 'Ri', 'Bi', 'Md', 'Ci', 'Vsc'];
        const hasValidPrefix = validPrefixes.some(prefix => skill.icon.startsWith(prefix));
        expect(hasValidPrefix).toBe(true);
      });
    });
  });

  describe('infrastructure skills', () => {
    it('should include core infrastructure tools', () => {
      const names = skillsData.map(s => s.name);
      expect(names).toContain('Terraform');
      expect(names).toContain('OpenTofu');
      expect(names).toContain('AWS');
      expect(names).toContain('CloudFormation');
    });
  });

  describe('container and compute skills', () => {
    it('should include container and compute services', () => {
      const names = skillsData.map(s => s.name);
      expect(names).toContain('ECS');
      expect(names).toContain('Lambda');
    });
  });

  describe('storage and networking skills', () => {
    it('should include storage and networking services', () => {
      const names = skillsData.map(s => s.name);
      expect(names).toContain('S3');
      expect(names).toContain('API Gateway');
      expect(names).toContain('Route 53');
    });
  });

  describe('monitoring skills', () => {
    it('should include monitoring tools', () => {
      const names = skillsData.map(s => s.name);
      expect(names).toContain('Datadog');
    });
  });

  describe('CI/CD skills', () => {
    it('should include CI/CD tools', () => {
      const names = skillsData.map(s => s.name);
      expect(names).toContain('GitHub Actions');
      expect(names).toContain('SEED');
    });
  });

  describe('AI/LLM skills', () => {
    it('should include AI and LLM tools', () => {
      const names = skillsData.map(s => s.name);
      expect(names).toContain('OpenAI');
      expect(names).toContain('Anthropic');
      expect(names).toContain('Cursor');
      expect(names).toContain('Bedrock');
    });
  });
});
