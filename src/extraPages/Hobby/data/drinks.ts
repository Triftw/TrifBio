// data/drinks.ts
import { type GalleryItem } from '../../GallerySection';

export const drinksItems: GalleryItem[] = [
  {
    id: 'cocktail',
    title: 'cocktail',
    shortDescription: 'I enjoy creating cocktails, but not necessarily drinking them.',
    fullDescription:
      'I love the visual appeal of layered shots. Some of my signature creations include the Trans Pride Flag Shot and Nonbinary Flag Shot.I like infusing gin with Taiwanese Tieguanyin tea and crafting cocktails with a bright, fruity profile.',
    images: Array.from({ length: 4 }, (_, i) => ({
        url: `/images/hobby/c${i+1}.jpg`,
        alt: `Cocktail phtos ${i + 1}`
      })),
    keywords:['cocktails']
  }
];
