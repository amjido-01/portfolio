/**
 * Card component renders a card with background image, title and hover effect.
 * It takes a card object with id, url and title properties.
 * Renders a main div with background image, title text and zoom in transition on hover.
*/
interface CardProps {
  card: {
    id: number;
    url: string;
    title: string;
  }
}

export const Card: React.FunctionComponent<CardProps> = ({card}) => {
  return (
    <main
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="p-8 text-6xl font-black text-white uppercase bg-gradient-to-br from-white/20 to-white/0 backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </main>
  );
}
