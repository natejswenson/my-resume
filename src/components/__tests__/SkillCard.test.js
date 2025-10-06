import React from 'react';
import { render, screen } from '@testing-library/react';
import SkillCard from '../SkillCard';

describe('SkillCard', () => {
  const mockSkill = {
    id: 'terraform',
    name: 'Terraform',
    icon: 'SiTerraform'
  };

  describe('rendering', () => {
    it('should render without crashing', () => {
      render(<SkillCard skill={mockSkill} />);
    });

    it('should render skill name', () => {
      render(<SkillCard skill={mockSkill} />);
      expect(screen.getByText('Terraform')).toBeInTheDocument();
    });

    it('should render icon component', () => {
      const { container } = render(<SkillCard skill={mockSkill} />);
      const icon = container.querySelector('.skill-card-icon');
      expect(icon).toBeInTheDocument();
    });

    it('should not render description (minimalist design)', () => {
      const { container } = render(<SkillCard skill={mockSkill} />);
      const description = container.querySelector('.skill-description');
      expect(description).not.toBeInTheDocument();
    });

    it('should not render child skills', () => {
      const { container } = render(<SkillCard skill={mockSkill} />);
      const childSkills = container.querySelector('.child-skills');
      expect(childSkills).not.toBeInTheDocument();
    });
  });

  describe('styling', () => {
    it('should apply skill-card class', () => {
      const { container } = render(<SkillCard skill={mockSkill} />);
      const card = container.querySelector('.skill-card');
      expect(card).toBeInTheDocument();
    });

    it('should have icon container', () => {
      const { container } = render(<SkillCard skill={mockSkill} />);
      const iconContainer = container.querySelector('.skill-card-icon-container');
      expect(iconContainer).toBeInTheDocument();
    });

    it('should have name element', () => {
      const { container } = render(<SkillCard skill={mockSkill} />);
      const name = container.querySelector('.skill-card-name');
      expect(name).toBeInTheDocument();
      expect(name.textContent).toBe('Terraform');
    });
  });

  describe('accessibility', () => {
    it('should have proper ARIA label', () => {
      const { container } = render(<SkillCard skill={mockSkill} />);
      const card = container.querySelector('.skill-card');
      expect(card).toHaveAttribute('aria-label');
      expect(card.getAttribute('aria-label')).toContain('Terraform');
    });

    it('should be keyboard focusable', () => {
      const { container } = render(<SkillCard skill={mockSkill} />);
      const card = container.querySelector('.skill-card');
      expect(card).toHaveAttribute('tabIndex');
    });

    it('should have role attribute', () => {
      const { container } = render(<SkillCard skill={mockSkill} />);
      const card = container.querySelector('.skill-card');
      expect(card).toHaveAttribute('role', 'article');
    });
  });

  describe('icon handling', () => {
    it('should handle different icon types', () => {
      const skills = [
        { id: 'aws', name: 'AWS', icon: 'FaAws' },
        { id: 'openai', name: 'OpenAI', icon: 'AiOutlineOpenAI' },
        { id: 'datadog', name: 'Datadog', icon: 'SiDatadog' }
      ];

      skills.forEach(skill => {
        const { container } = render(<SkillCard skill={skill} />);
        const icon = container.querySelector('.skill-card-icon');
        expect(icon).toBeInTheDocument();
      });
    });

    it('should handle fallback icon gracefully', () => {
      const skillWithNoIcon = { id: 'test', name: 'Test', icon: null };
      const { container } = render(<SkillCard skill={skillWithNoIcon} />);
      const icon = container.querySelector('.skill-card-icon');
      // Should still render an icon (fallback)
      expect(icon).toBeInTheDocument();
    });
  });

  describe('prop validation', () => {
    it('should handle all required props', () => {
      const skill = {
        id: 'test-id',
        name: 'Test Skill',
        icon: 'SiTest'
      };
      render(<SkillCard skill={skill} />);
      expect(screen.getByText('Test Skill')).toBeInTheDocument();
    });

    it('should use skill id as key', () => {
      const { container } = render(<SkillCard skill={mockSkill} />);
      const card = container.querySelector('[data-skill-id="terraform"]');
      expect(card).toBeInTheDocument();
    });
  });

  describe('responsive design', () => {
    it('should have responsive class', () => {
      const { container } = render(<SkillCard skill={mockSkill} />);
      const card = container.querySelector('.skill-card');
      // Card should be styled for responsive grid
      expect(card).toHaveClass('skill-card');
    });
  });

  describe('multiple skills', () => {
    it('should render multiple different skills', () => {
      const skills = [
        { id: 'terraform', name: 'Terraform', icon: 'SiTerraform' },
        { id: 'aws', name: 'AWS', icon: 'FaAws' },
        { id: 'openai', name: 'OpenAI', icon: 'AiOutlineOpenAI' }
      ];

      const { container } = render(
        <>
          {skills.map(skill => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </>
      );

      expect(screen.getByText('Terraform')).toBeInTheDocument();
      expect(screen.getByText('AWS')).toBeInTheDocument();
      expect(screen.getByText('OpenAI')).toBeInTheDocument();
    });
  });

  describe('icon container styling (matching Tools cards)', () => {
    it('should render icon inside circular container', () => {
      const { container } = render(<SkillCard skill={mockSkill} />);
      const iconContainer = container.querySelector('.skill-card-icon-container');
      expect(iconContainer).toBeInTheDocument();
    });

    it('should have icon container with proper structure', () => {
      const { container } = render(<SkillCard skill={mockSkill} />);
      const iconContainer = container.querySelector('.skill-card-icon-container');
      const icon = container.querySelector('.skill-card-icon');

      // Icon should be inside container
      expect(iconContainer).toContainElement(icon);
      expect(iconContainer).toBeInTheDocument();
    });

    it('should have correct CSS classes applied', () => {
      const { container } = render(<SkillCard skill={mockSkill} />);
      const iconContainer = container.querySelector('.skill-card-icon-container');
      const icon = container.querySelector('.skill-card-icon');
      const card = container.querySelector('.skill-card');

      expect(card).toHaveClass('skill-card');
      expect(iconContainer).toHaveClass('skill-card-icon-container');
      expect(icon).toHaveClass('skill-card-icon');
    });
  });

  describe('card structure matches Tools cards', () => {
    it('should have proper DOM structure', () => {
      const { container } = render(<SkillCard skill={mockSkill} />);
      const card = container.querySelector('.skill-card');
      const iconContainer = card.querySelector('.skill-card-icon-container');
      const icon = iconContainer.querySelector('.skill-card-icon');
      const name = card.querySelector('.skill-card-name');

      expect(card).toBeInTheDocument();
      expect(iconContainer).toBeInTheDocument();
      expect(icon).toBeInTheDocument();
      expect(name).toBeInTheDocument();

      // Verify hierarchy
      expect(card).toContainElement(iconContainer);
      expect(card).toContainElement(name);
      expect(iconContainer).toContainElement(icon);
    });

    it('should have card with skill-card class', () => {
      const { container } = render(<SkillCard skill={mockSkill} />);
      const card = container.querySelector('.skill-card');
      expect(card).toHaveClass('skill-card');
    });

    it('should have name with skill-card-name class', () => {
      const { container } = render(<SkillCard skill={mockSkill} />);
      const name = container.querySelector('.skill-card-name');
      expect(name).toHaveClass('skill-card-name');
      expect(name.textContent).toBe('Terraform');
    });
  });
});
