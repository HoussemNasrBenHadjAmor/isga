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
  MapPinHouse,
  Mail,
  Smartphone,
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
        link: "/industries/government-public-sector",
      },
      {
        name: "Insurance",
        link: "/industries/Insurance",
      },
      {
        name: "Financial Services",
        link: "/industries/financial-services",
      },
      {
        name: "Telecommunications",
        link: "/industries/telecommunications",
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

export const managedServicesText = {
  title: "SERVICES",
  subtitle: "Managed Services",
  description: [
    {
      id: 1,
      content:
        "Your business transformation needs deep expertise, process and technology support to pivot quickly and respond rather than react",
    },
  ],
};

export const managedServicesMiddle = {
  subtitle:
    "Consultation ISGA delivers business managed services through an “as-a-service” subscription model. We eclipse traditional and tactical outsourcing models of labour arbitrage and transactional services to help:",
  description: [
    {
      id: 2,
      content: "Operationalize your business",
    },
    {
      id: 3,
      content: "Minimize errors, disruption, and risk",
    },
    {
      id: 4,
      content: "Accelerate your transformation journey and keep it on track",
    },
  ],
};

export const managedServicesCard = [
  {
    url: "https://isgaconsult.com/wp-content/uploads/2024/02/360_F_168292656_TwXLGyNKypFWiAxDSBnHMbr2YWjh8RqR.jpg",
    title: "Customer Contact Center",

    details: [
      {
        content:
          "Our bilingual customer contact centre provides proactive incident management and assures minimum downtime and speedy service restoration for an outstanding customer experience available 24/7/365 across Canada. This service includes:",
      },
    ],
    description: [
      {
        content: "User support",
      },
      {
        content: "Front-line incident management",
      },
      {
        content: "Service requests",
      },
      {
        content: "User information requests",
      },
      {
        content: "Patch management",
      },
      {
        content:
          "Point of contact and referral for tickets requiring greater expertise",
      },
      {
        content: "L1, L2, and L3 technical support",
      },
      {
        content: "Point of sales support",
      },
    ],
  },

  {
    url: "https://isgaconsult.com/wp-content/uploads/2024/02/depositphotos_62068487-stock-photo-call-center.webp",
    title: "Application Support",

    details: [
      {
        content:
          "ISGA Consult assists you in moving your enterprise applications ahead to satisfy your present and future operational needs while preserving your previous investments.",
      },
    ],
    description: [
      {
        content: "Application management in managed mode",
      },
      {
        content:
          "Application development support including major, minor, corrective, and preventive maintenance",
      },
    ],
  },
];

export const projectProgramText = {
  title: "SERVICES",
  subtitle: "Project & Program Management",
  description: [
    {
      id: 1,
      content:
        "Complex business initiatives such as digital transformation represent a significant challenge because they’re no longer limited to the scope of the IT team, rather transcend the organization and its ecosystem of business partners.",
    },
  ],
};

export const artificialText = {
  title: "SERVICES",
  subtitle: "Artificial Intelligence",
  description: [
    {
      id: 1,
      content:
        "In collaboration with your team, we build and deploy AI solutions that optimize your business performance, improve customer experience, and create value. We offer a comprehensive AI service that covers business AI strategies, as well as development, deployment and maintenance of AI solutions.",
    },
  ],
};

export const cyberText = {
  title: "SERVICES",
  subtitle: "Cybersecurity & Entreprise Risk",
  description: [
    {
      id: 1,
      content:
        "As your operations become more complex and digital and protection laws become more stringent, your vulnerability to cyber threats increases.",
    },
  ],
};

export const industriesInsuranceText = {
  title: "Insurance",
  description: [
    {
      id: 1,
      content:
        "The insurance industry — Life & Health Insurance, P&C Insurance, and Group Benefit Insurance — has undergone significant evolution in recent years due to advancements in technology, changing customer needs, and increased competition. Customer-facing innovation has become critical to attract and retain customers. However, the insurance industry faces several challenges that can make it difficult to operate profitably and efficiently.",
    },
    {
      id: 2,
      content:
        "We get it. Insurance is a segment where being nimble and technologically current is beyond essential. We translate strategy into action and work diligently in this specialized environment to successfully complete large-scale projects and help stakeholders attain objectives.",
    },
  ],
};

export const industriesInsuranceCard = [
  {
    url: "https://isgaconsult.com/wp-content/uploads/2024/02/what-is-property-and-casualty-insurance.jpg",
    title: "Property & Casualty Insurance",

    details: [
      {
        content:
          "Partnering with ISGA Consult means extending the next generation of technology options to the Property & Casualty industry to create system flexibility, decrease business risk, and deliver a brighter customer experience",
      },
    ],
  },

  {
    url: "https://isgaconsult.com/wp-content/uploads/2024/02/life-and-health-insurers1-1024x683-1.webp",
    title: "Life & Health Insurance",

    details: [
      {
        content:
          "Our experts have first-hand experience in transforming and modernizing life and health insurance systems and organizations of every size.",
      },
    ],
  },

  {
    url: "https://isgaconsult.com/wp-content/uploads/2024/02/group-employee-benefits-insurance.jpg",
    title: "Group Benefit Insurance",

    details: [
      {
        content:
          "Our experts have first-hand experience in transforming and modernizing life and health insurance systems and organizations of every size.",
      },
      {
        content:
          "Technology can help insurers create personalized plans by using data analytics to identify the health and lifestyle needs of employees. With predictive modelling, insurers can use historical data to predict future trends and make more informed decisions about pricing and risk assessment.",
      },
      {
        content:
          "Technology automates the implementation of cost-reducing plans. It helps insurers engage employees by providing access to digital platforms that allow them to learn more about their plans including policy details, claim information, and coverage options. It helps streamline the process by automating claims processing using artificial intelligence (AI) and machine learning algorithms.",
      },
      {
        content:
          "Technology also helps insurers prevent fraud by using data analytics and AI to identify patterns of fraudulent behaviour. Technology empowers insurers to manage data more efficiently by using cloud-based platforms and big data analytics to process and analyze large amounts of data quickly.",
      },
      {
        content:
          "This enables insurers to overcome many of the challenges they face in providing group benefit insurance by increasing efficiency, reducing costs, and improving the customer experience.",
      },
    ],
  },
];

export const industriesFinancialText = {
  title: "Financial Services",
  description: [
    {
      id: 1,
      content:
        "The world runs and relies on it. This sector is a lynchpin of the economy, and the backbone upon which business depends.",
    },
    {
      id: 2,
      content:
        "Our work with large financial clients has given us an insight on their culture, expectations, and especially the immense breadth of their technology needs.",
    },
    {
      id: 2,
      content:
        "We work to accelerate their complex digital transformations in ways that emphasize security and complete compatibility with existing systems.",
    },
  ],
};

export const industriesFinancialCard = [
  {
    url: "https://isgaconsult.com/wp-content/uploads/2024/02/what-is-property-and-casualty-insurance.jpg",
    title: "Banking",

    details: [
      {
        content:
          "Our banking consulting experts help you decide how to best optimize the experience you offer to your customers and employees, how to maintain your current IT infrastructure and how you should leverage technology to gain market share and improve the bottom line.",
      },
    ],
  },

  {
    url: "https://isgaconsult.com/wp-content/uploads/2024/02/life-and-health-insurers1-1024x683-1.webp",
    title: "Pension and Benefits",

    details: [
      {
        content:
          "The pension and benefits industry faces several challenges, and technology can significantly address many of them. These industries are responsible for managing large investment portfolios, and technology can help them make better investment decisions. Advanced analytics tools and machine learning algorithms can help analyze vast amounts of data and identify investment opportunities that may not be apparent through traditional analysis.",
      },
      {
        content:
          "The pension and benefits industry need to engage with their members to help them understand their options and plan for their future. Technology can help deliver personalized and interactive content through digital platforms, including mobile apps and social media. This can help reduce costs and improve accuracy and efficiency.",
      },
      {
        content:
          "The pension and benefits industry are highly regulated and need to comply with a range of regulations and reporting requirements. Technology helps automate many of these processes, reducing the risk of errors and ensuring compliance.",
      },
      {
        content:
          "The trend is towards the development of multi-service systems connected with diverse business functions (payroll, human resources, finance, management) to produce all the elements required for the effective administration of pension and benefits plans and to offer a more rewarding member experience.",
      },
      {
        content:
          "At ISGA Consult, our Strategy and Business Performance line is represented by a few seasoned experts with extensive experience in retirement and employee benefits, including solution implementation, service transition, modernization projects and support for retirement and employee benefits plan sponsors.",
      },
      {
        content:
          "Our experts support our customers in complex transformation projects, more specifically in the following areas:",
      },
    ],

    description: [
      {
        content: "Program governance",
      },
      {
        content: "Program/project management and control",
      },
      {
        content: "Organizational effectiveness",
      },
      {
        content: "Process optimization",
      },
      {
        content: "Change management",
      },
      {
        content: "Operational support",
      },
      {
        content: "Integration & implementation",
      },
      {
        content: "Data cleansing",
      },
      {
        content: "Pension and actuarial expertise",
      },
      {
        content: "Risk management support",
      },
    ],
  },

  {
    url: "https://isgaconsult.com/wp-content/uploads/2024/02/faster-payments-rtp-gig-economy-ach-flexwage-wagestream-scaled.webp",
    title: "Real-Time Payments",

    details: [
      {
        content:
          "With the Federal Reserve’s launch of FedNow, financial institutions in the United States are keen to explore the possibilities of real-time payments. ISGA Consult’s financial services expertise paired with our Real Time Payment Framework ensures a reliable, secure, and integrated instant payment service for you.",
      },
    ],
  },
];

export const industriesTelecommunicationsText = {
  title: "Telecommunications",
  description: [
    {
      id: 1,
      content:
        "By staying at the cusp of technological trends, we’ve developed modern web applications for access to on-demand content and designed user-friendly solutions for mobile devices, and continue to creatively work on projects that advance the quality and accessibility of our clients’ products and services.",
    },
  ],
};

export const industriesTelecommunicationsCard = [
  {
    url: "https://isgaconsult.com/wp-content/uploads/2024/02/Advisory-board1.jpg",
    title: "Advisory Services",

    details: [
      {
        content:
          "The telecommunications industry is at an inflection point. The CSP of the future will embrace new technologies and processes while keeping customer needs front and centre. ISGA Consult delivers deep industry expertise, strategic partnerships, frameworks and tools to help you:",
      },
    ],

    description: [
      {
        content:
          "Make the right core strategic decisions about the evolution of wireless/wireline services",
      },
      {
        content:
          "Create compelling employee and customer experiences to set you apart in the marketplace",
      },
      {
        content:
          "Design and connect ecosystems of industries, partners, service providers and customers to build bold new market offers",
      },
      {
        content:
          "Reimagine your operating model to be better prepared for consumer and competitor actions",
      },
      {
        content:
          "Simplify products, processes and business rules to make you more efficient while better serving your customers",
      },
      {
        content:
          "Embrace the future by integrating AI into your capabilities and processes",
      },
      {
        content:
          "Retain skills and talent so you can provide leading class products and services",
      },
      {
        content: "Protect your data, brand and reputation",
      },
    ],
  },

  {
    url: "https://isgaconsult.com/wp-content/uploads/2024/02/achievement-3658092-scaled.jpg",
    title: "Functional Services",

    details: [
      {
        content:
          "ISGA Consult has a strong delivery track record. With disciplined program and project management professionals, change management experts and local and offshore delivery teams, we can tackle your transformation initiatives and deliver the expected business results. Levio always delivers on scope, on budget and on time!",
      },
    ],
  },

  {
    url: "https://isgaconsult.com/wp-content/uploads/2024/02/71-jpg-1024x682-1.jpg",
    title: "Technical Services",

    details: [
      {
        content:
          "ISGA Consult can partner with you to meet your technical needs. With leading edge expertise in:",
      },
    ],

    description: [
      {
        content: "Cybersecurity and Enterprise Risk Management",
      },
      {
        content: "Solutions Architecture",
      },
      {
        content:
          "BSS (Business Support Sytems) / OSS (Operation Support Systems) / ERP (Enterprise Resource Planning) Implementation",
      },
      {
        content: "Evolution and Maintenance",
      },
      {
        content: "Software Engineering",
      },
      {
        content: "Cloud and Infrastructure",
      },
      {
        content: "AI, Data and Analytics",
      },
    ],
  },
];

export const industriesPublicText = {
  title: "Government and Public Sector​",
  description: [
    {
      id: 1,
      content:
        "As governments reinvent ways of working to improve citizen services and increase efficiency, Consultation ISGA helps clients accelerate outcomes with proven expertise and secure solutions.",
    },
  ],
};

export const industriesPublicCard = [
  {
    url: "https://isgaconsult.com/wp-content/uploads/2024/02/PrivateSectorvs.PublicSector-407070262c084b19a3ae5d0158925baa.jpg",
    title: "Public sector",

    details: [
      {
        content:
          "Not only does ISGA Consult have deep sector expertise, but we also possess the deep technological capacities to enable government evolution. A cloud transformation is never just about cloud in government, it is about changing how the public sector designs its budgets, rolls out its services to citizens and operates.",
      },
    ],
  },

  {
    url: "https://isgaconsult.com/wp-content/uploads/2024/02/pexels-andrea-piacquadio-845451-scaled.jpg",
    title: "Public services",

    details: [
      {
        content:
          "We work in close collaboration with several large Quebec cities to further their digital shift and implement new technologies. By making them smart cities, they’re better able to adapt to new realities and changing issues, improve the performance and efficiency of services for citizens and businesses, and further their sustainable development.",
      },
    ],
  },

  {
    url: "https://isgaconsult.com/wp-content/uploads/2024/02/side-view-latin-people-training-outdoors-min-scaled.jpg",
    title: "Improving citizen services through secure, digital operations",

    details: [
      {
        content:
          "As governments reinvent ways of working to improve citizen services and increase efficiency, Consultation ISGA helps clients accelerate outcomes with proven expertise and secure solutions.",
      },
    ],
  },
];

export const carrersText = {
  title: "CAREERS",
  subtitle: "Together, as owners, let’s turn meaningful insights into action",
  description: [
    {
      id: 1,
      content:
        "Join a company rooted in ownership, teamwork, respect and belonging. Be part of our company of owners, where you’ll benefit from the rewards of our collective success, while working side-by-side with colleagues and clients to solve complex issues.",
    },
  ],
};

export const contactCard = [
  {
    Icon: MapPinHouse,
    title: "Address",
    description: "1933 Av Laplante Laval, Québec H7S 1E6",
  },
  {
    Icon: Mail,
    title: "Email Address",
    description: "info@isgaconsult.com",
  },
  {
    Icon: Smartphone,
    title: "Phone Number",
    description: "+1 514 831 0884",
  },
];
