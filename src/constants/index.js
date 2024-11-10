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
  description:
    "We focus on a co-creative approach, offering unparalleled skills to help you achieve your innovation, growth, and profitability objectives.",
};

export const aboutText = {
  background_url:
    "https://isgaconsult.com/wp-content/uploads/2024/02/video-2160p.mp4",
  title: "ISGA Consult",
  subtitle:
    "we have developed a range of services that are scalable, efficient and adapted to the needs, challenges and obligations of our clients.",
  description:
    "We focus on a co-creative approach, offering unparalleled skills to help you achieve your innovation, growth, and profitability objectives.",
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
