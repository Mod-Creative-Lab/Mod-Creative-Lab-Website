import type { Metadata } from 'next';
import FirstSection from '@/Components/FirstSection';
import SecondSection from '@/Components/SecondSection';

export const metadata: Metadata = {
  title: 'Mod Creative Lab',
  icons: '/ModHead.png',
};

export default function Home() {
  return (
    <div>
      <FirstSection />
    </div>
  );
}
