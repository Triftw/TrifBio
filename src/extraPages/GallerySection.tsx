// components/GallerySection.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export interface GalleryItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  images: { url: string; alt: string }[];
  keywords: string[];
}

interface GallerySectionProps {
  id: string;
  title: string;
  subtitle: string;
  items: GalleryItem[];
}

interface ModalProps {
  item: GalleryItem;
  onClose: () => void;
}

const GalleryModal = ({ item, onClose }: ModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () =>
    setCurrentImageIndex((prev) =>
      prev === item.images.length - 1 ? 0 : prev + 1
    );
  const prevImage = () =>
    setCurrentImageIndex((prev) =>
      prev === 0 ? item.images.length - 1 : prev - 1
    );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white dark:bg-gray-800 rounded-xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col lg:flex-row h-full">
          <div className="relative lg:w-2/3 bg-black">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
            >
              <FaTimes className="w-6 h-6" />
            </button>
            <div className="relative aspect-video">
              <img
                src={item.images[currentImageIndex].url}
                alt={item.images[currentImageIndex].alt}
                className="w-full h-full object-cover"
              />
              {item.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-75 transition-all"
                  >
                    <FaChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-75 transition-all"
                  >
                    <FaChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full">
              {currentImageIndex + 1} / {item.images.length}
            </div>
          </div>

          <div className="lg:w-1/3 p-6 overflow-y-auto">
            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {item.fullDescription}
            </p>
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">Details</h4>
              <div className="flex flex-wrap gap-2">
                {item.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded-full"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const GallerySection = ({
  id,
  title,
  subtitle,
  items,
}: GallerySectionProps) => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <section id={id} className="min-h-screen py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">{subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedItem(item)}
              className={`cursor-pointer group ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden h-full hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-video">
                  <img
                    src={item.images[0].url}
                    alt={item.images[0].alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {item.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.keywords.map((kw) => (
                      <span
                        key={kw}
                        className="px-2 py-1 text-sm bg-gray-100 dark:bg-gray-600 rounded-full"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedItem && (
            <GalleryModal
              item={selectedItem}
              onClose={() => setSelectedItem(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default GallerySection;
