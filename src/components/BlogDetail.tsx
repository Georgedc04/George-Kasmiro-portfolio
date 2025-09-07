import React from "react";

type BlogDetailProps = {
  blog: {
    id: number;
    title: string;
    date: string;
    image: string;
    content: string;
  } | null;
  onBack: () => void;
};

const BlogDetail: React.FC<BlogDetailProps> = ({ blog, onBack }) => {
  if (!blog) return null;

  return (
    <div className="w-full py-20 bg-gray-900 text-gray-300 min-h-screen">
      <div className="max-w-3xl mx-auto px-4">
        <button
          onClick={onBack}
          className="mb-4 px-4 py-2 bg-designColor/80 hover:bg-designColor rounded text-white"
        >
          ← Back to Blogs
        </button>

        <h2 className="text-3xl font-bold mb-4">{blog.title}</h2>
        <p className="text-sm text-gray-400 mb-4">{blog.date}</p>
        {blog.image && (
          <img
            src={blog.image}
            alt={blog.title}
            className="rounded mb-4 w-full object-cover"
          />
        )}
        <p className="text-base">{blog.content}</p>
      </div>
    </div>
  );
};

export default BlogDetail;
