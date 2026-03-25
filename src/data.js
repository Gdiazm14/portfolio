// ------- PERSONAL INFORMATION --------
export const personal = {
    name: 'Greivin Díaz Mendoza',
    role: 'Software Engineering Student',
    year: '4th Year',
    location: 'Alajuela, Costa Rica',
    email: 'greivind01@gmail.com',
    github: 'https://github.com/Gdiazm14',
    linkedin: 'https://linkedin.com/in/gdiazm14',
    bio: [
        'Fourth-year Business Informatics student at the University of Costa Rica, with a strong focus on web development and modern software engineering. I build full-stack applications using React, Spring Boot, and ASP.NET Core — prioritizing clean architecture, maintainable code, and practical solutions.',
        'I enjoy working across the full stack and am always looking for opportunities to apply what I learn in real-world projects. Currently open to internships or collaborative work where I can contribute and keep growing.'
    ]
}


// ------- SKILLS --------
export const skills = [
    {
        category: 'Frontend',
        items: ['React', 'JavaScript', 'HTML', 'CSS'],
    },
    {
        category: 'Backend',
        items: ['Java (Spring Boot)', 'ASP.NET Core', 'REST APIs', 'JWT Authentication'],
    },
    {
        category: 'Databases',
        items: ['SQL Server', 'Oracle', 'MySQL'],
    },
    {
        category: 'DevOps & Tools',
        items: ['Docker', 'Kubernetes', 'Git', 'GitHub Actions'],
    },
    {
        category: 'Networking',
        items: ['Network Topologies', 'VLANs', 'Static Routing', 'Switch Configuration'],
    },
]


// ------- PROJECTS --------


import financeDashboard  from './assets/finance-dashboard.png'
import financeTransactions   from './assets/finance-transactions.png'
import financeBudget     from './assets/finance-budgets.png'

export const projects = [
    {
        tag: 'Backend · Academic',
        name: 'Library Management System',
        description:
            'A web-based system for managing book loans, authors, and user accounts. Features include monthly reports, automated email notifications, and a reservation module.',
        highlights: [
            'JWT-secured REST API with role-based access',
            'Automated email notifications for due dates',
            'Monthly reporting with exportable data',
            'Containerized with Docker for easy deployment',
        ],
        stack: ['ASP.NET Core', 'SQL Server', 'JWT', 'Docker'],
        github: 'https://github.com/Gdiazm14',
        demo: null,
        images: [],
    },
    {
        tag: 'Full Stack · Personal',
        name: 'Personal Finance Tracker',
        description:
            'A full-stack budgeting app for tracking income, expenses, and monthly financial goals. Built with a focus on a clean UI and an intuitive user experience.',
        highlights: [
            'Category-based budgeting with visual summaries',
            'Secure authentication via Spring Security + JWT',
            'Responsive React frontend deployed on Vercel',
            'REST API backend running in Docker',
        ],
        stack: ['Spring Boot', 'React', 'MySQL', 'JWT', 'Docker'],
        github: 'https://github.com/Gdiazm14/finance-front.git',
        demo: 'https://finance-front-self.vercel.app/',
        images: [financeDashboard,financeBudget, financeTransactions]
    },
]


// ------- EDUCATION --------
export const education = [
    {
        period: '2023 — Present',
        degree: "Bachelor's Degree in Business Informatics",
        institution: 'University of Costa Rica (UCR)',
        detail:
            'Currently in the fourth year. Core focus areas include software development, relational databases, enterprise architectures, and IT project management.',
    },
]


// ------- APPROACH / VALUES --------
export const approachItems = [
    {
        label: 'Clean Architecture',
        desc: 'I apply MVC, layered patterns, and SOLID principles from the design phase — not as an afterthought.',
    },
    {
        label: 'Continuous Learning',
        desc: 'I actively explore new tools and frameworks, focusing on understanding the "why" behind every decision.',
    },
    {
        label: 'Good Practices',
        desc: 'Version control, documentation, and planning are part of my workflow from day one.',
    },
    {
        label: 'Product Mindset',
        desc: 'Code is a means to an end. I keep the real-world problem in focus throughout the development process.',
    },
]