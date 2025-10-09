import { Code2, Server, Database, Smartphone, MonitorSmartphone, Github, ExternalLink, Code } from "lucide-react";

const skillCategories = [
    {
        title: "Frontend Development",
        icon: Code2Icon,
        color: "67deec8e2b2c146578729f2f",
        skills: ["React", "Tailwind CSS", "TypeScript", "HTML5", "CSS3", "JavaScript"]
    },
    {
        title: "Backend Development",
        icon: Server,
        color: "from-nebula-blue to-cosmic-teal",
        skills: ["Express.js", "Spring Boot", "JPA", "Java", "Node.js", "RESTful APIs"]
    },
    {
        title: "Database Technologies",
        icon: Database,
        color: "from-cosmic-teal to-cosmic-gold",
        skills: ["MongoDB", "PostgreSQL", "Firebase", "SQL", "Database Design"]
    },
    {
        title: "Mobile Development",
        icon: Smartphone,
        color: "from-nebula-pink to-nebula-purple",
        skills: ["React Native", "Android", "iOS", "Cross-platform Apps"]
    },
    {
        title: "DevOps & Tools",
        icon: MonitorSmartphone,
        color: "from-cosmic-gold to-nebula-blue",
        skills: ["Docker", "Git", "GitHub", "Render", "CI/CD", "Cloud Services"]
    }


];

const projects = [
    {
        title: "E-Commerce Platform",
        description: "Full-stack e-commerce solution with real-time inventory management, secure payment integration, and responsive design. Built for scalability and performance.",
        techStack: ["React", "Node.js", "MongoDB", "Stripe"],
        githubUrl: "#",
        demoUrl: "#",
        gradient: "from-nebula-purple via-nebula-blue to-cosmic-teal"
    },
    {
        title: "Task Management App",
        description: "Collaborative task management application with real-time updates, team workspaces, and advanced filtering. Optimized for productivity.",
        techStack: ["React", "Firebase", "Tailwind CSS"],
        githubUrl: "#",
        demoUrl: "#",
        gradient: "from-cosmic-teal via-cosmic-gold to-nebula-pink"
    },
    {
        title: "Social Media Dashboard",
        description: "Analytics dashboard for social media metrics with beautiful data visualizations, custom reports, and API integrations.",
        techStack: ["TypeScript", "Express.js", "PostgreSQL", "Chart.js"],
        githubUrl: "#",
        demoUrl: "#",
        gradient: "from-nebula-pink via-nebula-purple to-nebula-blue"
    },
    {
        title: "Mobile Fitness Tracker",
        description: "Cross-platform fitness tracking mobile app with workout plans, progress monitoring, and social features for motivation.",
        techStack: ["React Native", "Firebase", "Redux"],
        githubUrl: "#",
        gradient: "from-nebula-blue via-cosmic-teal to-cosmic-gold"
    },
    {
        title: "AI Content Generator",
        description: "AI-powered content generation tool using modern LLM APIs. Features template creation, custom prompts, and content optimization.",
        techStack: ["React", "OpenAI API", "Spring Boot", "Docker"],
        githubUrl: "#",
        demoUrl: "#",
        gradient: "from-cosmic-gold via-nebula-pink to-nebula-purple"
    },
    {
        title: "Real-Time Chat Application",
        description: "Modern chat application with end-to-end encryption, group chats, file sharing, and video calling capabilities.",
        techStack: ["React", "Socket.io", "Node.js", "WebRTC"],
        githubUrl: "#",
        demoUrl: "#",
        gradient: "from-nebula-purple via-cosmic-teal to-nebula-blue"
    }
];

export { skillCategories, projects };