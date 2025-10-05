/**
 * Icon mapper utility for resolving icon component names to actual React icon components
 */

import { FaAws, FaGithubSquare, FaQuestion, FaRobot } from 'react-icons/fa';
import {
  SiTerraform,
  SiOpentofu,
  SiAmazonecs,
  SiAmazons3,
  SiAwslambda,
  SiAmazonapigateway,
  SiAmazonroute53,
  SiAmazoncloudwatch,
  SiDatadog,
  SiAmazon,
  SiOctopusdeploy
} from 'react-icons/si';
import { AiOutlineOpenAI } from 'react-icons/ai';
import { RiAnthropicFill } from 'react-icons/ri';
import { CiCloudOn } from 'react-icons/ci';
import { BiCode } from 'react-icons/bi';

/**
 * Default icon component for missing or unknown icons
 */
export const DefaultIcon = FaQuestion;

/**
 * Icon registry mapping icon names to React icon components
 * Note: Some icons use fallbacks when exact matches aren't available in react-icons
 */
const iconRegistry = {
  // Infrastructure as Code
  'SiTerraform': SiTerraform,
  'SiOpentofu': SiOpentofu,
  'CiCloudOn': CiCloudOn,

  // Cloud Providers
  'FaAws': FaAws,

  // AWS Services
  'SiAmazonecs': SiAmazonecs,
  'SiAmazons3': SiAmazons3,
  'SiAwslambda': SiAwslambda,
  'SiAmazonapigateway': SiAmazonapigateway,
  'SiAmazonroute53': SiAmazonroute53,
  'SiAmazoncloudwatch': SiAmazoncloudwatch,

  // Monitoring
  'SiDatadog': SiDatadog,

  // CI/CD & DevOps
  'SiScalr': SiAmazon, // Fallback: Scalr icon doesn't exist, using generic AWS/cloud icon
  'FaSquareGithub': FaGithubSquare, // Note: actual icon name is FaGithubSquare
  'SiSeed': SiOctopusdeploy, // Fallback: Seed icon doesn't exist, using deployment icon

  // AI / LLM
  'AiOutlineOpenAI': AiOutlineOpenAI,
  'RiAnthropicFill': RiAnthropicFill,
  'SiCursor': BiCode, // Fallback: Cursor icon doesn't exist, using code/IDE icon
  'SiAmazonbedrock': FaRobot // Fallback: Bedrock icon doesn't exist, using AI/robot icon
};

/**
 * Cache for resolved icon components
 */
const iconCache = new Map();

/**
 * Get React icon component by name
 * @param {string|object|null} iconName - Name of the icon component (e.g., 'SiTerraform') or icon object
 * @returns {React.Component} Icon component or DefaultIcon if not found
 */
export function getIconComponent(iconName) {
  // Handle null or undefined
  if (!iconName) {
    return DefaultIcon;
  }

  // Handle object (legacy format) - just return DefaultIcon
  if (typeof iconName === 'object') {
    return DefaultIcon;
  }

  // Handle empty string
  if (typeof iconName === 'string' && iconName.trim() === '') {
    return DefaultIcon;
  }

  // Check cache first
  if (iconCache.has(iconName)) {
    return iconCache.get(iconName);
  }

  // Look up icon in registry
  const IconComponent = iconRegistry[iconName];

  if (IconComponent) {
    iconCache.set(iconName, IconComponent);
    return IconComponent;
  }

  // Return default icon for unknown icons
  iconCache.set(iconName, DefaultIcon);
  return DefaultIcon;
}

const iconMapperUtils = {
  getIconComponent,
  DefaultIcon
};

export default iconMapperUtils;
