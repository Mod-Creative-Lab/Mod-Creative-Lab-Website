import type { Metadata } from 'next';
import FirstSection from '@/components/FirstSection';
import SecondSection from '@/components/SecondSection';

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
