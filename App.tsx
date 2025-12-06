import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="bg-background text-textMain min-h-screen selection:bg-neon selection:text-black relative">
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      
      {/* Global Background Decoration (Subtle Grid) */}
      <div className="fixed inset-0 z-[-1] opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>
    </div>
  );
};

export default App;