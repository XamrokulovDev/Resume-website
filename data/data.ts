// data types 
import { NavbarType, SkillType, ProjectType } from "../src/types";

export const NavbarList: NavbarType[] = [
    { id: 1, title: 'Home', link: '/' },
    { id: 2, title: 'Experience', link: '/experience' },
    { id: 4, title: 'Skills', link: '/skill' },
    { id: 3, title: 'Projects', link: '/project' }
];

export const SkillList: SkillType[] = [
    // Frontend
    { id: 1, category: "Frontend", skill: "HTML" },
    { id: 2, category: "Frontend", skill: "CSS" },
    { id: 3, category: "Frontend", skill: "JavaScript" },
    { id: 4, category: "Frontend", skill: "TypeScript" },
    { id: 5, category: "Frontend", skill: "React.js" },
    { id: 6, category: "Frontend", skill: "Next.js" },
    { id: 7, category: "Frontend", skill: "Bootstrap" },
    { id: 8, category: "Frontend", skill: "Tailwind CSS" },
    { id: 9, category: "Frontend", skill: "Sass (SCSS)" },
    { id: 10, category: "Frontend", skill: "Material UI" },
    { id: 11, category: "Frontend", skill: "Ant Design" },

    // Backend
    { id: 12, category: "Backend", skill: "Node.js" },
    { id: 13, category: "Backend", skill: "Express.js" },
    { id: 14, category: "Backend", skill: "REST API" },
    { id: 15, category: "Backend", skill: "WebSocket" },

    // Database
    { id: 16, category: "Database", skill: "MongoDB" },
    { id: 17, category: "Database", skill: "PostgreSQL" },

    // Tools
    { id: 18, category: "Tools", skill: "Git" },
    { id: 19, category: "Tools", skill: "GitHub" },
    { id: 20, category: "Tools", skill: "Figma" },
    { id: 21, category: "Tools", skill: "Photoshop" }
];

export const ProjectList: ProjectType[] = [
    { id: 1, title: "Ndinoff.uz", image: "https://www.sony.co.id/image/bc6d25fa6371c2899ce704a2bed7614c?fmt=png-alpha&wid=960", link: "https://ndinoff.uz" },
    { id: 2, title: "Ndinoff.uz", image: "https://www.sony.co.id/image/bc6d25fa6371c2899ce704a2bed7614c?fmt=png-alpha&wid=960", link: "https://ndinoff.uz" },
    { id: 3, title: "Ndinoff.uz", image: "https://www.sony.co.id/image/bc6d25fa6371c2899ce704a2bed7614c?fmt=png-alpha&wid=960", link: "https://ndinoff.uz" },
    { id: 4, title: "Ndinoff.uz", image: "https://www.sony.co.id/image/bc6d25fa6371c2899ce704a2bed7614c?fmt=png-alpha&wid=960", link: "https://ndinoff.uz" },
    { id: 5, title: "Ndinoff.uz", image: "https://www.sony.co.id/image/bc6d25fa6371c2899ce704a2bed7614c?fmt=png-alpha&wid=960", link: "https://ndinoff.uz" },
    { id: 6, title: "Ndinoff.uz", image: "https://www.sony.co.id/image/bc6d25fa6371c2899ce704a2bed7614c?fmt=png-alpha&wid=960", link: "https://ndinoff.uz" },
    { id: 7, title: "Ndinoff.uz", image: "https://www.sony.co.id/image/bc6d25fa6371c2899ce704a2bed7614c?fmt=png-alpha&wid=960", link: "https://ndinoff.uz" },
    { id: 8, title: "Ndinoff.uz", image: "https://www.sony.co.id/image/bc6d25fa6371c2899ce704a2bed7614c?fmt=png-alpha&wid=960", link: "https://ndinoff.uz" },
    { id: 9, title: "Ndinoff.uz", image: "https://www.sony.co.id/image/bc6d25fa6371c2899ce704a2bed7614c?fmt=png-alpha&wid=960", link: "https://ndinoff.uz" }
]