import React from 'react';
import { Hero } from "@/components/ui/Hero";
import { Works } from '@/components/ui/Works';
import { Tools } from '@/components/ui/Tools';
import { ImpactExperience } from '@/components/ui/ImpactExperience';
// import { Blogs } from '@/components/ui/Blogs';
import {Testimony} from '@/components/ui/Testimony';
import { Slides } from '@/components/ui/Slides';
import { Contact } from '@/components/ui/Contact';
import { Footer } from '@/components/ui/Footer';
import {BlogSlides} from '@/components/ui/BlogSlides'
export const Home: React.FC = () => {
  return (
    <section className="bg-[#0B1121]">
      <Hero />
      <Works />
      <Tools />
      <ImpactExperience />
      {/* <Blogs /> */}
      <BlogSlides />
      <Testimony />
      <Slides />
      <Contact />
      <Footer />
    </section>
  );
};