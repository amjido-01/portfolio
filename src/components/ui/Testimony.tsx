/**
 * Testimony component displays a carousel of client testimonial cards.
 *
 * Imports the HorizontalScrollCarousel component and defines a cards array
 * with testimonial data to pass to it. Renders a page section with heading
 * and the carousel component.
 */
import { HorizontalScrollCarousel } from "@/components/ui/HorizontalScrollCarousel";
const cards = [
  {
    url: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8dGVjaG5vbG9neXx8fHx8fDE3MDA2NjQxNDM&ixlib=rb-4.0.3&q=80&w=1080",
    title: "Title 1",
    id: 1,
  },
  {
    url: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8dGVjaG5vbG9neXx8fHx8fDE3MDA2NjQxNDM&ixlib=rb-4.0.3&q=80&w=1080",
    title: "Title 2",
    id: 2,
  },
  {
    url: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8dGVjaG5vbG9neXx8fHx8fDE3MDA2NjQxNDM&ixlib=rb-4.0.3&q=80&w=1080",
    title: "Title 3",
    id: 3,
  },
  {
    url: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVvcGxlfHx8fHx8MTcwMDY2NDE2Nw&ixlib=rb-4.0.3&q=80&w=1080",
    title: "Title 4",
    id: 4,
  },
  {
    url: "https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Zm9vZHx8fHx8fDE3MDA2NjQxOTQ&ixlib=rb-4.0.3&q=80&w=1080",
    title: "Title 5",
    id: 5,
  },
  {
    url: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVvcGxlfHx8fHx8MTcwMDY2NDE2Nw&ixlib=rb-4.0.3&q=80&w=1080",
    title: "Title 6",
    id: 6,
  },
  {
    url: "https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Zm9vZHx8fHx8fDE3MDA2NjQxOTQ&ixlib=rb-4.0.3&q=80&w=1080",
    title: "Title 7",
    id: 7,
  },
];

export const Testimony: React.FunctionComponent = () => {
  return (
    <main className="bg-neutral-800 mt-[12rem] md:mt-[8.75rem]">
      <div className="">
        <h1 className="montserrat text-[#fff] text-center text-[1.5rem] md:text-[2.25rem] font-black leading-normal capitalize my-[1.38rem] md:my-[4rem]">
          Clients testimonials
        </h1>
      </div>
      <div className="">
        <HorizontalScrollCarousel cards={cards} />
      </div>
    </main>
  );
};
