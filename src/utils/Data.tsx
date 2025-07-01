import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiTypescript, SiReactrouter, SiFramer, SiPostgresql, SiMongodb, SiNextdotjs, SiTailwindcss, SiRedux, SiJest, SiFirebase, SiGraphql } from 'react-icons/si';
import Easy from '../Image/easyLearning.png'
import Artica from '../Image/artica.png'
import Fit from '../Image/getFit.png'
import Music from '../Image/music.png'
import Grantty from '../Image/grantty.png';
import veeKite from '../Image/veekite.png';

export const techIcons = [
  { name: 'HTML5', icon: <FaHtml5 size={40} color="#E34F26" /> },
  { name: 'CSS3', icon: <FaCss3Alt size={40} color="#1572B6" /> },
  { name: 'JavaScript', icon: <FaJs size={40} color="#F7DF1E" /> },
  { name: 'TypeScript', icon: <SiTypescript size={40} color="#3178C6" /> },
  { name: 'React', icon: <FaReact size={40} color="#61DAFB" /> },
  { name: 'Next.js', icon: <SiNextdotjs size={40} /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} color="#06B6D4" /> },
  { name: 'Node.js', icon: <FaNodeJs size={40} color="#339933" /> },
];


export const Experience = [
    {
        role: "Software Engineer",
        company: "TroopsAfrica",
        time: "2024 – Present",
        location: "Remote (Contract)",
        responsibilities: [
            "Built sophisticated internal dashboards for real-time analytics using React.js and Next.js",
            "Designed user interfaces for transaction tracking and analysis, improving data accessibility",
            "Integrated backend APIs to ensure seamless data synchronization and accurate visualization",
            "Enhanced system reliability and analytics framework through modern frontend technologies",
            "Implemented comprehensive testing strategies using Jest to ensure code quality and reliability"
        ]
        
    },
    {
        role: "Frontend Engineer",
        company: "BigStack Technologies",
        time: "2021 – 2024",
        location: "Nigeria (Onsite)",
        responsibilities: [
            "Led frontend development for high-traffic e-commerce platform using React.js",
            "Collaborated with cross-functional teams to deliver product improvements and feature enhancements",
            "Achieved 18% increase in subscriber growth through comprehensive UI/UX improvements",
            "Implemented responsive design principles ensuring optimal user experience across all devices",
            "Applied modern design principles and conducted usability testing to enhance user engagement"
        ]
    }
]

export const Portfolios = [
    {
        image: Grantty,
        name: "Grantty",
        desc: "A comprehensive platform helping small businesses discover and apply for grants, making funding more accessible to entrepreneurs.",
        liveLink: "https://grantty.com/",
        githubLink: "https://github.com/OgeeTech/grantty-frontend",
        technologies: ["React", "TypeScript", "Tailwind CSS", "API Integration"]
    },    
    {
        image: Music,
        name: "Musician Portfolio",
        desc: "A responsive portfolio website for showcasing music, albums, and artist profiles with modern web technologies.",
        liveLink: "https://youngboyjarred.netlify.app/",
        githubLink: "https://github.com/OgeeTech/musician-portfolio",
        technologies: ["React", "CSS3", "Responsive Design", "Performance Optimization"]
    },    
    {
        image: veeKite,
        name: "Veekite Engineering",
        desc: "A modern corporate website for an engineering company featuring responsive design and interactive elements.",
        liveLink: "https://www.veekites.com/",
        githubLink: "https://github.com/OgeeTech/veekite-engineering",
        technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion"]
    },    
    {
        image: Easy,
        name: "Easy Learning Platform",
        desc: "An online educational platform making education accessible globally with interactive learning modules.",
        liveLink: "https://learn2024.netlify.app/",
        githubLink: "https://github.com/OgeeTech/easy-learning-platform",
        technologies: ["React", "Next.js", "Firebase", "Progressive Web App"]
    },
    {
        image: Artica,
        name: "Artica - Web3 Art Platform",
        desc: "A Web3 art marketplace showcasing African cultures with NFT integration and blockchain technology.",
        liveLink: "https://artica-explore.netlify.app/",
        githubLink: "https://github.com/OgeeTech/artica-web3-platform",
        technologies: ["React", "Web3", "Blockchain", "NFT Integration"]
    },
    {
        image: Fit,
        name: "GetFit - Fitness Platform",
        desc: "A modern fitness website template with responsive design and interactive components for fitness businesses.",
        liveLink: "https://get-fitted.netlify.app/",
        githubLink: "https://github.com/OgeeTech/getfit-fitness-platform",
        technologies: ["React", "CSS3", "Responsive Design", "Interactive Components"]
    }
]