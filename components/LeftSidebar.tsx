import React from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS, CONTACT_LINK } from '../constants';

const LeftSidebar: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.8 }}
      className="absolute left-0 bottom-0 hidden md:flex flex-col items-center gap-6 z-20 pl-6 pb-0"
    >
      {/* Line First (Top) */}
      <div className="w-px h-32 bg-gray-500"></div>

      {/* Icons Second (Bottom) */}
      <div className="flex flex-col gap-6 items-center pb-6">
        {/* Social Links */}
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-neon hover:-translate-y-1 transition-all duration-300"
            aria-label={link.platform}
          >
            <link.icon size={24} />
          </a>
        ))}

        {/* Message Icon - Links to Contact Page */}
        <a
          href={CONTACT_LINK.url}
          className="text-gray-400 hover:text-neon hover:-translate-y-1 transition-all duration-300"
          aria-label="Send Message"
        >
          <CONTACT_LINK.icon size={24} />
        </a>
      </div>
    </motion.div>
  );
};

export default LeftSidebar;