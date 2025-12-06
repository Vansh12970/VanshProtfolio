import { Github, Linkedin, Instagram, Mail } from 'lucide-react';
import { NavLink, Project, SkillCategory, SocialLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: '#home', href: '#home' },
  { label: '#projects', href: '#projects' },
  { label: '#skills', href: '#skills' },
  { label: '#about', href: '#about' },
  { label: '#contact', href: '#contact' },
];

export const HERO_DATA = {
  name: "Vansh",
  role: "software engg.",
  subRole: "full-stack developer.",
  tagline: "He turns vision into scalable products engineered with clean code.",
  status: "Open for new opportunities",
  resumeUrl: "/resume.pdf" 
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'DISHA (Disaster Information Sharing & Help Alert)',
    description: 'AI-driven disaster response with real-time alerts, sentiment analysis, and smart tracking for faster rescue coordination.',
    techStack: ['React', 'Next.js', 'Node.js', 'FastAPI', 'MongoDB', 'GCP', 'TensorFlow', 'Twilio API'],
    imageUrl: '/DISHAapp.png',
    liveUrl: 'https://disha-app-zeta.vercel.app/',
    githubUrl: 'https://github.com/Vansh12970/DISHA_APP'
  },
  {
    id: '2',
    title: 'Thakur Dealings (Vehicle Reselling Platform)',
    description: 'Thakur Dealings is a modern vehicle reselling platform built with React, Next.js, and Firebase. Made for frenchise Thakur Dealings.',
    techStack: ['React', 'Next.js', 'Firebase Hosting & Firestore', 'EmailJS'],
    imageUrl: '/ThakurDealings.png',
    liveUrl: 'https://thakur-dealings.web.app/',
    githubUrl: 'https://github.com/Vansh12970/vehicle-reselling-website'
  },
  {
    id: '3',
    title: 'ShortURL',
    description: 'A modern URL shortener with QR support and link history management. Built using Java Spring Boot and QRCode.js.',
    techStack: ['Java 17', 'Spring Boot', 'Spring Web', 'HTML5', 'CSS3', 'QRCode.js'],
    imageUrl: '/ShortURL.png',
    liveUrl: 'https://shorturl-nhsu.onrender.com/',
    githubUrl: 'https://github.com/Vansh12970/SHORT-URL'
  },
  {
    id: '4',
    title: 'ReCraft (Gamifying Sustainability & Circular Commmerce)',
    description: 'A gamified sustainability platform rewarding eco-friendly actions with transparency, impact tracking, and GreenBits incentives.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB', 'Cloudinary', 'Render & Vercel'],
    imageUrl: '/Recraft.png',
    liveUrl: 'https://recraft.onrender.com/',
    githubUrl: 'https://github.com/ReCrafters/Recraft'
  },
  {
    id: '5',
    title: 'VanshDev. Portfolio',
    description: 'Personal portfolio website showcasing projects, skills, and contact info.',
    techStack: ['React', 'Tailwind CSS', 'JavaScript', 'Vite', 'EmailJS' ],
    imageUrl: '/MyPortfolio.png',
    liveUrl: 'https://vansh-protfolio-chi.vercel.app/',
    githubUrl: 'https://github.com/Vansh12970/VanshProtfolio'
  },
  {
    id: '6',
    title: 'Snake Game',
    description: 'A modern implementation of the classic Snake Game using C++ and SFML Library.',
    techStack: ['C++', 'CMake', 'SFML', 'DataStructures'],
    imageUrl: '/SnakeGame.png',
    liveUrl: 'https://github.com/Vansh12970/Snake_Game/releases',
    githubUrl: 'https://github.com/Vansh12970/Snake_Game'
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: 'Languages',
    skills: ['JavaScript (ES6+)', 'HTML5', 'CSS', 'C++', 'Java', 'SQL']
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'Firebase', 'Redis']
  },
  {
    title: 'Frameworks',
    skills: ['React.js', 'Next.js', 'TailwindCSS', 'Node.js', 'Express']
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git/Github', 'Docker', 'Pstman', 'GCP', 'Cloudinary', 'AWS (S3, EC2)', 'Figma', 'Vercel * Render * Railway']
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'Github', url: 'https://github.com/Vansh12970', icon: Github },
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/itsme-vansh/', icon: Linkedin },
  { platform: 'Instagram', url: 'https://www.instagram.com/vanshpratapsingh__?igsh=MXNneHJ6OG83MDY4ag==', icon: Instagram },
];

// Separate link for the left sidebar message icon
export const CONTACT_LINK = {
  platform: 'Message',
  url: '#contact',
  icon: Mail
};