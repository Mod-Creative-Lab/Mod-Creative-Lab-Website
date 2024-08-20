import type { Metadata } from 'next';
import FirstSection from '@/Components/FirstSection';

export const metadata: Metadata = {
  title: 'Mod Creative Lab',
  icons: '/ModHead.png',
};

function randomColor() {
  const colorList = [
    '#14FBA8',
    '#2614FB',
    '#FB7E14',
    '#E9FB14',
    '#FB1483',
    '#34FB14',
    '#7A14FB',
  ];
  return colorList[Math.floor(Math.random() * colorList.length)];
}

export default function Home() {
  return (
    <div>
      <FirstSection />
    </div>
  );
}
