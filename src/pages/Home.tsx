import React from 'react';
import { Hero } from "@/components/ui/Hero"
// import { Me } from '@/components/ui/Me';
export const Home: React.FC = () => {
  return (
    <section
    className="bg-[#0B1121] h-scree">
      <Hero />
      {/* <Me /> */}
      <div className='h-screen'></div>
    </section>
  );
};