// sections/SportsSection.tsx
import GallerySection from "../GallerySection";
import { sportsItems } from "./data/sports"; // 你自己分開的 data

const SportsSection = () => {
  return (
    <GallerySection
      id="sports"
      title="Sports"
      subtitle="Badminton, hiking, and still figuring out"
      items={sportsItems}
    />
  );
};

export default SportsSection;
