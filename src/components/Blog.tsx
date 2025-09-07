import { useState } from "react";
import BlogDetail from "./BlogDetail";

const blogs = [
  {
    id: 1,
    title: "How to Learn JavaScript in 2025",
    date: "Sep 8, 2025",
    image: "src/assets/images/B1.png",
    content:
      "A detailed guide explaining how to learn JavaScript effectively in 2025, including resources, projects, and tips.",
  },
  {
    id: 2,
    title: "Top 5 Cybersecurity Tips",
    date: "Aug 20, 2025",
    image: "/images/cybersecurity.jpg",
    content:
      "Learn about the top 5 cybersecurity practices that help you secure your online accounts and personal data.",
  },
  {
    id: 3,
    title: "React vs Next.js – Which One to Choose?",
    date: "Jul 15, 2025",
    image: "/images/react-vs-next.jpg",
    content:
      "A comparison between React and Next.js, helping you decide which is better suited for your next project.",
  },
  {
    id: 4,
    title: "Improving Website SEO in 2025",
    date: "Jun 10, 2025",
    image: "/images/seo.jpg",
    content:
      "Tips and strategies to improve your website’s SEO, ensuring it ranks higher in search engine results.",
  },
];

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState<typeof blogs[0] | null>(null);

  if (selectedBlog) {
    return <BlogDetail blog={selectedBlog} onBack={() => setSelectedBlog(null)} />;
  }

  return (
    <section id="blog" className="w-full py-20 bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Latest Blogs</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              onClick={() => setSelectedBlog(blog)}
              className="cursor-pointer bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="rounded mb-4 w-full h-40 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-sm text-gray-400 mb-4">{blog.date}</p>
              <p className="text-base line-clamp-2">{blog.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
