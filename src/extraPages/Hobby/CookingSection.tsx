// sections/CookingSection.tsx
import GallerySection from "../GallerySection";
import { cookingItems } from "./data/cooking"; // 你自己分開的 data

const CookingSection = () => {
  return (
    <GallerySection
      id="cooking"
      title="Cooking Gallery"
      subtitle="Dishes, recipes, and culinary experiments"
      items={cookingItems}
    />
  );
};

export default CookingSection;
