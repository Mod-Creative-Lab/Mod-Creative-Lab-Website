import type { Metadata } from 'next';
import FirstSection from '@/Components/FirstSection';
import SecondSection from '@/Components/SecondSection';

export const metadata: Metadata = {
  title: 'Mod Creative Lab',
  icons: '/ModHead.png',
  keywords:
    'Mod Creative Lab, KMUTT, student community, art and technology, creative projects, innovation, collaboration, Thailand, creative lab, technology club, King Mongkut University of Technology Thonburi',
  description:
    'Join Mod Creative Lab, a dynamic community run by students of King Mongkut University of Technology Thonburi (KMUTT). We push the boundaries of creativity, blending art and technology to craft innovative and crazy projects. Discover collaborations that inspire and redefine possibilities in every aspect of life.',
};

export default function Home() {
  return (
    <div>
      <FirstSection />
      <SecondSection />
    </div>
  );
}
