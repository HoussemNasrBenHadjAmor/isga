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
  title: "ISGA Consult",
  subtitle:
    "we have developed a range of services that are scalable, efficient and adapted to the needs, challenges and obligations of our clients.",
  description:
    "We focus on a co-creative approach, offering unparalleled skills to help you achieve your innovation, growth, and profitability objectives.",
};
