import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Background } from './components/Background';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <Background />
      <Navbar />
      <Hero />
      
      <main className="container mx-auto px-4 py-16">
        <section id="about" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          {/* Content will be added */}
        </section>

        <section id="experience" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          {/* Content will be added */}
        </section>

        <section id="projects" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          {/* Content will be added */}
        </section>

        <section id="skills" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          {/* Content will be added */}
        </section>

        <section id="education" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          {/* Content will be added */}
        </section>

        <section id="reference" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Reference</h2>
          {/* Content will be added */}
        </section>

        <section id="contact" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Contact</h2>
          {/* Content will be added */}
        </section>
      </main>
    </div>
  );
}

export default App;