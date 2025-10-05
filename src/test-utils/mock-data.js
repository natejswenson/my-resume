// Mock resume data for testing
export const mockResumeData = {
  imagebaseurl: "https://example.com/",
  name: "Test User",
  role: "Cloud & DevOps Engineer",
  linkedinId: "testuser",
  skypeid: "",
  roleDescription: "Cloud & DevOps Engineer | AWS Specialist | Certified Scrum Professional | Continuous Learner\nSpecializing in Cloud Computing, AWS, and Infrastructure Automation",
  socialLinks: [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/testuser/",
      className: "fa fa-linkedin"
    },
    {
      name: "github",
      url: "https://github.com/testuser",
      className: "fa fa-github"
    }
  ],
  aboutme: "Test User is a results-driven DevOps engineer specializing in Cloud Computing and AWS, with over 12 years of experience within Fortune 100 companies. As a certified cloud professional, focuses on architecting scalable cloud infrastructure, implementing CI/CD pipelines, and coaching teams on DevOps best practices.",
  hobies: "Test hobbies and interests for testing.",
  email: "test@example.com",
  address: "Test City, USA",
  website: "https://testuser.github.io",
  education: [
    {
      UniversityName: "University of Minnesota-Duluth",
      specialization: "B.S. Industrial Engineering",
      MonthOfPassing: "May",
      YearOfPassing: "2010",
      YearOfStarting: "2005"
    }
  ],
  work: [
    {
      Company: "GoodLeap",
      specialization: "Senior DevOps Engineer",
      MonthOfLeaving: "",
      YearOfLeaving: "Current",
      Achievements: [
        "Architected and implemented AWS cloud infrastructure supporting sustainable home improvement financing platform",
        "Led migration of legacy systems to cloud-native architecture using EKS, Lambda, and serverless technologies",
        "Designed and deployed automated CI/CD pipelines using GitLab CI, reducing deployment time by 60%",
        "Implemented Infrastructure as Code using Terraform and CloudFormation for multi-account AWS environments",
        "Mentored engineering teams on AWS best practices, achieving 100% team AWS certification",
        "Winner of 'Arch Forward Award' at company hackathon (November 2024) for innovative cloud automation solution"
      ]
    },
    {
      Company: "Previous Test Company",
      specialization: "Test Engineer",
      MonthOfLeaving: "December",
      YearOfLeaving: "2022",
      Achievements: [
        "Previous test achievement 1",
        "Previous test achievement 2"
      ]
    }
  ],
  skillsDescription: "Test skills description",
  skills: [
    {
      name: "AI / LLM",
      category: "core",
      icon: "brain",
      description: "Artificial Intelligence & Large Language Models"
    },
    {
      name: "DevOps",
      category: "core",
      icon: "cogs",
      description: "Development & Operations Integration"
    },
    {
      name: "Cloud",
      category: "core",
      icon: "cloud",
      description: "Cloud Infrastructure & Services"
    },
    {
      name: "Automation",
      category: "core",
      icon: "robot",
      description: "Process & Infrastructure Automation"
    },
    {
      name: "CI/CD",
      category: "core",
      icon: "infinity",
      description: "Continuous Integration & Deployment"
    }
  ],
  tools: [
    {
      name: "Terraform",
      category: "Infrastructure as Code",
      icon: "terraform",
      description: "Infrastructure as Code provisioning"
    },
    {
      name: "OpenTofu",
      category: "Infrastructure as Code",
      icon: "opentofu",
      description: "Open-source Terraform alternative"
    },
    {
      name: "AWS",
      category: "Cloud Platform",
      icon: "aws",
      description: "Amazon Web Services"
    },
    {
      name: "ECS",
      category: "Containers",
      icon: "ecs",
      description: "Elastic Container Service"
    },
    {
      name: "S3",
      category: "Storage",
      icon: "s3",
      description: "Simple Storage Service"
    },
    {
      name: "CloudFormation",
      category: "Infrastructure as Code",
      icon: "cloudformation",
      description: "AWS Infrastructure as Code"
    },
    {
      name: "Lambda",
      category: "Serverless",
      icon: "lambda",
      description: "Serverless compute functions"
    },
    {
      name: "API Gateway",
      category: "Serverless",
      icon: "apigateway",
      description: "API management service"
    },
    {
      name: "Route 53",
      category: "Networking",
      icon: "route53",
      description: "DNS and traffic management"
    },
    {
      name: "CloudWatch",
      category: "Monitoring",
      icon: "cloudwatch",
      description: "Monitoring and observability"
    },
    {
      name: "DataDog",
      category: "Monitoring",
      icon: "datadog",
      description: "Application performance monitoring"
    },
    {
      name: "Scalr",
      category: "CI/CD",
      icon: "scalr",
      description: "Terraform automation platform"
    },
    {
      name: "GitHub Actions",
      category: "CI/CD",
      icon: "github",
      description: "CI/CD automation workflows"
    },
    {
      name: "Seed",
      category: "Serverless",
      icon: "seed",
      description: "Serverless deployment platform"
    },
    {
      name: "SSTv2",
      category: "Serverless",
      icon: "sst",
      description: "Serverless Stack framework"
    }
  ],
  portfolio: [
    {
      name: "Test Project 1",
      description: "A test project for testing purposes",
      imgurl: "images/test1.png",
      url: "https://github.com/testuser/test1"
    },
    {
      name: "Test Project 2",
      description: "Another test project",
      imgurl: "images/test2.png",
      url: "https://github.com/testuser/test2"
    }
  ],
  testimonials: [
    {
      description: "Test testimonial description for testing.",
      name: "Test Client, Test Company"
    },
    {
      description: "Another test testimonial for validation.",
      name: "Another Test Client, Another Company"
    }
  ]
};

export const emptyResumeData = {
  name: "",
  role: "",
  socialLinks: [],
  education: [],
  work: [],
  skills: [],
  portfolio: [],
  testimonials: []
};
