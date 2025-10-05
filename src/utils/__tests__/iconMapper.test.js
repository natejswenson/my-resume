import { getIconComponent, DefaultIcon } from '../iconMapper';
import React from 'react';

describe('iconMapper', () => {
  describe('getIconComponent', () => {
    it('should return a React component for valid icon name', () => {
      const IconComponent = getIconComponent('SiTerraform');
      expect(IconComponent).toBeDefined();
      expect(typeof IconComponent).toBe('function');
    });

    it('should resolve SiTerraform to correct react-icon', () => {
      const IconComponent = getIconComponent('SiTerraform');
      const element = React.createElement(IconComponent);
      expect(element).toBeDefined();
    });

    it('should resolve FaAws to correct react-icon', () => {
      const IconComponent = getIconComponent('FaAws');
      expect(IconComponent).toBeDefined();
    });

    it('should resolve icons from different react-icon packages', () => {
      const siIcon = getIconComponent('SiTerraform'); // from react-icons/si
      const faIcon = getIconComponent('FaAws'); // from react-icons/fa
      const aiIcon = getIconComponent('AiOutlineOpenAI'); // from react-icons/ai
      const riIcon = getIconComponent('RiAnthropicFill'); // from react-icons/ri

      expect(siIcon).toBeDefined();
      expect(faIcon).toBeDefined();
      expect(aiIcon).toBeDefined();
      expect(riIcon).toBeDefined();
    });

    it('should return DefaultIcon for null icon name', () => {
      const IconComponent = getIconComponent(null);
      expect(IconComponent).toBe(DefaultIcon);
    });

    it('should return DefaultIcon for undefined icon name', () => {
      const IconComponent = getIconComponent(undefined);
      expect(IconComponent).toBe(DefaultIcon);
    });

    it('should return DefaultIcon for empty string', () => {
      const IconComponent = getIconComponent('');
      expect(IconComponent).toBe(DefaultIcon);
    });

    it('should return DefaultIcon for unknown icon name', () => {
      const IconComponent = getIconComponent('UnknownIcon123');
      expect(IconComponent).toBe(DefaultIcon);
    });

    it('should handle all AWS service icons', () => {
      const awsIcons = [
        'SiAmazonecs',
        'SiAmazons3',
        'SiAwslambda',
        'SiAmazonapigateway',
        'SiAmazonroute53',
        'SiAmazoncloudwatch'
      ];

      awsIcons.forEach(iconName => {
        const IconComponent = getIconComponent(iconName);
        expect(IconComponent).toBeDefined();
        expect(IconComponent).not.toBe(DefaultIcon);
      });
    });

    it('should handle all AI/LLM tool icons', () => {
      const aiIcons = [
        'AiOutlineOpenAI', // Direct match
        'RiAnthropicFill', // Direct match
        'SiCursor', // Fallback to MdCursor
        'SiAmazonbedrock' // Fallback to FaRobot
      ];

      aiIcons.forEach(iconName => {
        const IconComponent = getIconComponent(iconName);
        expect(IconComponent).toBeDefined();
        // Icons should resolve to something (may be fallback, not DefaultIcon)
        expect(IconComponent).not.toBe(DefaultIcon);
      });
    });

    it('should handle infrastructure tool icons', () => {
      const infraIcons = [
        'SiTerraform', // Direct match
        'SiOpentofu', // Direct match
        'SiDatadog', // Direct match
        'SiScalr', // Fallback to SiAmazon
        'FaSquareGithub', // Direct match
        'SiSeed' // Fallback to SiOctopusdeploy
      ];

      infraIcons.forEach(iconName => {
        const IconComponent = getIconComponent(iconName);
        expect(IconComponent).toBeDefined();
        // Icons should resolve to something (may be fallback, not DefaultIcon)
        expect(IconComponent).not.toBe(DefaultIcon);
      });
    });

    it('should be case-sensitive', () => {
      const correctIcon = getIconComponent('SiTerraform');
      const wrongCaseIcon = getIconComponent('siterraform');

      expect(correctIcon).toBeDefined();
      expect(wrongCaseIcon).toBe(DefaultIcon);
    });

    it('should cache icon lookups for performance', () => {
      const icon1 = getIconComponent('SiTerraform');
      const icon2 = getIconComponent('SiTerraform');

      expect(icon1).toBe(icon2); // Same reference
    });
  });

  describe('DefaultIcon', () => {
    it('should be a valid React component', () => {
      expect(typeof DefaultIcon).toBe('function');
    });

    it('should render without errors', () => {
      const element = React.createElement(DefaultIcon);
      expect(element).toBeDefined();
    });
  });
});
