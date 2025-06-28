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
  { name: 'Redux', icon: <SiRedux size={40} color="#764ABC" /> },
  { name: 'Firebase', icon: <SiFirebase size={40} color="#FFCA28" /> },
  { name: 'GraphQL', icon: <SiGraphql size={40} color="#E10098" /> },
  { name: 'Jest', icon: <SiJest size={40} color="#C21325" /> },
  { name: 'Node.js', icon: <FaNodeJs size={40} color="#339933" /> },
];


export const Experience = [
    {
        role: "Frontend Engineer",
        company: "BigStack Technologies",
        time: "2021 – 2024",
        location: "Nigeria (Onsite Intern)",
        responsibilities: [
            "Led collaboration efforts between internal teams and external vendors, ensuring efficient delivery of product improvements, bug fixes, and feature enhancements that aligned with business objectives.",
            "Took ownership of the frontend development for a high-traffic e-commerce platform, integrating backend APIs to facilitate smooth data flow, enhance user interactions, and optimize performance using React.js.",
            "Drove a comprehensive overhaul of the company website's user interface and experience, applying modern design principles and conducting usability testing, which resulted in an 18% increase in subscriber growth and improved overall user engagement.",
            "Collaborated with cross-functional teams to implement responsive design principles, ensuring optimal user experience across all devices and screen sizes.",
            "Implemented state management solutions using Redux and Context API to maintain application performance and scalability."
        ]
    },
    {
        role: "Software Engineer",
        company: "TroopsAfrica",
        time: "2024 – Present",
        location: "Remote (Contract)",
        responsibilities: [
            "Collaborated remotely with a cross-functional team to build a sophisticated internal dashboard for real-time analytics, streamlining application performance monitoring and operational stability.",
            "Designed and implemented a user interface for tracking and analyzing user transaction histories, improving data accessibility and enhancing internal decision-making processes.",
            "Integrated backend APIs to ensure seamless data synchronization and accurate transaction visualization, strengthening system reliability and improving the overall analytics framework.",
            "Utilized modern frontend technologies including React.js and Next.js to deliver high-performance, scalable web applications.",
            "Implemented comprehensive testing strategies using Jest to ensure code quality and reliability across all features."
        ]
        
    }
]

export const Portfolios = [
    {
        image: Grantty,
        name: "Grantty",
        desc: "A comprehensive platform designed to help small businesses discover and apply for grants, making funding more accessible to entrepreneurs and startups. Built with React and modern UI/UX principles.",
        liveLink: "https://grantty.com/",
        githubLink: "https://github.com/OgeeTech/grantty-frontend",
        technologies: ["React", "TypeScript", "Tailwind CSS", "API Integration"]
    },    
    {
        image: Music,
        name: "Musician Portfolio",
        desc: "A responsive portfolio website for showcasing music, albums, and artist profiles. Built with React and optimized for performance with modern web technologies and SEO best practices.",
        liveLink: "https://youngboyjarred.netlify.app/",
        githubLink: "https://github.com/OgeeTech/musician-portfolio",
        technologies: ["React", "CSS3", "Responsive Design", "Performance Optimization"]
    },    
    {
        image: veeKite,
        name: "Veekite Engineering",
        desc: "A modern corporate website built for Veekite, an engineering company based in Nigeria. Features responsive design, interactive elements, and showcases their services and expertise in engineering solutions.",
        liveLink: "https://www.veekites.com/",
        githubLink: "https://github.com/OgeeTech/veekite-engineering",
        technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion"]
    },    
    {
        image: Easy,
        name: "Easy Learning Platform",
        desc: "An online educational platform built with React and Next.js, making education accessible and affordable globally. Features interactive learning modules, progress tracking, and responsive design.",
        liveLink: "https://learn2024.netlify.app/",
        githubLink: "https://github.com/OgeeTech/easy-learning-platform",
        technologies: ["React", "Next.js", "Firebase", "Progressive Web App"]
    },
    {
        image: Artica,
        name: "Artica - Web3 Art Platform",
        desc: "A Web3 art marketplace built with React and blockchain integration, showcasing African cultures and art. Features NFT integration, modern animations, and decentralized technology implementation.",
        liveLink: "https://artica-explore.netlify.app/",
        githubLink: "https://github.com/OgeeTech/artica-web3-platform",
        technologies: ["React", "Web3", "Blockchain", "NFT Integration", "Framer Motion"]
    },
    {
        image: Fit,
        name: "GetFit - Fitness Platform",
        desc: "A modern fitness and gym website template built with React. Features responsive design, interactive components, and optimized performance for fitness businesses and personal trainers.",
        liveLink: "https://get-fitted.netlify.app/",
        githubLink: "https://github.com/OgeeTech/getfit-fitness-platform",
        technologies: ["React", "CSS3", "Responsive Design", "Interactive Components"]
    }
]