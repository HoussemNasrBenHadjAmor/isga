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
    name: "Contact",
    link: "/contact",
  },
  {
    name: "Carrers",
    link: "/carrers",
  },
];
