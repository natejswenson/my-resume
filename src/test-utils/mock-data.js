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
      skillname: "JavaScript",
      image: "javascript",
      number: "90",
      color: "teal"
    },
    {
      skillname: "React",
      image: "react",
      number: "85",
      color: "teal"
    },
    {
      skillname: "Node.js",
      image: "nodejs",
      number: "80",
      color: "teal"
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
