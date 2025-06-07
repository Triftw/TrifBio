// sections/DrinksSection.tsx
import GallerySection  from "../GallerySection";
import { drinksItems } from "./data/drinks"; // 你自己分開的 data

const DrinksSection = () => {
  return (
    <GallerySection
      id="drinks"
      title="Drinks Gallery"
      subtitle="Coffee, Tea, and Cocktails"
      items={drinksItems}
    />
  );
};

export default DrinksSection;
