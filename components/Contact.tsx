import React, { useRef, useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2} from 'lucide-react';
import emailjs from '@emailjs/browser';
import SectionTitle from './SectionTitle';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    // Retrieve keys from environment variables
    const SERVICE_ID = (import.meta as any).env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = (import.meta as any).env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = (import.meta as any).env.VITE_EMAILJS_PUBLIC_KEY;

    // Basic validation to check if keys are set
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY || 
        SERVICE_ID.includes('your_') || 
        TEMPLATE_ID.includes('your_') || 
        PUBLIC_KEY.includes('your_')) {
      alert("EmailJS configuration is missing. Please check your .env file.");
      return;
    }

    setIsLoading(true);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(
        () => {
          alert("Thank you for reaching out. I'll get back to you shortly!");
          if (formRef.current) formRef.current.reset(); 
        },
        (error) => {
          console.error('FAILED...', error.text);
          alert("Oops something went wrong. Please try again or email me directly.");
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section id="contact" className="py-24 bg-background relative border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="contacts" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 font-mono">
              Let's build something <span className="text-neon">amazing</span> together.
            </h3>
            <h4 className="text-sm text-gray-400 mb-4 font-mono">I'll never share your data with anyone else. Pinky promise!</h4>
            
            <div className="p-6 border border-gray-800 bg-[#111] mb-8 hover:border-neon transition-colors">
              <p className="text-gray-400 text-sm mb-2 font-mono">Message me here:</p>
              <a href="mailto:vanshpratapsingh1121@gmail.com" className="text-neon text-lg md:text-xl font-bold hover:underline brak-all">
                vanshpratapsingh1121@gmail.com
              </a>
            </div>

            <div className="flex gap-4">
               {SOCIAL_LINKS.map((link) => (
                 <a 
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-gray-700 text-gray-400 hover:text-neon hover:border-neon hover:shadow-neon transition-all duration-300 rounded-full"
                  aria-label={link.platform}
                 >
                   <link.icon size={20} />
                 </a>
               ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-mono text-gray-400">Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="user_name" 
                  required
                  className="bg-[#111] border border-gray-800 p-3 text-white focus:outline-none focus:border-neon focus:shadow-neon transition-all duration-300"
                  placeholder="Enter your name"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-mono text-gray-400">Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="user_email" 
                  required
                  className="bg-[#111] border border-gray-800 p-3 text-white focus:outline-none focus:border-neon focus:shadow-neon transition-all duration-300"
                  placeholder="abc@example.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-mono text-gray-400">Message</label>
                <textarea 
                  id="message"
                  name="message" 
                  required
                  rows={5}
                  className="bg-[#111] border border-gray-800 p-3 text-white focus:outline-none focus:border-neon focus:shadow-neon transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isLoading}
                className="group w-full md:w-auto px-8 py-3 bg-transparent border border-neon text-neon font-bold font-mono hover:bg-neon hover:text-black hover:shadow-neon transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>Sending... <Loader2 size={18} className="animate-spin" /></>
                ) : (
                  <>Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" /></>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 border-t border-gray-900 pt-8 text-center font-mono text-gray-500 text-sm">
        <p>&copy; Copyright 2025. Made by Vansh Pratap Singh.</p>
      </div>
    </section>
  );
};

export default Contact;