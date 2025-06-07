// sections/GamesSection.tsx
import GallerySection from "../GallerySection";
import { photoItems } from "./data/activistGallery"; // 你自己分開的 data

const ActivistGallery = () => {
  return (
    <GallerySection
      id="Photos"
      title="Photos"
      subtitle="Activist, Events, Protest"
      items={photoItems}
    />
  );
};

export default ActivistGallery;
