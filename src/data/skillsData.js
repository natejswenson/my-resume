/**
 * Skills data for the Skills section
 * Flat array of 17 individual skills with icons and names only
 * No hierarchies, no descriptions - clean and visual
 */

export const skillsData = [
  // Infrastructure & Cloud
  { id: 'terraform', name: 'Terraform', icon: 'SiTerraform' },
  { id: 'opentofu', name: 'OpenTofu', icon: 'SiOpentofu' },
  { id: 'aws', name: 'AWS', icon: 'FaAws' },
  { id: 'cloudformation', name: 'CloudFormation', icon: 'CiCloudOn' },
  { id: 'scalr', name: 'Scalr', icon: 'SiScalr' },

  // Container & Compute
  { id: 'ecs', name: 'ECS', icon: 'SiAmazonecs' },
  { id: 'lambda', name: 'Lambda', icon: 'SiAwslambda' },

  // Storage & Networking
  { id: 's3', name: 'S3', icon: 'SiAmazons3' },
  { id: 'api-gateway', name: 'API Gateway', icon: 'SiAmazonapigateway' },
  { id: 'route53', name: 'Route 53', icon: 'SiAmazonroute53' },

  // Monitoring & Observability
  { id: 'datadog', name: 'Datadog', icon: 'SiDatadog' },

  // CI/CD & DevOps
  { id: 'github-actions', name: 'GitHub Actions', icon: 'FaGithubSquare' },
  { id: 'seed', name: 'SEED', icon: 'SiSeed' },

  // AI & LLM
  { id: 'openai', name: 'OpenAI', icon: 'AiOutlineOpenAI' },
  { id: 'anthropic', name: 'Anthropic', icon: 'RiAnthropicFill' },
  { id: 'cursor', name: 'Cursor', icon: 'SiCursor' },
  { id: 'bedrock', name: 'Bedrock', icon: 'SiAmazonbedrock' }
];

export default skillsData;
