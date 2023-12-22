import React from 'react';
import { Hero } from "@/components/ui/Hero";
import { Works } from '@/components/ui/Works';
import { Blogs } from '@/components/ui/Blogs';
import {Testimony} from '@/components/ui/Testimony';
import { Organizations } from '@/components/ui/Organizations';
import kust from '@/assets/kust.png'
import gdsc from '@/assets/gdsc.png'
import stem from '@/assets/stem.png'
import bench from '@/assets/bench.png'

const logos = [ 
    kust,
    gdsc,
    stem,
    bench,
]
export const Home: React.FC = () => {
  return (
    <section className="bg-[#0B1121] h-scree">
      <Hero />
      <Works />
      <Blogs />
      <Testimony />
      <Organizations direction='right' logos={logos}/>
      <Organizations direction='left' logos={logos}/>
      {/* <RightMarqueeSlider logos={logos} /> */}
    </section>
  );
};