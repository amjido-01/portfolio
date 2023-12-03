import React from 'react';
import { Hero } from "@/components/ui/Hero"
import { Me } from '@/components/ui/Me';
export const Home: React.FC = () => {
  return (
    <div
    className="bg-[#0B1121] h-screen">
      <Hero />
      {/* <Me /> */}
    </div>
  );
};