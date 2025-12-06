import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  width?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, width = "w-16" }) => {
  return (
    <div className="flex items-center gap-4 mb-12">
      <h2 className="text-3xl font-mono text-neon font-bold">
        <span className="text-neon">#</span>{title}
      </h2>
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: 100 }}
        transition={{ duration: 0.8 }}
        className={`h-px bg-neon w-32 hidden sm:block`}
      />
    </div>
  );
};

export default SectionTitle;