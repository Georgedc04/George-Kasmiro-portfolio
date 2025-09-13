import { useState } from "react";
import BlogDetail from "./BlogDetail";

const blogs = [
  {
    id: 1,
    title: "Harnessing AI for Cybersecurity: Insights from a Keynote at Graphic Era Hill University",
    date: "Sep 8, 2025",
    image: "/blog1.jpg",
    content:
      "This blog presents a detailed overview of a keynote session at Graphic Era Hill University, where the speaker addressed the importance of Artificial Intelligence (AI) in enhancing cybersecurity...",
    insights: [
      "AI-driven Threat Detection",
      "Behavior-based Analysis",
      "Automated Response Systems",
    ],
  },
  {
    id: 2,
    title: "Top 5 Cybersecurity Tips",
    date: "Aug 20, 2025",
    image: "/images/cybersecurity.jpg",
    content:
      "Learn about the top 5 cybersecurity practices that help you secure your online accounts and personal data.",
    insights: [
      "Always use strong and unique passwords.",
      "Enable multi-factor authentication wherever possible.",
      "Keep your software and systems updated.",
    ],
  },
  {
    id: 3,
    title: "React vs Next.js – Which One to Choose?",
    date: "Jul 15, 2025",
    image: "/images/react-vs-next.jpg",
    content:
      "A comparison between React and Next.js, helping you decide which is better suited for your next project.",
    insights: [
      "React offers flexibility but requires manual setup.",
      "Next.js provides built-in routing and SSR for SEO benefits.",
      "Choose based on project complexity and scalability.",
    ],
  },
  {
    id: 4,
    title: "Improving Website SEO in 2025",
    date: "Jun 10, 2025",
    image: "/images/seo.jpg",
    content:
      "Tips and strategies to improve your website’s SEO, ensuring it ranks higher in search engine results.",
    insights: [
      "Focus on Core Web Vitals for better rankings.",
      "AI-powered search will change content strategies.",
      "Mobile-first indexing is more important than ever.",
    ],
  },
];

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState<typeof blogs[0] | null>(null);

  if (selectedBlog) {
    return (
      <div className="w-full min-h-screen bg-gray-900">
        <BlogDetail blog={selectedBlog} onBack={() => setSelectedBlog(null)} />
      </div>
    );
  }

  return (
    <section id="blog" className="w-full py-20 bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Latest Blogs</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              onClick={() => setSelectedBlog(blog)}
              className="cursor-pointer bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 flex flex-col h-full"
            >
              {/* Blog Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="rounded mb-3 w-full h-36 sm:h-40 object-cover"
              />

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-semibold mb-2 line-clamp-2">
                {blog.title}
              </h3>

              {/* Date */}
              <p className="text-xs sm:text-sm text-gray-400 mb-2">{blog.date}</p>

              {/* Content Preview */}
              <p className="text-sm sm:text-base text-gray-300 line-clamp-3 flex-grow">
                {blog.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
