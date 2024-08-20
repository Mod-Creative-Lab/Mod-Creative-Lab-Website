'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { randomColor } from '@/utils/randomColor';
import Ant from '@/components/Ant/Ant';

type Props = {};

export default function FirstSection({}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className='relative h-screen p-10 md:p-32 xl:p-80'>
      <div
        ref={containerRef}
        className='flex h-full w-full items-center justify-center overflow-hidden'
      >
        <div className='absolute w-10/12 xl:w-1/2'>
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
            <Ant key={i} containerRef={containerRef} color={randomColor()} />
          ))}
      </div>
    </section>
  );
}
