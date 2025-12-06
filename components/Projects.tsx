import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { PROJECTS, SOCIAL_LINKS } from '../constants';
import SectionTitle from './SectionTitle';

const Projects: React.FC = () => {
  
  const githubLink = SOCIAL_LINKS.find(link => link.platform === 'Github')?.url || '#';

  return (
    <section id="projects" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="projects" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group border border-gray-800 bg-[#111] hover:border-neon transition-colors duration-300 flex flex-col h-full hover:-translate-y-2 hover:shadow-neon"
            >
              {/* Image Slot */}
              <div className="h-48 overflow-hidden border-b border-gray-800 relative">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
                />
                <div className="absolute inset-0 bg-neon/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay"></div>
              </div>

              {/* Tech Stack Bar */}
              <div className="px-4 py-2 border-b border-gray-800 flex gap-2 flex-wrap bg-[#0f0f0f]">
                {project.techStack.map((tech) => (
                  <span key={tech} className="text-xs font-mono text-neon">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2 font-mono transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex gap-4 mt-auto">
                  <a 
                    href={project.liveUrl}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-neon text-neon text-sm font-bold hover:bg-neon hover:text-black transition-all duration-300"
                  >
                    Live <ExternalLink size={14} />
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-600 text-gray-300 text-sm font-bold hover:border-neon hover:text-neon transition-all duration-300"
                  >
                    Github <Github size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <a 
            href={githubLink}
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-8 py-3 border border-neon text-neon font-bold font-mono hover:bg-neon hover:text-black hover:shadow-neon transition-all duration-300"
          >
            View all projects on Github <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;