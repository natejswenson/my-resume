/**
 * Skills data generated from icons.md
 * This file contains detailed skill information with icons and descriptions
 * for the Skills section of the resume.
 */

export const skillsData = [
  {
    id: "terraform",
    name: "Terraform",
    icon: "SiTerraform",
    description: "Infrastructure Management for ECS and Serverless applications. Subject Matter Expert for Terraform and OpenTofu",
    isParent: false
  },
  {
    id: "opentofu",
    name: "OpenTofu",
    icon: "SiOpentofu",
    description: "Migrated all managed iac resources from terraform --> OpenTofu",
    isParent: false
  },
  {
    id: "aws",
    name: "AWS",
    icon: "FaAws",
    description: "Responsible for Managing Infrastructure across 36 AWS accounts using Cloud Formation and Terraform. Hold several certifications including AI Professional, DevOps Professional, and Cloud Architect.",
    isParent: true,
    children: [
      {
        id: "ecs",
        name: "ECS",
        icon: "SiAmazonecs",
        description: "Migrated services from 36 AWS accounts from EKS --> ECS saving the company thousands each month.",
        isParent: false
      },
      {
        id: "s3",
        name: "S3",
        icon: null,
        description: "AWS Simple Storage Service (S3) for scalable object storage",
        isParent: false
      },
      {
        id: "cloudformation",
        name: "CloudFormation",
        icon: "CiCloudOn",
        description: "AWS CloudFormation for infrastructure as code",
        isParent: false
      },
      {
        id: "lambda",
        name: "Lambda",
        icon: "SiAwslambda",
        description: "AWS Lambda for serverless compute functions",
        isParent: false
      },
      {
        id: "api-gateway",
        name: "API Gateway",
        icon: "SiAmazonapigateway",
        description: "AWS API Gateway for API management and deployment",
        isParent: false
      },
      {
        id: "route53",
        name: "Route53",
        icon: "SiAmazonroute53",
        description: "AWS Route53 for DNS management and traffic routing",
        isParent: false
      },
      {
        id: "datadog",
        name: "Datadog",
        icon: "SiDatadog",
        description: "Application performance monitoring and observability",
        isParent: false
      }
    ]
  },
  {
    id: "scalr",
    name: "Scalr",
    icon: "SiScalr",
    description: "Terraform automation and collaboration platform",
    isParent: false
  },
  {
    id: "github-actions",
    name: "Github Actions",
    icon: "FaSquareGithub",
    description: "CI/CD automation workflows with GitHub Actions",
    isParent: false
  },
  {
    id: "ai-llm",
    name: "AI / LLM",
    icon: null,
    description: "Artificial Intelligence and Large Language Model technologies",
    isParent: true,
    children: [
      {
        id: "openai",
        name: "OpenAI",
        icon: "AiOutlineOpenAI",
        description: "Utilized GPT4 4o and 5 models via the api to help automate various tasks",
        isParent: false
      },
      {
        id: "anthropic",
        name: "Anthropic",
        icon: "RiAnthropicFill",
        description: "Using Claude Code to create a spec driven development workflow",
        isParent: false
      },
      {
        id: "cursor",
        name: "Cursor",
        icon: "SiCursor",
        description: "AI-powered code editor for enhanced developer productivity",
        isParent: false
      },
      {
        id: "bedrock",
        name: "Bedrock",
        icon: "SiAmazonbedrock",
        description: "AWS Bedrock for building generative AI applications",
        isParent: false
      }
    ]
  },
  {
    id: "seed",
    name: "SEED",
    icon: "SiSeed",
    description: "Primary deployment mechanism for ECS and serverless applications for teams using SSTV2",
    isParent: false
  }
];

export default skillsData;
