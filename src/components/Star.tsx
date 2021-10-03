import React from 'react';
import { FaStar } from 'react-icons/fa';
import { StarProps } from '../types/types';

export default function Star({
  selected = false,
  onSelect = (f) => f,
}: StarProps): JSX.Element {
  return <FaStar color={selected ? '#6be1e6' : 'grey'} onClick={onSelect} />;
}
