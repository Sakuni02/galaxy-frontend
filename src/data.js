import { color } from "framer-motion";
import { Code2, Server, Database, Smartphone, MonitorSmartphone, Github, ExternalLink, Code } from "lucide-react";

const skillCategories = [
    {
        title: "Frontend Development",
        icon: Code2,
        iconColor: "from-purple-500 via-pink-300 to-pink-400",
        skills: ["React", "Tailwind CSS", "TypeScript", "HTML5", "CSS3", "JavaScript", "Bootstrap"]
    },
    {
        title: "Backend Development",
        icon: Server,
        iconColor: "from-blue-600 via-cyan-500 to-cyan-300",
        color: "from-nebula-blue to-cosmic-teal",
        skills: ["Express.js", "Spring Boot", "JPA", "Java", "Node.js", "RESTful APIs"]
    },
    {
        title: "Database Technologies",
        icon: Database,
        iconColor: "from-cyan-600 via-lime-300 to-orange-200",
        color: "from-cosmic-teal to-cosmic-gold",
        skills: ["MongoDB", "PostgreSQL", "Firebase", "SQL", "Database Design"]
    },
    // {
    //     title: "Mobile Development",
    //     icon: Smartphone,
    //     iconColor: "from-pink-400 via-fuchsia-400 to-fuchsia-600",
    //     color: "from-nebula-pink to-nebula-purple",
    //     skills: ["React Native", "Android", "iOS", "Cross-platform Apps"]
    // },
    // {
    //     title: "DevOps & Tools",
    //     icon: MonitorSmartphone,
    //     iconColor: "from-yellow-300 via-red-200 to-indigo-500",
    //     color: "from-cosmic-gold to-nebula-blue",
    //     skills: ["Docker", "Git", "GitHub", "Render", "CI/CD", "Cloud Services"]
    // }


];

const projects = [
    {
        title: "ElectroMart - E-Commerce Platform",
        color: "from-purple-900/60 via-indigo-800/55 to-indigo-950/50",
        iconColor: "from-purple-500 to-blue-500",
        description: "A full-stack e-commerce platform for electronics, featuring product listing, category filtering, cart management, Stripe payment integration, and order tracking.",
        techStack: [
            "React",
            "Redux Toolkit",
            "TailwindCSS",
            "Framer Motion",
            "Node.js",
            "Express",
            "MongoDB",
            "Stripe Checkout",
            "Clerk (Authentication)",
            "TypeScript"
        ],
        frontGithubUrl: "https://github.com/Sakuni02/electroMart-frontend.git",
        backGithubUrl: "https://github.com/Sakuni02/electricShop-backend.git",
        demoUrl: "https://electromart-frontend-sakuni.netlify.app/",
        gradient: "from-nebula-purple via-nebula-blue to-cosmic-teal"
    },
    {
        title: "BookShelf",
        color: "from-emerald-300/60 via-amber-300/55 to-red-300/50",
        iconColor: "from-yellow-500 to-blue-500",
        description: "BookShelf is an Android marketplace app for buying and selling second-hand books with secure payments and real-time Firebase backend. Users can browse, search, filter, add books, and contact sellers directly.",
        techStack: [
            "Android (Java)",
            "Firebase Realtime Database",
            "PayHere Payment Gateway",
            "Google Maps / Location Services"
        ],
        frontGithubUrl: "https://github.com/Sakuni02/electroMart-frontend.git",
        backGithubUrl: "https://github.com/Sakuni02/electricShop-backend.git",
        demoUrl: "https://github.com/Sakuni02/BookShelf-Android.git",
        gradient: "from-cosmic-teal via-cosmic-gold to-nebula-pink"
    },
    {
        title: "Thread - E-Commerce Platform",
        color: "from-fuchsia-500/60 via-purple-700/55 to-indigo-800",
        iconColor: "from-pink-400 via-purple-500 to-purple-700",
        description: "A full-stack e-commerce platform for clothing Items, featuring product listing, category filtering, cart management and Stripe payment integration.",
        techStack: [
            "React",
            "Redux Toolkit",
            "TailwindCSS",
            "Framer Motion",
            "Node.js",
            "Express",
            "MongoDB",
            "Stripe Checkout",
            "Clerk (Authentication)",
            "TypeScript"
        ],
        frontGithubUrl: "https://github.com/Sakuni02/fed-2-frontend.git",
        backGithubUrl: "https://github.com/Sakuni02/fed-2-backend.git",
        demoUrl: "https://fed-2-front-end-sakuni.netlify.app/",
        gradient: "from-nebula-pink via-nebula-purple to-nebula-blue"
    },
    {
        title: "Portfolio",
        color: "from-fuchsia-500/60 via-purple-700/55 to-indigo-800",
        iconColor: "from-yellow-500 to-blue-500",
        description: "A visually immersive, galaxy-inspired portfolio website built using React, Tailwind CSS, and Framer Motion, combining smooth animations with a dynamic starry video background.",
        techStack: ["React",
            "Redux Toolkit",
            "TailwindCSS",
            "Framer Motion",
        ],
        frontGithubUrl: "https://github.com/Sakuni02/electroMart-frontend.git",
        backGithubUrl: "https://github.com/Sakuni02/electricShop-backend.git",
        demoUrl: "https://electromart-frontend-sakuni.netlify.app/",
        gradient: "from-nebula-blue via-cosmic-teal to-cosmic-gold"
    },
    // {
    //     title: "AI Content Generator",
    //     color: "from-fuchsia-500/60 via-purple-700/55 to-indigo-800",
    //     iconColor: "from-yellow-500 to-blue-500",
    //     description: "AI-powered content generation tool using modern LLM APIs. Features template creation, custom prompts, and content optimization.",
    //     techStack: ["React", "OpenAI API", "Spring Boot", "Docker"],
    //     frontGithubUrl: "https://github.com/Sakuni02/electroMart-frontend.git",
    //     backGithubUrl: "https://github.com/Sakuni02/electricShop-backend.git",
    //     demoUrl: "https://electromart-frontend-sakuni.netlify.app/",
    //     gradient: "from-cosmic-gold via-nebula-pink to-nebula-purple"
    // },
];

const certifications = [
    {
        title: "Diploma In Software Engineering",
        iconColor: "from-purple-500 via-indigo-400 to-cyan-300",
        color: "from-fuchsia-500/60 via-purple-700/55 to-indigo-800",
        issuer: "UK Awards",
        date: "Ongoing",
    },
    {
        title: "Higher Diploma in Software Engineering",
        iconColor: "from-green-400 via-emerald-400 to-amber-200",
        color: "from-pink-900/60 via-lime-800/55 to-purple-800/50",
        issuer: "UK Awards",
        date: "Ongoing",
    },
    {
        title: "Graduate Diploma in Software Engineering",
        iconColor: "from-yellow-300 via-orange-300 to-red-400",
        color: "from-red-700/60 via-gray-800/55 to-orange-950/50",
        issuer: "UK Awards",
        date: "Ongoing",
    },
    // {
    //     title: "Docker Certified Associate",
    //     iconColor: "from-fuchsia-400 via-purple-500 to-indigo-600",
    //     color: "from-green-700/60 via-blue-700/50 to-yellow-700/55",
    //     issuer: "Docker Inc.",
    //     date: "Ongoing",
    // },

];

export { skillCategories, projects, certifications };