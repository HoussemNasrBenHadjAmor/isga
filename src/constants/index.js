import {
  BadgeDollarSign,
  BriefcaseBusiness,
  Check,
  CirclePlus,
  Layers,
  Users,
  Flag,
  ChevronLast,
  Speech,
  Pyramid,
  Settings,
  Box,
  GlobeLock,
  Rocket,
  Factory,
  Cloud,
  DatabaseZap,
  SquareTerminal,
} from "lucide-react";

export const navItems = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },

  { id: 2, name: "About", link: "/about" },

  {
    id: 3,
    name: "Services",
    sub: [
      { name: "Consulting Service", link: "/services/consulting-service" },
      {
        name: "Application Services and Solutions",
        link: "/services/application-services-and-solutions",
      },
      {
        name: "Technologies & Platforms",
        link: "/services/technologies-platforms",
      },
      { name: "Managed Services", link: "/services/managed-services" },
      {
        name: "Project & Program Management",
        link: "/services/project-program-management",
      },
      {
        name: "Artifical Intelligence",
        link: "/services/artifical-intelligence",
      },
      {
        name: "Cybersecurity & Entreprise Risk",
        link: "/services/cybersecurity-entreprise-risk",
      },
    ],
  },

  {
    id: 4,
    name: "Industries",
    sub: [
      {
        name: "Government and Public Sector",
        link: "government-public-sector",
      },
      {
        name: "Insurance",
        link: "Insurance",
      },
      {
        name: "Financial Services",
        link: "financial-services",
      },
      {
        name: "Telecommunications",
        link: "telecommunications",
      },
    ],
  },

  {
    name: "Carrers",
    link: "/carrers",
  },

  {
    name: "Contact",
    link: "/contact",
  },
];

export const homeText = {
  background_url:
    "https://isgaconsult.com/wp-content/uploads/2024/02/video-2160p.mp4",
  title: "ISGA Consult",
  subtitle:
    "we have developed a range of services that are scalable, efficient and adapted to the needs, challenges and obligations of our clients.",
  description: [
    {
      id: 1,
      content:
        "We focus on a co-creative approach, offering unparalleled skills to help you achieve your innovation, growth, and profitability objectives.",
    },
  ],
};

export const homeCards = [
  {
    Icon: Users,
    title: "Talent",
    description:
      "Proven experience in business, information technology (IT), talent strategy, and talent management",
  },

  {
    Icon: Check,
    title: "Sector Expertise",
    description:
      "In-depth knowledge of key sectors, including health, finance, insurance, transportation",
  },

  {
    Icon: Layers,
    title: "Sophisticated Mandate Mastery",
    description:
      "Unrivalled know-how and understanding in the delivery of sensitive mandates",
  },

  {
    Icon: BadgeDollarSign,
    title: "Strategic Financial Advantage",
    description:
      "An advantageous competitive financial model suited to your objectives",
  },

  {
    Icon: CirclePlus,
    title: "Much more",
    description:
      "Strategic advice, Architecture, Strategic planning, Program, project and many others...",
  },
];

export const homeChoose = [
  {
    Icon: BriefcaseBusiness,
    title: "Operationalize your business",
  },
  {
    Icon: Flag,
    title: "Minimize errors, disruption, and risk",
  },
  {
    Icon: ChevronLast,
    title: "Accelerate your transformation journey and keep it on track",
  },
];

export const aboutText = {
  background_url:
    "https://isgaconsult.com/wp-content/uploads/2024/02/businessman-big-office-scaled.jpg",
  title: "About us",
  subtitle: "Your strategic and collaborative IT partner",
  description: [
    {
      id: 1,
      content:
        "“We focus on how the world will be in ten years, and we prepare that path for our customers. Because we’re working on their organization’s very heartbeat when it comes to critical IT infrastructure, we must be deep experts rather than generalists.”",
    },
  ],

  owner: "Mohamed El Mghari – Co-fondateur et directeur général",
};

export const aboutCardImg = [
  {
    id: 1,
    url: "https://isgaconsult.com/wp-content/uploads/2024/02/beautiful-shot-forest-with-green-trees-yellow-leaves-ground-sunny-day-min-scaled.jpg",
    title: "Environmental Priorities",
    description: "We focus on concrete actions in several priority assets:",
    subtitle: [
      {
        text: "Climate change",
      },
      {
        text: "Use of natural resources",
      },
      {
        text: "Fight against pollution",
      },
      {
        text: "Energy efficiency",
      },
      {
        text: "Product sustainability and reuse",
      },
    ],
  },

  {
    id: 2,
    url: "https://isgaconsult.com/wp-content/uploads/2024/02/closeup-diverse-people-joining-their-hands-min-scaled.jpg",
    title: "Social Pillars",
    description: "Our social actions are focused on four key pillars:",
    subtitle: [
      {
        text: "Diversity, equity and inclusion",
      },
      {
        text: "Community",
      },
      {
        text: "Physical and mental health",
      },
      {
        text: "Quality education, professional development and wellness",
      },
    ],
  },

  {
    id: 3,
    url: "https://isgaconsult.com/wp-content/uploads/2024/02/standard-quality-control-collage-concept-min-1.jpg",
    title: "Main Focus on Governance",
    description: "Four main areas guide our work on governance:",
    subtitle: [
      {
        text: "Data privacy",
      },
      {
        text: "Data security",
      },
      {
        text: "Intellectual property protection and competitive behaviour",
      },
      {
        text: "Management of systemic risks arising from technological disruption",
      },
    ],
  },
];

