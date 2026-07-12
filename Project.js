import React from 'react';

// Project Data - Easy to update in one place
const projects = [
  {
    title: "Brand Identity 2026",
    category: "Visual Design / Web",
    preview: "Project One Preview"
  }
  {
    title: "SaaS Dashboard",
    category: "Development / UI",
    preview: "Project Two Preview"
  }
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-[#f8fafc] font-sans antialiased">
      
      {/* Navigation */}
      <nav className="max-w-5xl mx-auto px-6 py-8 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tighter uppercase">Ngentina.</div>
        <div className="space-x-6 text-sm text-slate-400">
          <a href="#work" className="hover:text-white transition">Work</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="mailto:hello@example.com" className="hover:text-white transition">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-5xl mx-auto px-6 py-24">
        <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight leading-none">
          Building digital <br /> 
          <span className="text-slate-500 italic">experiences.</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-lg leading-relaxed">
          I'm a designer and developer focused on creating clean, functional, and user-centric interfaces.
        </p>
      </header>

      {/* Projects Grid */}
      <section id="work" className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-12">Selected Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 aspect-video rounded-3xl mb-6 overflow-hidden flex items-center justify-center transition-all duration-500 group-hover:border-white/20">
                <span className="text-slate-600 group-hover:scale-110 transition duration-500 font-medium">
                  {project.preview}
                </span>
              </div>
              <h3 className="text-2xl font-semibold mb-1">{project.title}</h3>
              <p className="text-slate-500 text-sm">{project.category}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-6 py-24 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-slate-500 text-sm">© 2026 Your Name. Built with React & Tailwind.</p>
        <div className="flex space-x-6">
          {['Twitter', 'GitHub', 'LinkedIn'].map((link) => (
            <a key={link} href="#" className="text-slate-400 hover:text-white text-sm transition">
              {link}
            </a>
          ))}
        </div>
      </footer>

    </div>
  );
};

export default Portfolio;