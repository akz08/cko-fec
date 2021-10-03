import React from 'react';
import { useComments } from '../hooks/CommentProvider';
import Comment from './Comment';

export default function CommentList(): JSX.Element {
  const { comments } = useComments();

  return (
    <div className="comment-list">
      <h2>Latest Comments</h2>
      <div className="comment-container">
        {comments.map((comment, i) => (
          <Comment key={i} comment={comment} />
        ))}
      </div>
    </div>
  );
}
