// sections/GamesSection.tsx
import GallerySection from "../GallerySection";
import { gameItems } from "./data/games"; // 你自己分開的 data

const GamesSection = () => {
  return (
    <GallerySection
      id="Games"
      title="Games"
      subtitle="Video Games, Board Games, Progaming"
      items={gameItems}
    />
  );
};

export default GamesSection;
