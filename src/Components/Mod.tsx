'use client';

import { delay, motion } from 'framer-motion';
import React, { useState, useEffect, useRef } from 'react';

type Props = {
  size: number;
  color: string;
};

export default function Mod({ color, size }: Props) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [canMove, setCanMove] = useState(false);

  function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
    const startMoving = async () => {
      //await delay(getRandomNumber(0, 7000));
      await delay(getRandomNumber(0, 0));
      setCanMove(true);
    };
    startMoving();
  }, []);

  useEffect(() => {
    if (canMove) {
      const randomRotation = Math.floor(Math.random() * 360);
      setRotation(randomRotation);
    }
  }, [canMove]);

  useEffect(() => {
    const moveForward = () => {
      setPosition((prevPosition) => {
        const radianAngle = (rotation * Math.PI) / 180;
        const deltaX = Math.cos(radianAngle) * 2; // Speed along X-axis
        const deltaY = Math.sin(radianAngle) * 2; // Speed along Y-axis

        return {
          x: prevPosition.x + deltaX,
          y: prevPosition.y + deltaY,
        };
      });
    };

    let intervalId: NodeJS.Timeout;
    if (canMove) {
      intervalId = setInterval(moveForward, 16);
    }
    return () => clearInterval(intervalId);
  }, [rotation, canMove]);

  useEffect(() => {
    if (elementRef.current != null) {
      const rect = elementRef.current.getBoundingClientRect();
      if (
        rect.top >= window.innerHeight ||
        rect.bottom <= 0 ||
        rect.left >= window.innerWidth ||
        rect.right <= 0
      ) {
        setCanMove(false);
      }
    }
  }, [position]);

  return (
    <motion.div
      className='absolute'
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
    </motion.div>
  );
}
