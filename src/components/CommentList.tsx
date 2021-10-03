import React from 'react';
import Comment from './Comment';

export default function CommentList(): JSX.Element {
  return (
    <div className="comment-list">
      <h2>Latest Comments</h2>
      <div className="comment-container">
        {[...Array(10)].map((i) => (
          <Comment key={i} />
        ))}
      </div>
    </div>
  );
}
