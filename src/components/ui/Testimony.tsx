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
    <main className="mt-[2.94rem] md:mt-[6.88rem] mb-[20rem]">
      {/* Heading for the testimonials section. */}
      <div className="">
        { /* horizontal scroll carousel component that displays testimonial cards and receives props from testimonyData.ts */ }
        <HorizontalScrollCarousel cards={testimonyCards} />
      </div>
    </main>
  );
};
