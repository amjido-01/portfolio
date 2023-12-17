// HorizontalScrollCarousel.jsx

import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { Card } from "@/components/ui/Card";

export const HorizontalScrollCarousel = ({ cards }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <main ref={targetRef} className="relative border-2 h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4 border-2">
          {cards.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </motion.div>
      </div>
    </main>
  );
};