import Image from 'next/image';
import FadeIn from "@/components/FadeIn";

const projects = [
  {
    title: "MindScribe",
    description: "A cozy and professional space for deep thoughts and blogs.",
    image: "/projects/mindscribe.png",
    link: "https://mindscribe-liart.vercel.app/"
  },
  {
    title: "PixelPrompt",
    description: "AI-powered pixel art generator for game developers.",
    image: "/projects/pixelprompt.png",
    link: "https://pixelprompt-one.vercel.app/"
  },
  {
    title: "WeatherGlow",
    description: "Live weather info with a minimal and glowing interface.",
    image: "/projects/weatherglow.png",
    link: "https://weatherglow.vercel.app/"
  },
  {
    title: "NoteNest",
    description: "Organize your thoughts effortlessly with clean UI.",
    image: "/projects/notenest.png",
    link: "https://notenest-six.vercel.app/"
  },
  {
    title: "TaskFlow",
    description: "Simple and stylish daily task tracker.",
    image: "/projects/taskflow.png",
    link: "https://taskflow-opal-delta.vercel.app/"
  },
  {
    title: "RecipeFinder",
    description: "Search and discover recipes with ease.",
    image: "/projects/recipefinderpro.png",
    link: "https://recipefinder-pro-1o7m.vercel.app/"
  }
];

export default function Projects() {
  return (
    <section className="bg-[#0f0f0f] text-white py-24 px-4 sm:px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h1 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
            Featured Projects
          </h1>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.1}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1a1a1a] rounded-xl shadow-lg hover:scale-[1.02] transition overflow-hidden"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  loading="lazy"
                  className="w-full h-48 sm:h-52 md:h-56 object-cover"
                />
                <div className="p-4 sm:p-5">
                  <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {project.description}
                  </p>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
