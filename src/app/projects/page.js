'use client';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: 'PixelPrompt',
    description: 'AI-powered pixel art generator with Replicate API.',
    link: 'https://timmysolomon.github.io/pixelprompt/',
    image: '/images/pixelprompt.png',
  },
  {
    title: 'WeatherGlow',
    description: 'Real-time weather insights with a clean UI.',
    link: 'https://timmysolomon.github.io/weatherglow/',
    image: '/images/weatherglow.png',
  },
  {
    title: 'RecipeFinder Pro',
    description: 'Search meals via Spoonacular API with a cozy UI.',
    link: 'https://timmysolomon.github.io/recipefinder-pro/',
    image: '/images/recipefinder.png',
  },
  {
    title: 'NoteNest',
    description: 'Professional note-taking interface with local state.',
    link: 'https://timmysolomon.github.io/notenest/',
    image: '/images/notenest.png',
  },
  {
    title: 'TaskFlow',
    description: 'A modern to-do app redesigned for productivity.',
    link: 'https://timmysolomon.github.io/taskflow/',
    image: '/images/taskflow.png',
  },
  {
    title: 'MindScribe',
    description: 'Blog platform for cozy writing and deep thoughts.',
    link: 'https://timmysolomon.github.io/mindscribe/',
    image: '/images/mindscribe.png',
  },
];

export default function Projects() {
  return (
    <main className="p-8 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-[#6366f1] mb-10">My Projects</h1>
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#111111] p-6 rounded-lg shadow-lg hover:shadow-blue-500/30 transition duration-500 animate-fade-in"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={300}
              className="rounded mb-4"
            />
            <h2 className="text-2xl font-semibold text-white mb-2">{project.title}</h2>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <a
              href={project.link}
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
