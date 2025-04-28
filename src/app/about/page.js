'use client';

import Link from 'next/link';

export default function About() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold text-[#6366f1] mb-6">About Me</h1>
      <p className="text-gray-400 max-w-2xl text-center mb-8">
        I'm a passionate Frontend Developer who loves crafting beautiful and user-friendly websites.
        I focus on modern technologies like Next.js, TailwindCSS, and integrating real-world APIs.
        Let's build something amazing together.
      </p>

      <Link href="/">
        <button className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition">
          Back to Home
        </button>
      </Link>
    </main>
  );
}
