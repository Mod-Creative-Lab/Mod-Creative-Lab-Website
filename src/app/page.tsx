import Mod from '@/Components/Mod';
import Image from 'next/image';

import type { Metadata } from 'next';

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
    <section className='flex h-screen items-center justify-center'>
      <div className='w-1/3'>
        <Image
          className='w-full object-cover'
          width={0}
          height={0}
          src='/mcl.svg'
          alt='mcl-icon'
        />
      </div>
      <Mod size={50} color={randomColor()} />
    </section>
  );
}
