import FadeIn from '@/components/FadeIn';

export default function Home() {
  return (
    <section className="text-white bg-[#0f0f0f] py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <FadeIn>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Timilehin Osiyoku
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Web Developer • UI Engineer • AI Explorer
            <br className="hidden sm:block" />
            I build bold, fast, and scalable web apps that solve real problems.
          </p>
        </FadeIn>
        <FadeIn delay={0.4}>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/projects" className="inline-block px-6 py-3 bg-[#b08968] text-black font-semibold rounded hover:bg-[#a17857] transition">
              See My Work
            </a>
            <a href="/contact" className="inline-block px-6 py-3 border border-[#b08968] text-[#b08968] font-semibold rounded hover:bg-[#b08968] hover:text-black transition">
              Let's Connect
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
