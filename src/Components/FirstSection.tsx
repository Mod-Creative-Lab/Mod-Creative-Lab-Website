import React from 'react';
import Image from 'next/image';
import { randomColor } from '@/utils/randomColor';
import Mod from '@/Components/Mod';

type Props = {};

export default function FirstSection({}: Props) {
  return (
    <section className='flex h-screen items-center justify-center'>
      <div className='w-1/3'>
        <Image
          draggable={false}
          className='w-full select-none object-cover'
          width={0}
          height={0}
          src='/mcl.svg'
          alt='mcl-icon'
        />
      </div>
      {Array(50)
        .fill(0)
        .map((num, i) => (
          <Mod key={i} size={50} color={randomColor()} />
        ))}
    </section>
  );
}
