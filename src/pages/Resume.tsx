import React from "react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Button } from "@/components/ui/button";
import { experienceData, skillsData } from "@/experienceData";
import { motion } from "framer-motion";

export const Resume: React.FC = () => {
  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#0B1121] overflow-x-hidden print:bg-white print:text-black">
      <div className="print:hidden">
        <Navbar />
      </div>

      <main className="max-w-4xl mx-auto px-4 md:px-8 pt-32 pb-20 print:pt-0 print:pb-0">
        {/* Header / Actions */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 print:hidden">
          <div>
            <h1 className="text-4xl font-bold text-white montserrat">
              My Resume
            </h1>
            <p className="text-gray-400 mt-2">
              Full Stack Developer & UI/UX Enthusiast
            </p>
          </div>
          <Button
            onClick={handleDownload}
            className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg"
          >
            Download / Print PDF
          </Button>
        </div>

        {/* Resume Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#111827] p-8 md:p-12 rounded-2xl border border-gray-800 shadow-2xl print:shadow-none print:border-none print:bg-white print:p-0 print:text-black"
        >
          {/* Resume Header */}
          <header className="border-b border-gray-700 pb-8 mb-8 print:border-gray-300">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 montserrat print:text-black">
              Ala jido
            </h1>
            <p className="text-xl text-blue-500 font-medium mb-4 print:text-blue-700">
              Senior Frontend Developer
            </p>
            <div className="flex flex-wrap gap-4 text-gray-400 text-sm print:text-gray-600">
              <span>📍 Remote / Worldwide</span>
              <span>📧 alajido@example.com</span>
              <span>🔗 portfolio.com</span>
            </div>
          </header>

          {/* Summary */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 montserrat flex items-center gap-2 print:text-black">
              <span className="w-2 h-8 bg-blue-500 rounded-full inline-block"></span>
              Profile
            </h2>
            <p className="text-gray-300 Poppins leading-relaxed print:text-gray-800">
              Computer scientist with 5 years of experience crafting
              user-centric interfaces. Specializing in React ecosystem,
              accessibility, and modern design systems. Passionate about
              bridging the gap between design and engineering to build scalable,
              high-performance web applications.
            </p>
          </section>

          {/* Experience */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 montserrat flex items-center gap-2 print:text-black">
              <span className="w-2 h-8 bg-blue-500 rounded-full inline-block"></span>
              Experience
            </h2>
            <div className="space-y-8">
              {experienceData.map((job) => (
                <div
                  key={job.id}
                  className="relative pl-4 border-l-2 border-gray-700 print:border-gray-300"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                    <h3 className="text-xl font-bold text-white print:text-black">
                      {job.title}
                    </h3>
                    <span className="text-blue-400 font-mono text-sm print:text-blue-700">
                      {job.date}
                    </span>
                  </div>
                  <p className="text-gray-400 font-medium mb-2 print:text-gray-600">
                    {job.company}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-3 print:text-gray-800">
                    {job.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {job.skills?.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded print:bg-gray-200 print:text-black print:border print:border-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 montserrat flex items-center gap-2 print:text-black">
              <span className="w-2 h-8 bg-blue-500 rounded-full inline-block"></span>
              Skills
            </h2>
            <div className="flex flex-wrap gap-3">
              {skillsData.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gray-800 text-gray-200 rounded-lg font-medium border border-gray-700 print:bg-white print:text-black print:border-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Education (Static for now) */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 montserrat flex items-center gap-2 print:text-black">
              <span className="w-2 h-8 bg-blue-500 rounded-full inline-block"></span>
              Education
            </h2>
            <div className="pl-4 border-l-2 border-gray-700 print:border-gray-300">
              <h3 className="text-xl font-bold text-white print:text-black">
                Bachelor of Computer Science
              </h3>
              <p className="text-gray-400 print:text-gray-600">
                University of Technology
              </p>
              <p className="text-gray-500 text-sm print:text-gray-500">
                2016 - 2020
              </p>
            </div>
          </section>
        </motion.div>
      </main>

      <div className="print:hidden">
        <Footer />
      </div>
    </div>
  );
};