export const aboutCardText = [
  {
    title: "Who are we?",
    description: [
      {
        content:
          "Consultation ISGA is a Canadian leader in information technology (IT) and business consulting services, which translates today into the acceleration of client companies’ digital transformation.",
      },
      {
        content:
          "Its solutions cover the full range of business needs, including strategy, innovation, agility, intelligence, security, and cloud computing.",
      },
      {
        content:
          "Its unique expertise is delivered through flexible on-demand project and talent delivery models. Consultation ISGA provides these services to large private and public sector organizations.",
      },
    ],
  },

  {
    title: "Mission",
    description: [
      {
        content:
          "Our mission is to be a best-in-class partner that delivers business value to our clients by leveraging our experience, expertise, and new technologies through creativity and a mobilized team of consultants.",
      },
    ],
  },
  {
    title: "Vision",
    description: [
      {
        content:
          "To be the trusted partner of choice for enterprises seeking digital, business, technology consulting experts for creating real value that achieves and even goes beyond the desired outcomes.",
      },
    ],
  },

  {
    title: "Our Values",
    subtitle: [
      { content: "Teamwork" },
      { content: "Commitment" },
      { content: "Rigor" },
    ],

    description: [
      {
        content:
          "Team success through mobilization, leadership, and adaptability",
      },
      {
        content: "Solid commitment to delivering ROI",
      },
      {
        content: "Rigorous planning, follow-up, and execution",
      },
    ],
  },

  {
    subtitle: [
      { content: "Accountability" },
      { content: "Pride" },
      { content: "Respect" },
    ],

    description: [
      {
        content: "Flawless accountability",
      },
      {
        content: "Unifying pride and enthusiasm around our clients’ success",
      },
      {
        content:
          "Respect for people, cultures, differences and talents, fostering collaboration and succes",
      },
    ],
  },

  {
    title: "Our employees",
    description: [
      {
        content:
          "Our employees are the driving force in all that we do, and we truly value the unique talent that each individual brings to Consultation ISGA. That’s why we offer tools and services to help them grow and thrive—from career development training to Digital Healthcare with Dialogue, to activities and benefits (think events, dinners, exclusive discounts, and complimentary services).",
      },
    ],
  },

  {
    title: "Our communities",
    description: [
      {
        content:
          "Beyond the office, we’re actively involved in volunteering, supporting local businesses, and rallying together to make charitable donations.",
      },
    ],
  },

  {
    title: "Our environment",
    description: [
      {
        content:
          "By making greener choices, implementing more sustainable practices, and opting for cleaner technology whenever possible, we’re creating an office environment we’re proud of.",
      },
    ],
  },
];

export const contactText = {
  background_url:
    "https://isgaconsult.com/wp-content/uploads/2024/02/customer-service-business-contact-concept-wooden-cube-block-which-print-screen-letter-telephone-email-address-message-min-scaled.jpg",
  title: "Do you have a question?",
  subtitle: "Send Us Your Feedback, We Love Hearing It!",
};

export const careersText = {
  background_url:
    "https://isgaconsult.com/wp-content/uploads/2024/02/photo-1459180129673-eefb56f79b45.png",
  title: "Carrers",
  subtitle: "Together, as owners, let’s turn meaningful insights into action",
  description: [
    {
      id: 1,
      content:
        "Join a company rooted in ownership, teamwork, respect and belonging. Be part of our company of owners, where you’ll benefit from the rewards of our collective success, while working side-by-side with colleagues and clients to solve complex issues.",
    },
  ],
};

export const consultingServicesText = {
  title: "SERVICES",
  subtitle: "Consulting Service",
  description: [
    {
      id: 1,
      content:
        "We focus on a co-creative approach, offering unparalleled skills to help you achieve your innovation, growth, and profitability objectives.",
    },
  ],
};

export const consultingServicesCard = {
  url: "https://isgaconsult.com/wp-content/uploads/2024/02/businesswomen-thinking-about-new-strategy-min-scaled.jpg",
  description: [
    {
      content:
        "Proven experience in business, information technology (IT), talent strategy, and talent management",
    },
    {
      content:
        "In-depth knowledge of key sectors, including health, finance, insurance, transportation, and public and broader public services",
    },
    {
      content:
        "Unrivalled know-how and understanding in the delivery of sensitive mandates",
    },
    {
      content:
        "An advantageous competitive financial model suited to your objectives",
    },
  ],
};

export const consultingServicesCardText = [
  {
    Icon: Speech,
    title: "Strategic Advice",
  },
  {
    Icon: Pyramid,
    title: "Architecture",
  },
  {
    Icon: BriefcaseBusiness,
    title: "Strategic Planning",
  },
  {
    Icon: Settings,
    title: "Program & Project",
  },
  {
    Icon: Box,
    title: "Product Management",
  },
  {
    Icon: GlobeLock,
    title: "Cybersecurity",
  },
];

