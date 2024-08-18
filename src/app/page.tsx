import Mod from '@/Components/Mod';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mod Creative Lab',
  icons: '/ModHead.png',
};

export default function Home() {
  return (
    <section className='flex h-screen items-center justify-center'>
      <div className='w-1/3'>
        <img className='w-full' src='/mcl.svg' alt='mcl-icon' />
      </div>
      <Mod width='50' height='50' color='#0cc243' />
    </section>
  );
}
