'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-5xl font-bold text-[#6366f1] mb-6 animate-fade-in">Timilehin Osiyoku</h1>
      <p className="text-gray-400 text-lg mb-10 text-center max-w-2xl animate-fade-in">
        Creative Frontend Developer focused on building beautiful, responsive applications.
      </p>

      <div className="flex gap-6">
        <Link href="/projects">
          <button className="px-6 py-3 bg-[#6366f1] text-white rounded-lg hover:bg-[#4338ca] transition">
            View Projects
          </button>
        </Link>
        <Link href="/contact">
          <button className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition">
            Contact Me
          </button>
        </Link>
      </div>

      <footer className="mt-12 text-gray-500 text-sm">
        © 2025 Timilehin Osiyoku
      </footer>
    </main>
  );
}
