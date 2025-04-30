'use client';

export default function ContactPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 bg-[#fefcf9] dark:bg-[#0a0a0a] animate-fade-in">
      <h1 className="text-4xl font-bold mb-4 text-brown-800 dark:text-white">Contact</h1>
      <p className="text-neutral-700 dark:text-neutral-300 max-w-2xl">
        Want to collaborate, give feedback, or just say hello?  
        Reach out via email at <span className="underline">timmysolomon953@gmail.com</span>.
      </p>
    </section>
  );
}
