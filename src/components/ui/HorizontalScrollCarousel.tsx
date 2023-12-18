/**
 * HorizontalScrollCarousel component displays cards in a horizontally scrolling carousel.
 * It uses React refs, Framer Motion, and React hooks to create a sticky scrolling effect.
 *
 * The component takes in an array of card data objects as props,
 * and renders a Card component for each one.
 *
 * It uses useRef to create a reference to the main container element.
 *
 * useScroll hook tracks scroll progress on the container.
 *
 * useTransform maps the scroll progress to a CSS transform value to smoothly scroll the cards.
 *
 * The cards are rendered in a flex container with horizontal scrolling overflow.
 */
import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { Card } from "@/components/ui/Card";

export const HorizontalScrollCarousel = ({ cards }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <main
      ref={targetRef}
      className="relative border-2 h-[300vh] bg-neutral-900"
    >
      <div className="sticky top-0 flex items-center h-screen overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4 border-2">
          {cards.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </motion.div>
      </div>
    </main>
  );
};
