import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "About | Timilehin Osiyoku",
};

export default function About() {
  return (
    <section className="bg-[#0f0f0f] text-white min-h-screen py-24 px-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <FadeIn>
          <h1 className="text-4xl font-bold">About Me</h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-gray-300">
            I'm Timilehin Osiyoku, a passionate web developer and tech enthusiast dedicated to crafting clean, functional, and impactful digital experiences. I enjoy building user-centric products, exploring AI tools, and collaborating on creative ideas.
          </p>
        </FadeIn>
        <FadeIn delay={0.4}>
          <p className="text-gray-300">
            I specialize in front-end development using React and Next.js and love solving problems through code. Outside of tech, I value deep connections, self-growth, and shared moments with people like Benita, who inspire me daily.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
