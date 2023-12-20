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

// The props interface for the HorizontalScrollCarousel component.
interface CarouselProps {
  cards: {
    id: number;
    title: string;
    name: string;
    pic: string;
    content: string;
    alt: string
  }[];
}


export const HorizontalScrollCarousel: React.FunctionComponent<CarouselProps> = ({ cards }) => {
  // Create a reference to the main container element.
  const targetRef = useRef(null);
  // Use the useScroll hook to track scroll progress on the container.
  const { scrollYProgress } = useScroll({ target: targetRef });
  // Use the useTransform hook to map the scroll progress to a CSS transform value.
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  // Render the cards in a flex container with horizontal scrolling overflow.
  return (
    <main
      ref={targetRef}
      className="testimony relative h-[150vh] md:h-[150vh]"
    >
      <div className="sticky top-0 flex items-center h-screen overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {/* Render the cards in a carousel component. */}
          {cards.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </motion.div>
      </div>
    </main>
  );
};
