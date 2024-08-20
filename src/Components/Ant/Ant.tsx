'use client';

import { motion } from 'framer-motion';
import React, { useState, useEffect, useRef } from 'react';
import { getRandomNumber } from '@/utils/randomNumber';
import AntAlive from './AntAlive';
import AntDead1 from './AntDead1';
import AntDead2 from './AntDead2';
import AntDead3 from './AntDead3';

export type AntProps = {
  containerRef?: React.RefObject<HTMLDivElement> | null;
  color: string;
};

export default function Ant({ containerRef, color }: AntProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState(1);
  const [rotation, setRotation] = useState(Math.random() * 360);
  const [hasHitBound, setHasHitBound] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);
  const [randomDead, setRandomDead] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (containerRef?.current == null) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    setPosition({
      x: getRandomNumber(-containerRect.width / 4, containerRect.width / 4),
      y: getRandomNumber(-containerRect.height / 4, containerRect.height / 4),
    });
  }, [containerRef]);

  //Move forward everyframe
  useEffect(() => {
    if (!hasClicked) {
      const interval = setInterval(() => {
        setPosition((prevPosition) => {
          let newPosition = {
            x:
              prevPosition.x +
              direction * Math.sin(rotation * (Math.PI / 180)) * 2,
            y:
              prevPosition.y +
              direction * -Math.cos(rotation * (Math.PI / 180)) * 2,
          };

          return newPosition;
        });
      }, 16); // Roughly 60fps

      return () => clearInterval(interval);
    }
  }, [direction, rotation, hasClicked]);

  //Check if out of screen rotate to opposite rotation
  useEffect(() => {
    if (
      elementRef.current != null &&
      containerRef?.current != null &&
      !hasHitBound &&
      !hasClicked
    ) {
      const rect = elementRef.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      if (
        rect.top < containerRect.top ||
        rect.bottom > containerRect.bottom ||
        rect.left < containerRect.left ||
        rect.right > containerRect.right
      ) {
        setHasHitBound(true);
        setRotation((prevRotation) => (prevRotation + 180) % 360);
        setTimeout(() => setHasHitBound(false), 1000);
      }
    }
  }, [position, hasHitBound, hasClicked, containerRef]);

  function onClickAnt() {
    if (hasClicked || audioRef.current == null) return;
    setHasClicked(true);
    setRandomDead(getRandomNumber(0, 2));

    const randomSounds = [
      '/sounds/Ant_crushed (1).mp3',
      '/sounds/Ant_crushed (2).mp3',
      '/sounds/Ant_crushed (3).mp3',
      '/sounds/Ant_crushed.mp3',
    ];
    const randomIndex = Math.floor(Math.random() * 1000) % randomSounds.length;
    const randomSound = randomSounds[randomIndex];
    audioRef.current.src = randomSound;
    audioRef.current.play();
  }

  return (
    <motion.div
      onTouchStart={onClickAnt}
      onPointerDown={onClickAnt}
      className='absolute h-5 w-5 cursor-pointer select-none opacity-70 md:h-7 md:w-7 xl:h-10 xl:w-10'
      style={{ rotate: rotation, transition: 'all 0.1s' }}
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
      <audio ref={audioRef} />
      {hasClicked ? (
        randomDead == 0 ? (
          <AntDead1 color={color} />
        ) : randomDead == 1 ? (
          <AntDead2 color={color} />
        ) : randomDead == 2 ? (
          <AntDead3 color={color} />
        ) : (
          <AntDead1 color={color} />
        )
      ) : (
        <AntAlive color={color} />
      )}
    </motion.div>
  );
}
