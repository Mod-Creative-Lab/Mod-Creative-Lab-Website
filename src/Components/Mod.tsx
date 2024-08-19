'use client';

import { motion } from 'framer-motion';
import React, { useState, useEffect, useRef } from 'react';

type Props = {
  size: number;
  color: string;
};

export default function Mod({ color, size }: Props) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState(1);
  const [rotation, setRotation] = useState(Math.random() * 360);
  const [hasHitBound, setHasHitBound] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);
  const [randomDead, setRandomDead] = useState(0);

  function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    if (!hasClicked) {
      const interval = setInterval(() => {
        setPosition((prevPosition) => {
          let newPosition = {
            x:
              prevPosition.x +
              direction * Math.cos((rotation * Math.PI) / 180) * 2,
            y:
              prevPosition.y +
              direction * Math.sin((rotation * Math.PI) / 180) * 2,
          };

          return newPosition;
        });
      }, 16); // Roughly 60fps

      return () => clearInterval(interval);
    }
  }, [direction, rotation, hasClicked]);

  useEffect(() => {
    if (elementRef.current != null && !hasHitBound && !hasClicked) {
      const rect = elementRef.current.getBoundingClientRect();
      if (
        rect.top >= window.innerHeight / 1.1 ||
        rect.bottom <= 0 ||
        rect.left >= window.innerWidth / 1.03 ||
        rect.right <= 0
      ) {
        setHasHitBound(true);
        setDirection((prevDirection) => prevDirection * -1);
        setTimeout(() => setHasHitBound(false), 10000);
      }
    }
  }, [position, hasClicked]);

  const ModAlive = () => (
    <svg
      width={size}
      height={size}
      viewBox='0 0 56 70'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='21.3905'
        y='8.17871'
        width='12.5826'
        height='12.5826'
        fill={color}
        fillOpacity={'0.8'}
      />
      <rect
        x='32.0858'
        width='3.77479'
        height='12.5826'
        fill={color}
        fillOpacity={'0.8'}
      />
      <rect
        x='18.874'
        width='3.77479'
        height='12.5826'
        fill={color}
        fillOpacity={'0.8'}
      />
      <rect
        x='18.874'
        y='27.6819'
        width='17.6157'
        height='42.1519'
        fill={color}
        fillOpacity={'0.8'}
      />
      <rect
        y='30.8275'
        width='12.5826'
        height='6.29132'
        fill={color}
        fillOpacity={'0.8'}
      />
      <rect
        x='42.781'
        y='30.8275'
        width='12.5826'
        height='6.29132'
        fill={color}
        fillOpacity={'0.8'}
      />
      <rect
        y='43.4102'
        width='12.5826'
        height='6.29132'
        fill={color}
        fillOpacity={'0.8'}
      />
      <rect
        x='42.781'
        y='43.4102'
        width='12.5826'
        height='6.29132'
        fill={color}
        fillOpacity={'0.8'}
      />
      <rect
        y='56.6219'
        width='12.5826'
        height='6.29132'
        fill={color}
        fillOpacity={'0.8'}
      />
      <rect
        x='42.781'
        y='56.6219'
        width='12.5826'
        height='6.29132'
        fill={color}
        fillOpacity={'0.8'}
      />
    </svg>
  );

  const ModDeadOne = () => (
    <svg
      width={size}
      height={size}
      viewBox='0 0 60 82'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='25.931'
        y='7.49548'
        width='12.5826'
        height='12.5826'
        transform='rotate(47.2872 25.931 7.49548)'
        fill={color}
        fillOpacity='0.8'
      />
      <rect
        x='39.1953'
        y='9.80603'
        width='3.77479'
        height='12.5826'
        transform='rotate(47.2872 39.1953 9.80603)'
        fill={color}
        fillOpacity='0.8'
      />
      <rect
        x='30.2335'
        y='0.0986328'
        width='3.77479'
        height='12.5826'
        transform='rotate(47.2872 30.2335 0.0986328)'
        fill={color}
        fillOpacity='0.8'
      />
      <rect
        x='20'
        y='31'
        width='10'
        height='42'
        fill={color}
        fillOpacity='0.8'
      />
      <rect
        x='4.81946'
        y='33'
        width='12.5826'
        height='6.29132'
        transform='rotate(50 4.81946 33)'
        fill={color}
        fillOpacity='0.8'
      />
      <rect
        x='39'
        y='34.5671'
        width='12.5826'
        height='6.29132'
        transform='rotate(-31.461 39 34.5671)'
        fill={color}
        fillOpacity='0.8'
      />
      <rect
        x='1.04419'
        y='54'
        width='12.5826'
        height='6.29132'
        transform='rotate(9.5532 1.04419 54)'
        fill={color}
        fillOpacity='0.8'
      />
      <rect
        x='43.8364'
        y='53.2263'
        width='12.5826'
        height='6.29132'
        transform='rotate(-46.3835 43.8364 53.2263)'
        fill={color}
        fillOpacity='0.8'
      />
      <rect
        x='10.0625'
        y='68'
        width='12.5826'
        height='6.29132'
        transform='rotate(74.4956 10.0625 68)'
        fill={color}
        fillOpacity='0.8'
      />
      <rect
        x='46'
        y='70.1918'
        width='12.5826'
        height='6.29132'
        transform='rotate(-5.43516 46 70.1918)'
        fill={color}
        fillOpacity='0.8'
      />
    </svg>
  );

  const ModDeadTwo = () => (
    <svg
      width={size}
      height={size}
      viewBox='0 0 58 88'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='23.488'
        y='9.94275'
        width='12.5826'
        height='12.5826'
        transform='rotate(24.6922 23.488 9.94275)'
        fill={color}
        fillOpacity='0.8'
      />
      <rect
        x='47.2452'
        y='10'
        width='3.77479'
        height='12.5826'
        transform='rotate(47.2872 47.2452 10)'
        fill={color}
        fillOpacity='0.8'
      />
      <rect
        x='22.8958'
        width='3.77479'
        height='12.5826'
        transform='rotate(18.036 22.8958 0)'
        fill={color}
        fillOpacity='0.8'
      />
      <rect
        x='21'
        y='32.9014'
        width='10'
        height='42'
        fill={color}
        fill-opacity='0.8'
      />
      <rect
        x='0.6073'
        y='40.1296'
        width='12.5826'
        height='6.29132'
        transform='rotate(-13.3065 0.6073 40.1296)'
        fill={color}
        fillOpacity='0.8'
      />
      <rect
        x='39'
        y='43.4847'
        width='12.5826'
        height='6.29132'
        transform='rotate(-82.8485 39 43.4847)'
        fill={color}
        fillOpacity='0.8'
      />
      <rect
        x='2.55603'
        y='64.8169'
        width='12.5826'
        height='6.29132'
        transform='rotate(-69.2566 2.55603 64.8169)'
        fill={color}
        fillOpacity='0.8'
      />
      <rect
        x='45.4813'
        y='49.0271'
        width='12.5826'
        height='6.29132'
        transform='rotate(5.32284 45.4813 49.0271)'
        fill={color}
        fillOpacity='0.8'
      />
      <rect
        x='5.19739'
        y='74.3346'
        width='12.5826'
        height='6.29132'
        transform='rotate(42.48 5.19739 74.3346)'
        fill={color}
        fillOpacity='0.8'
      />
      <rect
        x='43'
        y='76.7511'
        width='12.5826'
        height='6.29132'
        transform='rotate(-69.0534 43 76.7511)'
        fill={color}
        fillOpacity='0.8'
      />
    </svg>
  );

  const ModDeadThree = () => (
    <svg
      width={size}
      height={size}
      viewBox='0 0 93 75'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='18.2452'
        y='8'
        width='12.5826'
        height='12.5826'
        transform='rotate(47.2872 18.2452 8)'
        fill={color}
        fillOpacity='0.8'
      />
      <rect
        x='31.2452'
        y='7'
        width='3.77479'
        height='12.5826'
        transform='rotate(47.2872 31.2452 7)'
        fill={color}
        fillOpacity='0.8'
      />
      <rect
        x='24.2452'
        width='3.77479'
        height='12.5826'
        transform='rotate(47.2872 24.2452 0)'
        fill={color}
        fillOpacity='0.8'
      />
      <rect
        x='39'
        y='56.3091'
        width='10'
        height='42'
        transform='rotate(-68.5772 39 56.3091)'
        fill={color}
        fillOpacity='0.8'
      />
      <rect
        x='6.1311'
        y='35'
        width='12.5826'
        height='6.29132'
        transform='rotate(77.0419 6.1311 35)'
        fill={color}
        fillOpacity='0.8'
      />
      <rect
        x='44.2014'
        y='7'
        width='12.5826'
        height='6.29132'
        transform='rotate(1.83501 44.2014 7)'
        fill={color}
        fillOpacity='0.8'
      />
      <rect
        x='36'
        y='27.6716'
        width='12.5826'
        height='6.29132'
        transform='rotate(-21.7943 36 27.6716)'
        fill={color}
        fillOpacity='0.8'
      />
      <rect
        x='65'
        y='32.2426'
        width='12.5826'
        height='6.29132'
        transform='rotate(-76.6485 65 32.2426)'
        fill={color}
        fillOpacity='0.8'
      />
      <rect
        x='19.1246'
        y='61'
        width='12.5826'
        height='6.29132'
        transform='rotate(54.5442 19.1246 61)'
        fill={color}
        fillOpacity='0.8'
      />
      <rect
        x='79'
        y='45.1344'
        width='12.5826'
        height='6.29132'
        transform='rotate(-46.5483 79 45.1344)'
        fill={color}
        fillOpacity='0.8'
      />
    </svg>
  );

  return (
    <motion.div
      onTouchStart={() => {
        if (hasClicked) return;
        setHasClicked(true);
        setRandomDead(getRandomNumber(0, 2));
      }}
      onPointerDown={() => {
        if (hasClicked) return;
        setHasClicked(true);
        setRandomDead(getRandomNumber(0, 2));
      }}
      className='absolute h-0 w-0 cursor-pointer'
      style={{ rotate: rotation }}
      animate={{
        x: position.x,
        y: position.y,
      }}
      transition={{
        type: 'tween',
        ease: 'linear',
        duration: 0,
      }}
      ref={elementRef}
    >
      {hasClicked ? (
        randomDead == 0 ? (
          <ModDeadOne />
        ) : randomDead == 1 ? (
          <ModDeadTwo />
        ) : randomDead == 2 ? (
          <ModDeadThree />
        ) : (
          <ModDeadOne />
        )
      ) : (
        <ModAlive />
      )}
    </motion.div>
  );
}
