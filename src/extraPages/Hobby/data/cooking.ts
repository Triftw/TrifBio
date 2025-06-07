// data/cooking.ts
import { type GalleryItem } from '../../GallerySection';

export const cookingItems: GalleryItem[] = [
  {
    id: 'Cooking',
    title: 'Cooking',
    shortDescription: '',
    fullDescription:'Cooking is a big passion of mine! I mostly stick to Taiwanese, Japanese, and Italian styles.Some of my signature dishes include chili oil wontons, dumplings, and Taiwanese beef noodle soup.Here are a few dishes I’ve made in the past:',
    images: Array.from({ length: 5 }, (_, i) => ({
        url: `/images/hobby/d${i+1}.jpg`,
        alt: `Cocktail phtos ${i + 1}`
      })),
    keywords:['cooking']
  }
];
