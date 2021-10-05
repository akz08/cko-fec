import React from 'react';
import { useComments } from '../providers/CommentProvider';
import Comment from './Comment';

export default function CommentList(): JSX.Element {
  const { comments } = useComments();

  const renderContents = !comments?.length ? (
    <div>No comments yet</div>
  ) : (
    comments.map((comment, i) => <Comment key={i} comment={comment} />)
  );

  return (
    <div className="comment-list">
      <h2>Latest Comments</h2>
      <div className="comment-container">{renderContents}</div>
    </div>
  );
}
