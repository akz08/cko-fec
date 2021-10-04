import React from 'react';
import { CommentProps } from '../types/types';
import StarRating from './StarRating';

export default function Comment(commentProps: CommentProps): JSX.Element {
  const { poster, rating, comment } = commentProps.comment;

  return (
    <div className="comment-content">
      <h3 style={{ margin: '5px 0' }}>{poster}</h3>
      <StarRating readOnly selectedStars={rating} totalStars={5} />
      <div>{comment}</div>
    </div>
  );
}
