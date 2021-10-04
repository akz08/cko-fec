import React, { useState } from 'react';
import { StarRatingProps } from '../types/types';
import Star from './Star';

const createArray = (length: number) => [...Array(length)];

export default function StarRating({
  readOnly = false,
  style = {},
  totalStars,
  selectedStars = 0,
  onRate = (f) => f,
}: StarRatingProps): JSX.Element {
  const onSelectFn = readOnly
    ? () => () => null
    : (i: number) => () => onRate(i + 1);

  return (
    <div style={{ padding: '5px', ...style }}>
      {createArray(totalStars).map((n, i) => (
        <Star key={i} selected={selectedStars > i} onSelect={onSelectFn(i)} />
      ))}
    </div>
  );
}
