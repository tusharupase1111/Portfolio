import React from 'react';
import { Github, Linkedin, Mail, Download, Instagram } from 'lucide-react';
import { AnimatedTitle } from './AnimatedTitle';

export const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-16">
      <div className="text-center">
        <div className="mb-8">
          <img
            src="https://avatars.githubusercontent.com/tusharupase258"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto border-4 border-emerald-500 dark:border-emerald-400"
          />
        </div>
        
        <h1 className="text-5xl font-bold mb-4">Tushar Upase</h1>
        <AnimatedTitle />
        
        <div className="flex justify-center gap-4 mb-8">
          <SocialButton href="mailto:your.email@example.com" icon={<Mail />} />
          <SocialButton href="https://github.com/tusharupase258" icon={<Github />} />
          <SocialButton href="https://instagram.com/tusharupase258" icon={<Instagram />} />
          <SocialButton href="https://linkedin.com/in/your-profile" icon={<Linkedin />} />
        </div>

        <div className="flex justify-center gap-6">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-medium transition-colors">
            Hire Me
          </button>
          <button className="bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 px-8 py-3 rounded-full font-medium transition-colors flex items-center gap-2">
            <Download className="w-5 h-5" />
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

const SocialButton = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-emerald-100 dark:hover:bg-emerald-900 transition-colors"
  >
    {icon}
  </a>
);