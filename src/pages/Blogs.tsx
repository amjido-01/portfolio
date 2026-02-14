import React from "react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { BlogCard } from "@/components/ui/BlogCard";
import { blogCardData } from "@/blogCardData";
import { motion } from "framer-motion";

export const Blogs: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0B1121] overflow-x-hidden">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 md:px-8 pt-32 pb-20">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white montserrat mb-4"
          >
            Insights & <span className="text-blue-500">Articles</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 Poppins text-lg max-w-2xl mx-auto"
          >
            Thoughts on frontend development, design systems, and the future of
            web technology.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogCardData.map((blog) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              title={blog.title}
              content={blog.content}
              src={blog.pic}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};
