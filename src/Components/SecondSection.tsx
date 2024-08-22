import React from 'react';
import ModSVG from './ModSVG';
import CreativeSVG from './CreativeSVG';

type Props = {};

export default function SecondSection({}: Props) {
  return (
    <div className='flex h-screen items-center justify-center border-2 border-red-500'>
      <div>
        <div className='flex items-center justify-center text-3xl'>
          We are
          <div className='ml-6 flex w-48 items-center'>
            <ModSVG />
          </div>
        </div>
        <div className='mt-7 flex items-center justify-center text-3xl'>
          We aim to build
          <div className='ml-6 flex w-72 items-center'>
            <CreativeSVG />
          </div>
        </div>
        <div className='mt-7 text-center text-3xl'>
          <span className='text-6xl font-extrabold'>LAB</span>oratory is where
          the <span className='text-[#FB7E14]'>m</span>ad things started. 🤯
        </div>
        <div className='mt-7 rounded-md border-2 border-slate-500 text-center'>
          Better Than Think
        </div>
      </div>
    </div>
  );
}
