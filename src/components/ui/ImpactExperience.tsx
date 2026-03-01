import React from "react";
import { motion } from "framer-motion";
import { experienceData } from "@/experienceData";

export const ImpactExperience: React.FC = () => {
  return (
    <section className="py-[5rem] md:py-[8.75rem]">
      <div className="w-[85%] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-[4rem]"
        >
          <h1 className="capitalize montserrat text-center text-[1.5rem] md:text-[2.25rem] font-black leading-normal text-[#fff] my-[1.38rem] md:my-[1rem]">
            Impact & Experience
          </h1>
          <p className="text-[#aaa] text-[0.875rem] md:text-[1rem] mt-[0.75rem] sub-intro max-w-2xl mx-auto">
            My professional journey and the measurable impact I've delivered at various organizations.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-12">
          {experienceData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-[#111827] border border-white/5 p-6 md:p-10 rounded-3xl hover:border-blue-500/30 transition-all duration-300"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl -z-10" />

              <div className="flex flex-col lg:flex-row gap-8 lg:items-start lg:justify-between">
                {/* Left Side: Logo and Company Info */}
                <div className="flex items-center gap-6 lg:w-1/3">
                  <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-white/5 rounded-2xl p-3 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-colors duration-300">
                    <img 
                      src={item.logo} 
                      alt={item.company} 
                      className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white montserrat group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="gradient-text font-bold text-lg">{item.company}</p>
                    <span className="inline-block mt-2 text-gray-500 text-xs font-mono bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                      {item.date}
                    </span>
                  </div>
                </div>

                {/* Right Side: Description and Impact */}
                <div className="lg:w-2/3">
                  <p className="text-gray-300 Poppins text-sm md:text-base leading-relaxed mb-6 italic border-l-2 border-blue-500/50 pl-4">
                    "{item.description}"
                  </p>

                  <div className="space-y-4 mb-8">
                    <h4 className="text-white text-sm font-bold montserrat uppercase tracking-wider">Key Impact</h4>
                    <ul className="space-y-3">
                      {item.impact?.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed Poppins">
                          <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-blue-500 flex-shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {item.skills?.map((skill, i) => (
                      <span
                        key={i}
                        className="text-[0.65rem] md:text-[0.75rem] font-medium text-gray-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg group-hover:border-blue-500/20 group-hover:bg-blue-500/5 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
