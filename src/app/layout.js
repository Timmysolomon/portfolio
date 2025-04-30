import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export const metadata = {
  title: "Timilehin Osiyoku | Web Developer & Portfolio",
  description: "Timilehin Osiyoku is a frontend web developer who builds sleek, fast, and impactful digital experiences using React, Next.js, and modern tools.",
  keywords: ["Timilehin Osiyoku", "Web Developer", "Frontend Developer", "Portfolio", "React", "Next.js", "JavaScript", "Tailwind CSS"],
  authors: [{ name: "Timilehin Osiyoku", url: "https://portfolio-snowy-eight-55.vercel.app/" }],
  openGraph: {
    title: "Timilehin Osiyoku | Developer Portfolio",
    description: "Explore the work, projects, and vision of Timilehin Osiyoku — a frontend developer passionate about turning ideas into clean, interactive web experiences.",
    url: "https://portfolio-snowy-eight-55.vercel.app/",
    siteName: "Timilehin Osiyoku Portfolio",
    images: [
      {
        url: "/projects/pixelprompt.png",
        width: 1200,
        height: 630,
        alt: "Timilehin Osiyoku Portfolio Preview",
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Timilehin Osiyoku Portfolio",
    description: "Frontend web developer portfolio powered by React and Next.js.",
    images: ["/projects/pixelprompt.png"],
    creator: "@timilehinosiyoku"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0f0f0f] text-white">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
