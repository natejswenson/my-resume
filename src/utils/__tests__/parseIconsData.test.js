import { parseIconsData, fixTypos } from '../parseIconsData';

describe('parseIconsData', () => {
  const mockIconsContent = `# Terraform
-Icon=<SiTerraform />
Infrastructure Management for ECS and Serverless applications. Subject Matter Expert for Terraform and OpenTofu

# OpenTofu
-icon=<SiOpentofu />
Migrated all managed iac resources from terraform --> OpenTofu

# AWS
-icon=<FaAws />
Responsible for Managing Infrastructure across 36 AWS accounts using Cloud Formation and Terraform. Hold several certifications including AI Professional, DevOps Professional, and Cloud Architect.

## ECS
-icon=<SiAmazonecs />
Migrated services from 36 AWS accounts from EKS --> ECS saving the company thousands each month.

## S3
-icon=

## CloudFormation
-icon=<CiCloudOn />

## Lambda
-icon=<SiAwslambda />

## API Gateway
-icon=<SiAmazonapigateway />

## Route53
-icon=<SiAmazonroute53 />

## Datadog
-icon=<SiDatadog />

# Scalr
-icon=<SiScalr />

# Github Actions
-icon=<FaSquareGithub />

# AI / LLM
## OpenAI
-icon=<AiOutlineOpenAI />
Utilized GPT4 4o and 5 models via the api to help automate various tasks.

## Anthropic
-icon=<RiAnthropicFill />
Have been using claude code to create a spec driven development workflow.

## Cursor
-icon=<SiCursor />

## Bedrock
-icon=<SiAmazonbedrock />

# SEED
-icon=<SiSeed />
Used as primary deployment mechanism for ecs and serverless applications for teams using SSTV2
`;

  describe('basic parsing', () => {
    it('should parse icons.md into structured skill objects', () => {
      const result = parseIconsData(mockIconsContent);

      expect(result).toBeDefined();
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThan(0);
    });

    it('should extract skill name from markdown headers', () => {
      const result = parseIconsData(mockIconsContent);
      const terraform = result.find(s => s.name === 'Terraform');

      expect(terraform).toBeDefined();
      expect(terraform.name).toBe('Terraform');
    });

    it('should extract icon component names', () => {
      const result = parseIconsData(mockIconsContent);
      const terraform = result.find(s => s.name === 'Terraform');

      expect(terraform.icon).toBe('SiTerraform');
    });

    it('should extract description text', () => {
      const result = parseIconsData(mockIconsContent);
      const terraform = result.find(s => s.name === 'Terraform');

      expect(terraform.description).toContain('Infrastructure Management');
    });

    it('should handle case-insensitive icon field (-Icon vs -icon)', () => {
      const result = parseIconsData(mockIconsContent);
      const terraform = result.find(s => s.name === 'Terraform');
      const opentofu = result.find(s => s.name === 'OpenTofu');

      expect(terraform.icon).toBe('SiTerraform');
      expect(opentofu.icon).toBe('SiOpentofu');
    });
  });

  describe('hierarchical structure', () => {
    it('should identify AWS as parent with child services', () => {
      const result = parseIconsData(mockIconsContent);
      const aws = result.find(s => s.name === 'AWS');

      expect(aws).toBeDefined();
      expect(aws.isParent).toBe(true);
      expect(Array.isArray(aws.children)).toBe(true);
      expect(aws.children.length).toBeGreaterThan(0);
    });

    it('should identify AI / LLM as parent with child tools', () => {
      const result = parseIconsData(mockIconsContent);
      const aiLlm = result.find(s => s.name === 'AI / LLM');

      expect(aiLlm).toBeDefined();
      expect(aiLlm.isParent).toBe(true);
      expect(Array.isArray(aiLlm.children)).toBe(true);
      expect(aiLlm.children.length).toBe(4);
    });

    it('should parse AWS child services correctly', () => {
      const result = parseIconsData(mockIconsContent);
      const aws = result.find(s => s.name === 'AWS');

      const ecs = aws.children.find(c => c.name === 'ECS');
      const s3 = aws.children.find(c => c.name === 'S3');
      const lambda = aws.children.find(c => c.name === 'Lambda');

      expect(ecs).toBeDefined();
      expect(ecs.icon).toBe('SiAmazonecs');
      expect(s3).toBeDefined();
      expect(lambda).toBeDefined();
    });

    it('should parse AI / LLM child tools correctly', () => {
      const result = parseIconsData(mockIconsContent);
      const aiLlm = result.find(s => s.name === 'AI / LLM');

      const openai = aiLlm.children.find(c => c.name === 'OpenAI');
      const anthropic = aiLlm.children.find(c => c.name === 'Anthropic');
      const cursor = aiLlm.children.find(c => c.name === 'Cursor');
      const bedrock = aiLlm.children.find(c => c.name === 'Bedrock');

      expect(openai).toBeDefined();
      expect(anthropic).toBeDefined();
      expect(cursor).toBeDefined();
      expect(bedrock).toBeDefined();
    });

    it('should not mark standalone skills as parents', () => {
      const result = parseIconsData(mockIconsContent);
      const terraform = result.find(s => s.name === 'Terraform');
      const scalr = result.find(s => s.name === 'Scalr');

      expect(terraform.isParent).toBe(false);
      expect(terraform.children).toBeUndefined();
      expect(scalr.isParent).toBe(false);
    });
  });

  describe('placeholder handling', () => {
    it('should add placeholder activity for skills without description', () => {
      const result = parseIconsData(mockIconsContent);
      const aws = result.find(s => s.name === 'AWS');
      const cloudformation = aws.children.find(c => c.name === 'CloudFormation');

      expect(cloudformation.description).toContain('Placeholder:');
      expect(cloudformation.description).toContain('CloudFormation');
    });

    it('should add placeholder for skills with empty description', () => {
      const result = parseIconsData(mockIconsContent);
      const scalr = result.find(s => s.name === 'Scalr');

      if (!scalr.description || scalr.description.trim() === '') {
        expect(scalr.description).toContain('Placeholder:');
      }
    });

    it('should not add placeholder when description exists', () => {
      const result = parseIconsData(mockIconsContent);
      const terraform = result.find(s => s.name === 'Terraform');

      expect(terraform.description).not.toContain('Placeholder:');
      expect(terraform.description).toContain('Infrastructure Management');
    });
  });

  describe('icon handling', () => {
    it('should handle missing icons with null value', () => {
      const result = parseIconsData(mockIconsContent);
      const aws = result.find(s => s.name === 'AWS');
      const s3 = aws.children.find(c => c.name === 'S3');

      expect(s3.icon).toBeNull();
    });

    it('should extract icon name without angle brackets', () => {
      const result = parseIconsData(mockIconsContent);
      const terraform = result.find(s => s.name === 'Terraform');

      expect(terraform.icon).toBe('SiTerraform');
      expect(terraform.icon).not.toContain('<');
      expect(terraform.icon).not.toContain('>');
    });
  });

  describe('typo corrections', () => {
    it('should fix common typos in skill names and descriptions', () => {
      const contentWithTypos = `# Terraform
-Icon=<SiTerraform />
Infastrucure Manangement for Terrafomr
`;
      const result = parseIconsData(contentWithTypos);
      const terraform = result.find(s => s.name === 'Terraform');

      expect(terraform.description).toContain('Infrastructure');
      expect(terraform.description).toContain('Management');
      expect(terraform.description).not.toContain('Infastrucure');
      expect(terraform.description).not.toContain('Manangement');
    });
  });

  describe('edge cases', () => {
    it('should handle empty input', () => {
      const result = parseIconsData('');
      expect(result).toEqual([]);
    });

    it('should handle malformed markdown', () => {
      const malformed = '# Skill\nSome text without proper format';
      const result = parseIconsData(malformed);
      expect(Array.isArray(result)).toBe(true);
    });

    it('should trim whitespace from names and descriptions', () => {
      const result = parseIconsData(mockIconsContent);
      const terraform = result.find(s => s.name === 'Terraform');

      expect(terraform.name).toBe('Terraform');
      expect(terraform.name).toBe(terraform.name.trim());
      expect(terraform.description).toBe(terraform.description.trim());
    });
  });
});

describe('fixTypos', () => {
  it('should fix "Manangement" to "Management"', () => {
    const result = fixTypos('Infastrucure Manangement');
    expect(result).toBe('Infrastructure Management');
  });

  it('should fix "Terrafomr" to "Terraform"', () => {
    const result = fixTypos('Terrafomr is great');
    expect(result).toBe('Terraform is great');
  });

  it('should fix "Proffesional" to "Professional"', () => {
    const result = fixTypos('AI Proffesional');
    expect(result).toBe('AI Professional');
  });

  it('should fix "Infrastrucure" to "Infrastructure"', () => {
    const result = fixTypos('Infrastrucure as Code');
    expect(result).toBe('Infrastructure as Code');
  });

  it('should handle multiple typos in same string', () => {
    const result = fixTypos('Terrafomr Infrastrucure Manangement Proffesional');
    expect(result).toBe('Terraform Infrastructure Management Professional');
  });

  it('should return original text if no typos found', () => {
    const result = fixTypos('Perfect spelling here');
    expect(result).toBe('Perfect spelling here');
  });
});
