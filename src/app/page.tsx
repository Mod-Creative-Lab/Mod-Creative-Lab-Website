import Mod from '@/Components/Mod';
import Image from 'next/image';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mod Creative Lab',
  icons: '/ModHead.png',
};

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
      <Mod width='50' height='50' color='#0cc243' />
    </section>
  );
}
