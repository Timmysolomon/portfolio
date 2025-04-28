'use client';

import Link from 'next/link';

export default function Contact() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold text-[#6366f1] mb-6">Contact Me</h1>
      <p className="text-gray-400 mb-8 text-center">
        Want to work together or just say hi? <br /> Email me at: <strong>timmysolomon953@gmail.com</strong>
      </p>

      <Link href="/">
        <button className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition">
          Back to Home
        </button>
      </Link>
    </main>
  );
}
