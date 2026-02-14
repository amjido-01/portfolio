import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectInfor } from "@/ProjectInfor";
import { ProjectCard } from "@/components/ui/ProjectCard"; // Ensure this path is correct
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/ui/Navbar";

export const Projects: React.FC = () => {
  // Extract unique categories for filter
  const categories = useMemo(() => {
    const allCats = ProjectInfor.map((p) => p.category || "All");
    return ["All", ...Array.from(new Set(allCats))];
  }, []);

  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return ProjectInfor;
    return ProjectInfor.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="min-h-screen bg-[#0B1121] pt-[8rem] pb-[4rem] px-4 md:px-8">
      <Navbar />
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-white montserrat mb-4"
          >
            All Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 Poppins max-w-2xl mx-auto"
          >
            Explore a collection of my recent work, ranging from web
            applications to AI integrations.
          </motion.p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrapjustify-center gap-4 mb-12 overflow-x-auto pb-4">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={activeFilter === cat ? "default" : "secondary"} // You might need to adjust variants based on your button component
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2 rounded-full transition-all duration-300 whitespace-nowrap ${
                activeFilter === cat
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                index={index}
                title={project.title}
                description={project.description}
                img={project.img}
                hash={project.hash}
                technologies={project.technologies || []}
                route={project.route}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center text-gray-500 mt-20">
            <p>No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};
