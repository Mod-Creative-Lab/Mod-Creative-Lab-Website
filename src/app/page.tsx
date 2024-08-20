import type { Metadata } from 'next';
import FirstSection from '@/components/FirstSection';

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
