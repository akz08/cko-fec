import React from 'react';
import { FaStar } from 'react-icons/fa';
import { StarProps } from '../types/types';

export default function Star({
  selected = false,
  onSelect = (f) => f,
}: StarProps): JSX.Element {
  return (
    <FaStar
      className={selected ? 'ratingStar-selected' : 'ratingStar'}
      onClick={onSelect}
    />
  );
}