export const ApplicationServicesandSolutionsText = {
  title: "SERVICES",
  subtitle: "Application Services and Solutions",
  description: [
    {
      id: 1,
      content:
        "Empowering Digital Transformation: Elevate Operations, Enhance Experiences, and Drive Competitiveness through Comprehensive Application Services",
    },
  ],
};

export const ApplicationServicesandSolutionsCard = {
  url: "https://isgaconsult.com/wp-content/uploads/2024/02/top-view-laptop-mouse-with-technology-icons-min-scaled.jpg",
  description: [
    {
      content:
        "Application services play a pivotal role in any digital transformation projects by enabling organizations to modernize their operations and enhance customer experiences. ",
    },
    {
      content:
        "Our services encompass a suite of software tools and functionalities that streamline and optimize various aspects of your business processes and integration.  ",
    },
    {
      content:
        "By leveraging application services, you can achieve greater operational efficiency, agility, and competitiveness, thereby embracing and driving successful digital transformation initiatives in today’s dynamic and technology-driven business environment.",
    },
  ],
};

export const ApplicationServicesandSolutionsCardText = [
  {
    Icon: Rocket,
    title: "Agile Development",
    subtitle: "Java, Drupal, and .NET",
    description:
      "Increase your customer-facing value and improve business outcomes, while shortening your solution development cycle.",
  },
  {
    Icon: Factory,
    title: "Entreprise Resource Planning",
    description:
      "Strategic ERP Solutions: Seamless Implementation, Customization, and Ongoing Optimization for Operational Excellence and Long-Term Business Success.",
  },
  {
    Icon: Cloud,
    title: "Cloud Modernisation",
    subtitle:
      "Microsoft Azure and Amazon Web Services (AWS) for cloud modernization",
    description:
      "Optimize the supply and distribution of your private, public, hybrid, or multi-cloud IT capacities and environments.",
  },
  {
    Icon: DatabaseZap,
    title: "Business Intelligence & Applications",
    subtitle: "Java, Drupal, and .NET",
    description:
      "Transform your data into strategic information for a significant impact on your decision-making process. We offer strategic advice, design, and solution services",
  },
  {
    Icon: SquareTerminal,
    title: "Application Development & Maintenance",

    description:
      "We focus on delivering strategic business outcomes by helping clients fully maximize the value of their applications, drive operational excellence and competitive advantage.",
  },
];

export const technologiesAndPlatformsText = {
  title: "SERVICES",
  subtitle: "Technologies & Platforms",
  description: [
    {
      id: 1,
      content:
        "Empower your business with our end-to-end technology solutions. From ERP services for seamless operations to leveraging ServiceNow, Salesforce, and Microsoft platforms, we offer consultation, implementation, customization, and ongoing support. Streamline processes, enhance workflows, and embrace digital transformation for lasting success in today’s dynamic business landscape.",
    },
  ],
};

export const technologiesAndPlatformsCard = [
  {
    url: "https://isgaconsult.com/wp-content/uploads/2024/02/channels4_profile.jpg",
    details:
      "Accelerate your digital transformation with an AI-based SaaS (software as a service) cloud platform that allows you to automate human resources, accounting and finance, IT, as well as customer support processes, activities, and workflows.",
    description: [
      {
        content: "Consulting services: roadmapping, support, and workshops",
      },
      {
        content:
          "Implementation and development: process modernization and workflow automation",
      },
      {
        content: "Maintenance: administration and availability management",
      },
      {
        content:
          "Support: bilingual contact centre accessible 24/7/365 across Canada to manage your service requests",
      },
    ],
  },

  {
    url: "https://isgaconsult.com/wp-content/uploads/2024/02/salesforce-logo-1920.jpg",
    details:
      "Consultation ISGA masters Salesforce deployment and customization. We’ve successfully executed several large-scale projects in a variety of business sectors and industries. Our range of services includes:",
    description: [
      {
        content: "Needs analysis",
      },
      {
        content: "Solution design",
      },
      {
        content: "Configuration and customization",
      },
      {
        content: "Data migration",
      },
      {
        content: "Training",
      },
      {
        content: "Ongoing support",
      },
    ],
  },

  {
    url: "https://isgaconsult.com/wp-content/uploads/2024/02/history-of-the-microsoft-logo-1.jpg",
    description: [
      {
        content:
          "Microsoft 365: A connected, secure and collaborative work environment adapted to today’s reality and capable of evolving to meet the needs of the future.",
      },
      {
        content:
          "Microsoft Dynamics: Customizable, ready-made modular applications for connecting and improving operations in any sector of your firm, from sales to marketing and customer support to human resources.",
      },
      {
        content:
          "Microsoft Power Platform: A set of tools for accelerating innovation and lowering costs by analyzing data, automating processes, and developing conversational applications and agents (includes Power BI, Power Automate, Power Pages, Power App and Power Virtual Agents).",
      },
    ],
  },
];
