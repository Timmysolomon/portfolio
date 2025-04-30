'use client';
import FadeIn from '@/components/FadeIn';

export default function Contact() {
  return (
    <section className="bg-[#0f0f0f] text-white min-h-screen py-20 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <h1 className="text-3xl sm:text-4xl font-bold mb-8">Contact Me</h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm mb-1 text-gray-300">Name</label>
              <input type="text" id="name" name="name" required className="w-full bg-[#1a1a1a] border border-gray-700 p-3 rounded text-white" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm mb-1 text-gray-300">Email</label>
              <input type="email" id="email" name="email" required className="w-full bg-[#1a1a1a] border border-gray-700 p-3 rounded text-white" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm mb-1 text-gray-300">Message</label>
              <textarea id="message" name="message" rows="5" required className="w-full bg-[#1a1a1a] border border-gray-700 p-3 rounded text-white"></textarea>
            </div>
            <button type="submit" className="w-full sm:w-auto px-6 py-3 bg-[#b08968] text-black font-semibold rounded hover:bg-[#a17857] transition">
              Send Message
            </button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
