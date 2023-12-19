/**
 * Testimony component displays a carousel of client testimonial cards.
 *
 * Imports the HorizontalScrollCarousel component and defines a cards array
 * with testimonial data to pass to it. Renders a page section with heading
 * and the carousel component.
 */
import { HorizontalScrollCarousel } from "@/components/ui/HorizontalScrollCarousel";
import { testimonyCards } from "@/testimonyData";

export const Testimony: React.FunctionComponent = () => {
  // Render the testimonial cards in a carousel component.
  return (
    <main className=" border-2 mt-[12rem] mb-[20rem]  md:mt-[8.75rem]">
      {/* Heading for the testimonials section. */}
      <div className="">
        <HorizontalScrollCarousel cards={testimonyCards} />
      </div>
    </main>
  );
};
