'use client';

import Link from 'next/link';

const projects = [
  {
    title: 'PixelPrompt',
    description: 'Futuristic AI pixel art generator with full dark mode, API integration, and modern UI.',
    image: '/images/pixelprompt.png',
    url: 'https://pixelprompt-one.vercel.app/',
  },
  {
    title: 'Recipe Finder',
    description: 'Find delicious recipes by searching ingredients. Clean UI and simple functionality.',
    image: '/images/recipe-finder.png',
    url: 'https://timmysolomon.github.io/recipe-finder/',
  },
  {
    title: 'Weather App',
    description: 'Live weather updates by city. Responsive and easy to use.',
    image: '/images/weather-app.png',
    url: 'https://timmysolomon.github.io/weather-app/',
  },
  {
    title: 'To-Do List',
    description: 'Manage daily tasks easily. Basic beginner project.',
    image: '/images/to-do-list.png',
    url: 'https://timmysolomon.github.io/to-do-list/',
  },
];

export default function Projects() {
  return (
    <main className="p-8 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-[#6366f1] mb-10">My Projects</h1>
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div key={index} className="bg-[#111111] p-6 rounded-lg shadow-lg hover:shadow-blue-500/30 transition duration-500 animate-fade-in">
            <img src={project.image} alt={project.title} className="rounded mb-4" />
            <h2 className="text-2xl font-semibold text-white mb-2">{project.title}</h2>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-6 py-2 bg-[#6366f1] text-white rounded-lg hover:bg-[#4338ca] transition"
            >
              View Live
            </a>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link href="/">
          <button className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition">
            Back to Home
          </button>
        </Link>
      </div>
    </main>
  );
}
