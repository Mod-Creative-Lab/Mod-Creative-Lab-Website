import React from 'react';
import { AntProps } from './Ant';

export default function AntAlive({ color }: AntProps) {
  return (
    <svg viewBox='0 0 56 70' fill='none' xmlns='http://www.w3.org/2000/svg'>
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
}
