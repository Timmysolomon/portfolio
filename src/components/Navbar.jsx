'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#0f0f0f] text-white sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold">Timilehin</Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact" className="border px-4 py-1 rounded border-[#b08968] hover:bg-[#b08968] hover:text-black transition">Contact</Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden flex flex-col bg-[#0f0f0f] px-6 pb-4 space-y-4 text-sm">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="border px-4 py-2 rounded border-[#b08968] hover:bg-[#b08968] hover:text-black transition">Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
