import fs from "fs";
import path from "path";
import matter from "gray-matter";
import markdownToHtml from "@/lib/markdownToHtml";

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), "posts"));
  return files.map((filename) => ({ slug: filename.replace(".md", "") }));
}

export async function generateMetadata({ params }) {
  const fullPath = path.join(process.cwd(), "posts", `${params.slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(fileContents);
  return { title: `${data.title} | Timilehin Osiyoku Blog` };
}

export default async function BlogPost({ params }) {
  const fullPath = path.join(process.cwd(), "posts", `${params.slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const htmlContent = await markdownToHtml(content);

  return (
    <article className="prose max-w-3xl mx-auto">
      <h1>{data.title}</h1>
      <p className="text-gray-500 text-sm">{data.date}</p>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </article>
  );
}