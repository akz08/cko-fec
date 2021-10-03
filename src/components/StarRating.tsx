import React, { useState } from 'react';
import { StarRatingProps } from '../types/types';
import Star from './Star';

const createArray = (length: number) => [...Array(length)];

export default function StarRating({
  readOnly = false,
  style = {},
  stars = 0,
  totalStars,
}: StarRatingProps): JSX.Element {
  const [selectedStars, setSelectedStars] = useState(stars);

  const onSelectFn = readOnly
    ? () => () => null
    : (i: number) => () => setSelectedStars(i + 1);

  return (
    <div style={{ padding: '5px', ...style }}>
      {createArray(totalStars).map((n, i) => (
        <Star key={i} selected={selectedStars > i} onSelect={onSelectFn(i)} />
      ))}
    </div>
  );
}
