import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "Blog | Timilehin Osiyoku",
};

export default function Blog() {
  const posts = getSortedPostsData();

  return (
    <section className="bg-[#0f0f0f] text-white min-h-screen py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h1 className="text-3xl sm:text-4xl font-bold mb-10 text-center">Blog</h1>
        </FadeIn>
        <div className="space-y-10">
          {posts.map(({ id, date, title, summary }, index) => (
            <FadeIn key={id} delay={index * 0.1}>
              <article className="bg-[#1a1a1a] p-5 sm:p-6 rounded-xl shadow-md hover:scale-[1.01] transition">
                <Link href={`/blog/${id}`} className="text-xl sm:text-2xl font-semibold text-[#b08968] hover:underline">
                  {title}
                </Link>
                <p className="text-gray-400 mt-2 text-sm">{date}</p>
                <p className="text-gray-300 mt-3 text-sm sm:text-base">{summary}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}