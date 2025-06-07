// data/sports.ts
import { type GalleryItem } from '../../GallerySection';

export const sportsItems: GalleryItem[] = [
  {
    id: 'badminton',
    title: 'Badminton',
    shortDescription: '',
    fullDescription:
      'I wasn’t very good at badminton when I was younger, but I later realized a big part of that was due to learning it in the wrong way and under too much pressure. Now, I see badminton as my main sport, and I’ve been doing much better than before.I also enjoy watching professional matches — my favorite player is Lin Chun-Yi.',
    images: [
      { url: '/images/hobby/b1.jpg', alt: 'Two of me! photoshoped' },
      { url: '/images/hobby/b2.jpg', alt: 'my lovely sneakers and racket' },
      { url: '/images/hobby/b3.jpg', alt: 'but it broke' },
    ],
    keywords:['badminton']
  },
  {
    id: 'mountains',
    title: 'mountains',
    shortDescription: 'Enjoy being in the mountains',
    fullDescription:
      'Just sharing some of my photos in the mountains of Taiwan. Including Taipei Grand Trail Sec6,擎天崗,七星山,抹茶山,阿里山',
    images: [
      { url: '/images/hobby/ht1.jpg', alt: 'Taipei Grand Trail Sec6' },
      { url: '/images/hobby/hy1.jpg', alt: '擎天崗' },
      { url: '/images/hobby/hy2.jpg', alt: '七星山夢幻湖' },
      { url: '/images/hobby/hy3.jpg', alt: '七星山夢幻湖' },
      { url: '/images/hobby/hm1.jpg', alt: '抹茶山' },
      { url: '/images/hobby/ha1.jpg', alt: '阿里山日出' },

    ],
    keywords:['mountain','hill','hiking']
  }
];
