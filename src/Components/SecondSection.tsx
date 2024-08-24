'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ModSVG from './ModSVG';
import CreativeSVG from './CreativeSVG';
import { Raleway } from 'next/font/google';
import ModHeadSVG from './ModHead.SVG';

type Props = {};

const raleway = Raleway({ subsets: ['latin'] });

export default function SecondSection({}: Props) {
  return (
    <div className={raleway.className}>
      <div className='relative flex h-screen items-center justify-center'>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
          }}
          className='absolute left-0 right-0 -z-20 ml-auto mr-auto w-10/12 opacity-30 xl:w-1/3'
        >
          <ModHeadSVG />
        </motion.div>
        <div className='absolute left-0 right-0 -z-10 ml-auto mr-auto h-56 w-56 rounded-[50%] bg-[rgba(251,126,20,0.3)] p-[50%] blur-[100px] md:blur-[250px] xl:p-[20%]'></div>
        <div>
          <div className='flex items-center justify-center text-xl md:text-3xl'>
            We are
            <div className='ml-3 flex w-24 items-center md:ml-6 md:w-48'>
              <ModSVG />
            </div>
          </div>
          <div className='mt-7 flex items-center justify-center text-xl md:text-3xl'>
            We aim to build
            <div className='ml-3 flex w-40 items-center md:ml-6 md:w-72'>
              <CreativeSVG />
            </div>
          </div>
          <div className='mt-7 text-center md:text-3xl'>
            <div>
              <span className='text-3xl font-extrabold md:text-6xl'>LAB</span>
              oratory is where
            </div>
            <div>
              the <span className='text-[#FB7E14]'>m</span>ad things started. 🤯
            </div>
          </div>
          <div className='mt-7 rounded-md border-2 border-white bg-gradient-to-t from-[#D9D9D9] p-3 text-center text-xl md:text-3xl xl:p-5'>
            Better Than Think
          </div>
        </div>
      </div>
    </div>
  );
}
