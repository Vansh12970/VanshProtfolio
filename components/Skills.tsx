import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';
import SectionTitle from './SectionTitle';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-background relative overflow-hidden">
        {/* Background Grid Decoration */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(33,255,144,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(33,255,144,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle title="skills" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-gray-800 bg-[#0B0B0B] p-6 hover:border-neon transition-all duration-300 hover:shadow-[0_0_15px_rgba(33,255,144,0.15)] group"
            >
              <h3 className="text-neon font-mono font-bold text-lg mb-4 border-b border-gray-800 pb-2 group-hover:border-neon/50 transition-colors">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-gray-400 font-mono text-sm flex items-center gap-2">
                    <span className="w-1 h-1 bg-neon rounded-full opacity-50 group-hover:opacity-100"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;