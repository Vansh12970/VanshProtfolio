import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="about-me" />

        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 font-mono text-gray-300 leading-relaxed"
          >
          <p className="mb-6">
            Hello! I’m Vansh, a developer focused on building meaningful digital systems with clean engineering and purposeful design. My interest lies in AI-driven solutions, automation, and real-time platforms.
          </p>
          <p className="mb-6">
          From disaster response intelligence to sustainable commerce and smart resale dashboards, I build products that balance intuitive UX with reliable backend logic. This journey has strengthened my skills in React, Next.js, Node.js, and modern API ecosystems.
          </p>
          <p className="mb-8">
          I view development as solving product architecture, not just writing code. As a Smart India Hackathon finalist, I continue refining my craft through practical builds, ensuring every system I create is functional, scalable, and performance-ready.
          </p>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 flex justify-center md:justify-end"
          >
             <div className="relative w-full max-w-md aspect-square">
                {/* Decoration Border */}
                <div className="absolute inset-0 border-2 border-neon translate-x-4 translate-y-4 rounded-sm z-0"></div>
                
                {/* Image */}
                <img 
                  src="/asset3.png" 
                  alt="Workspace" 
                  className="relative z-10 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-sm"
                />
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;