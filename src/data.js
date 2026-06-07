// ------- PERSONAL INFORMATION --------

export const personal = {
  name: "Greivin Díaz Mendoza",
  role: "Business Informatics Student & Full-Stack Developer",
  year: "4th Year",
  location: "Alajuela, Costa Rica",
  email: "greivind01@gmail.com",

  github: "https://github.com/Gdiazm14",

  linkedin: "https://linkedin.com/in/gdiazm14",

  bio: [
    "Fourth-year Business Informatics student at the University of Costa Rica with a strong interest in software engineering and full-stack development.",

    "I build modern web applications using React, ASP.NET Core, Spring Boot, and SQL databases, focusing on clean architecture, maintainable code, and real-world problem solving.",

    "Currently seeking a professional internship opportunity where I can contribute to meaningful projects while continuing to grow as a software developer."
  ]
};

// ------- RESUME --------

export const resume = {
  label: "Download CV",
  file: "../src/assets/CV.pdf"
};

// ------- OPPORTUNITIES --------

export const opportunities = {
  title: "Open to Internship Opportunities",

  description:
    "Currently looking for a Software Engineering internship where I can contribute to real-world projects, collaborate with experienced teams, and continue growing as a full-stack developer."
};

// ------- SKILLS --------

export const skills = [
  {
    category: "Frontend",
    items: [
      "React",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Tailwind CSS"
    ]
  },

  {
    category: "Backend",
    items: [
      "ASP.NET Core",
      "Spring Boot",
      "REST APIs",
      "JWT Authentication"
    ]
  },

  {
    category: "Databases",
    items: [
      "SQL Server",
      "Oracle",
      "MySQL"
    ]
  },

  {
    category: "DevOps & Tools",
    items: [
      "Docker",
      "Kubernetes",
      "Git",
      "GitHub Actions",
      "Postman"
    ]
  },

  {
    category: "Networking",
    items: [
      "Network Topologies",
      "VLANs",
      "Static Routing",
      "Switch Configuration"
    ]
  }
];

// ------- EXPERIENCE --------

export const experience = [
  {
    role: "Specialized IT Support Technician",

    company: "Judicial Branch (External Contractor)",

    period: "5/2022 - 12/2022",

    description: [
      "Provide technical support for end users and internal systems.",
      "Troubleshoot hardware, software, and network-related issues.",
      "Perform equipment maintenance and software installations.",
      "Collaborate with users to resolve incidents efficiently."
    ]
  }
];

// ------- CERTIFICATIONS --------

export const certifications = [
  {
    name: "Scrum Fundamentals Certified",

    issuer: "SCRUMstudy",

    date: "2026",

    credentialUrl: "https://www.scrumstudy.com/certification/verify?type=SFC&number=1166877",

    // Add path to your cert image, e.g. "/certs/scrum.png"
    image: "../src/assets/scrum.png"
  }
];

// ------- LANGUAGES --------

export const languages = [
  {
    name: "Spanish",
    level: "Native"
  },

  {
    name: "English",
    level: "Intermediate"
  }
];

// ------- EDUCATION --------

export const education = [
  {
    period: "2023 — Present",

    degree: "Bachelor's Degree in Business Informatics",

    institution: "University of Costa Rica (UCR)",

    detail:
      "Currently in the fourth year. Core focus areas include software development, relational databases, enterprise architectures, networking, and IT project management."
  }
];

// ------- APPROACH / VALUES --------

export const approachItems = [
  {
    label: "Clean Architecture",

    desc: "I apply MVC, layered architecture, and SOLID principles from the beginning of each project."
  },

  {
    label: "Continuous Learning",

    desc: "I constantly explore new technologies and focus on understanding the reasoning behind technical decisions."
  },

  {
    label: "Good Practices",

    desc: "Version control, documentation, planning, and testing are part of my workflow from day one."
  },

  {
    label: "Product Mindset",

    desc: "I focus on solving real-world problems and creating solutions that provide value to users."
  }
];

// ------- PROJECTS --------
// Fill in your real project info. Add image paths to `images` (e.g. ["/projects/p1.png"]).
// // Leave `demo: ""` if there is no live demo.
export const projects = [
  {
  title: "Library Management System",

  description: "Full-featured library management platform with loan management, book reservations, a complete book catalog, and role-based access control (Reader / Admin). Collaborated as a Full-Stack Developer using C# ASP.NET Core for the backend and Blazor for the frontend, with SQL Server and MySQL for data persistence. Key highlights include automated state management for loans and reservations, a bulk book import feature, an email notification system, monthly statistical reports exportable in both Excel and PDF format, and containerized deployment using Docker and Docker Compose.",

  tags: ["C#", "ASP.NET Core", "Blazor", "SQL Server", "MySQL", "Docker", "JWT", "REST APIs"],

  github: "https://github.com/Gdiazm14",

  demo: "https://sgb-front.vercel.app",

  images: ["../src/assets/books-1.png", "../src/assets/books-2.png", "../src/assets/books-3.png", "../src/assets/books-4.png", "../src/assets/books-5.png"]
},

{
  title: "SGA – Asset Management System",

  description: "Institutional asset management platform built for the Universidad de Costa Rica's Centro de Informática. Handles the full lifecycle of physical assets: registration, loan tracking, reconciliation, and reporting. Collaborated as a Full-Stack Developer, responsible for major refactoring across both frontend and backend layers, and implementation of core features from the ground up. Key technical highlights include JWT-based authentication with role-based access control (Administrador / Asistente), a loan module with automatic MOROSO status detection after 30 days, PDF loan receipt generation using jsPDF v3 primitives (no third-party table plugins), a file-upload reconciliation flow using FormData with multipart handling, soft-delete logic via Estado field, and a full audit trail through a BitacoraService. Containerized with Docker Compose and served through an Nginx reverse proxy for institutional on-premise deployment.",

  tags: ["React 19", "ASP.NET Core", "SQL Server", "Docker", "JWT", "jsPDF", "Nginx", "CSS Modules", "Clean Architecture", "MVC", "SOLID Principles"],

  github: "https://github.com/Gdiazm14",

  demo: "",

  images: ["../src/assets/sga1.png", "../src/assets/sga2.png", "../src/assets/sga3.png","../src/assets/sga6.png", "../src/assets/sga4.png", "../src/assets/sga5.png"]
},

{
  title: "Personal Finance App",

  description: "Personal finance web application for budgeting and expense tracking across customizable categories. Built with a decoupled architecture using Java Spring Boot as the REST API backend and React for the interactive frontend. Implements user authentication, relational database persistence, and is fully deployed on cloud platforms using Vercel for the frontend and Render for the backend.",

  tags: ["Java", "Spring Boot", "React", "REST APIs", "MySQL", "Vercel", "Render", "JWT Authentication"],

  github: "https://github.com/Gdiazm14/finance-front.git",

  demo: "https://finance-front-self.vercel.app/",

  images: ["../src/assets/f1.png", "../src/assets/f2.png", "../src/assets/f3.png"]
}
];