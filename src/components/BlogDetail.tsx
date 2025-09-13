import React, { useEffect } from "react";
import { FaCalendarAlt, FaUserEdit } from "react-icons/fa";

type Blog = {
  id: number;
  title: string;
  date: string;
  image: string;
  content: string;
  insights?: string[]; // ✅ added insights array
  author?: string;
  authorRole?: string;
  authorImage?: string;
};

type BlogDetailProps = {
  blog: Blog | null;
  onBack: () => void;
};

const BlogDetail: React.FC<BlogDetailProps> = ({ blog, onBack }) => {
  // 🚀 Prevent background scroll while detail is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!blog) return null;

  return (
    <div className="fixed inset-0 w-full h-full bg-gray-900 text-gray-300 overflow-y-auto z-50">
      <div className="max-w-3xl mx-auto px-4 py-20">
        {/* Back button */}
        <button
          onClick={onBack}
          className="mb-8 px-3 py-1 bg-designColor/80 hover:bg-designColor rounded text-white transition-colors"
        >
          ← Back to Blogs
        </button>

        {/* Blog Header */}
        <header className="mb-6">
          <h1 className="text-4xl font-bold mb-3 text-white">{blog.title}</h1>
          <div className="flex items-center gap-4 text-sm text-gray-400">
          <span className="flex items-center gap-1">
            <FaCalendarAlt className="text-designColor" /> {blog.date}
          </span>
          <span className="flex items-center gap-1">
            <FaUserEdit className="text-designColor" /> {blog.author || "George Kasmiro"}
          </span>
        </div>
        </header>

        {/* Blog Image */}
        {blog.image && (
          <figure className="mb-6">
            <img
              src={blog.image}
              alt={blog.title}
              className="rounded-lg w-full object-cover shadow-lg"
            />
            <figcaption className="text-xs text-gray-500 mt-2">
              {blog.title}
            </figcaption>
          </figure>
        )}

        {/* Blog Content */}
        <article className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="mb-6 leading-relaxed">{blog.content}</p>

          <blockquote className="border-l-4 border-designColor pl-4 italic text-gray-400 my-6">
            “The Future of Cybersecurity with AI.”
          </blockquote>

          {/* ✅ Dynamic Insights */}
          {blog.insights && blog.insights.length > 0 && (
            <>
              <h2 className="text-2xl font-semibold mb-4">Key Insights</h2>
              <ul className="list-disc pl-6 space-y-4 text-gray-300">
                {blog.insights.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </>
          )}
        </article>

        {/* Author Section */}
        <div className="mt-12 p-6 bg-gray-800 rounded-lg shadow-md flex items-center gap-4">
          <img
            src={blog.authorImage || "/favicon.ico"}
            alt={blog.author || "George Kasmiro"}
            className="w-16 h-16 rounded-full object-cover border-2 border-designColor/80 hover:border-designColor"
          />
          <div>
            <h3 className="font-semibold text-lg">
              {blog.author || "George Kasmiro"}
            </h3>
            <p className="text-sm text-gray-400">
              {blog.authorRole || "Computer Science Engineer & Ethical Hacker"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
