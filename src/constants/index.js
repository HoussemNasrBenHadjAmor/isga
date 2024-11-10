import {
  BadgeDollarSign,
  BriefcaseBusiness,
  Check,
  CirclePlus,
  Layers,
  Users,
  Flag,
  ChevronLast,
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
      { name: "Consulting Service", link: "consulting-service" },
      {
        name: "Application Services and Solutions",
        link: "application-services-and-solutions",
      },
      { name: "Technologies & Platforms", link: "technologies-platforms" },
      { name: "Managed Services", link: "managed-services" },
      {
        name: "Project & Program Management",
        link: "project-program-management",
      },
      { name: "Artifical Intelligence", link: "artifical-intelligence" },
      {
        name: "Cybersecurity & Entreprise Risk",
        link: "cybersecurity-entreprise-risk",
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
