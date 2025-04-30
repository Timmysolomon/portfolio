'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 sticky top-0 z-50 dark:bg-neutral-900">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-2xl font-bold text-brown-800 dark:text-white">MindScribe</span>
        </Link>
        <div className="flex gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-brown-600 dark:hover:text-brown-300">Home</Link>
          <Link href="/blog" className="hover:text-brown-600 dark:hover:text-brown-300">Blog</Link>
          <Link href="/about" className="hover:text-brown-600 dark:hover:text-brown-300">About</Link>
          <Link href="/contact" className="hover:text-brown-600 dark:hover:text-brown-300">Contact</Link>
          <Link href="/projects" className="hover:text-brown-600 dark:hover:text-brown-300">Projects</Link>
        </div>
      </div>
    </nav>
  );
}
