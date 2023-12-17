import React from 'react';
import { Hero } from "@/components/ui/Hero";
import { Works } from '@/components/ui/Works';
import { Blogs } from '@/components/ui/Blogs';
import {Testimony} from '@/components/ui/Testimony';
/**
 * Home component - Renders the home page.
 * Includes Hero, Works and Blogs components.
 */
export const Home: React.FC = () => {
  return (
    <section className="bg-[#0B1121] h-scree">
      <Hero />
      <Works />
      <Blogs />
      <Testimony />
    </section>
  );
};