import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { HERO_DATA } from '../constants';
import LeftSidebar from './LeftSidebar';

const Hero: React.FC = () => {
  // Typing animation variants
  const sentenceVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const nameText = `${HERO_DATA.name} is a `;
  const roleText = `${HERO_DATA.role}`;
  const connectorText = " and ";
  const subRoleText = `${HERO_DATA.subRole}`;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      
      {/* Sidebar fixed only to this section (Absolute) */}
      <LeftSidebar />

      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 border border-neon/20 rotate-45 hidden lg:block" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 border border-neon/10 rounded-full hidden lg:block" />
      
      <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="font-mono z-10">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
            variants={sentenceVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Name + "is a" */}
            {nameText.split("").map((char, index) => (
              <motion.span key={index + "name"} variants={letterVariants} className="text-white">
                {char}
              </motion.span>
            ))}
            
            {/* Role (Neon) */}
            {roleText.split("").map((char, index) => (
              <motion.span key={index + "role"} variants={letterVariants} className="text-neon">
                {char}
              </motion.span>
            ))}
            
            <br />
            
            {/* "and" */}
            {connectorText.split("").map((char, index) => (
              <motion.span key={index + "conn"} variants={letterVariants} className="text-white">
                {char}
              </motion.span>
            ))}

            {/* SubRole (Neon) */}
            {subRoleText.split("").map((char, index) => (
              <motion.span key={index + "subrole"} variants={letterVariants} className="text-neon">
                {char}
              </motion.span>
            ))}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
            className="text-gray-400 text-lg mb-8 max-w-lg"
          >
            {HERO_DATA.tagline}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <a 
              href="#contact"
              className="inline-block px-8 py-3 border border-neon text-neon font-bold hover:bg-neon hover:text-black hover:shadow-neon transition-all duration-300"
            >
              Contact Me
            </a>
            
            <a 
              href={HERO_DATA.resumeUrl}
              download="Vansh_Resume.pdf"
              className="inline-flex items-center gap-2 px-8 py-3 border border-gray-600 text-gray-300 font-bold hover:border-neon hover:text-neon transition-all duration-300"
            >
              Resume <Download size={18} />
            </a>
          </motion.div>
        </div>

        {/* Image Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Abstract Tech Circle/Bg */}
            <div className="absolute inset-0 bg-gradient-to-tr from-neon/20 to-transparent rounded-full blur-2xl"></div>
            
            {/* The Image (Masked) */}
            <img 
              src="/asset1.jpg" 
              alt="Developer"
              className="relative w-full h-full object-cover rounded-2xl border-2 border-neon/30 grayscale hover:grayscale-0 transition-all duration-500 shadow-neon-strong"
              style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)' }}
            />
            
            {/* Status Badge */}
            <div className="absolute -bottom-6 -right-6 md:bottom-4 md:-right-4 bg-background border border-neon px-4 py-2 flex items-center gap-2 shadow-lg">
              <span className="w-2 h-2 bg-neon rounded-full animate-pulse"></span>
              <span className="text-gray-300 text-xs font-mono">{HERO_DATA.status}</span>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 4, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-neon text-2xl"
      >
        ↓
      </motion.div>
    </section>
  );
};

export default Hero;