import React from 'react';
import { Menu } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-xl font-bold">
            TUSHAR'S PORTFOLIO
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#about">ABOUT</NavLink>
            <NavLink href="#experience">EXPERIENCE</NavLink>
            <NavLink href="#projects">PROJECTS</NavLink>
            <NavLink href="#skills">SKILLS</NavLink>
            <NavLink href="#education">EDUCATION</NavLink>
            <NavLink href="#reference">REFERENCE</NavLink>
            <NavLink href="#contact">CONTACT</NavLink>
            <ThemeToggle />
          </div>

          <button className="md:hidden p-2">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
  >
    {children}
  </a>
);