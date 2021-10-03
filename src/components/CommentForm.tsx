import React from 'react';
import StarRating from './StarRating';

export default function CommentForm(): JSX.Element {
  return (
    <div className="form-comment">
      <h2>Add Comment</h2>
      <label htmlFor="formName">Name</label>
      <input id="formName" type="text" required />

      <label htmlFor="formEmail">Email</label>
      <input id="formEmail" type="email" required />

      <label htmlFor="formRating">Rating</label>
      <StarRating style={{ flexDirection: 'row' }} stars={3} totalStars={5} />

      <label htmlFor="formComment">Comment</label>
      <textarea id="formComment" required></textarea>
      <button id="formSubmit">Add comment</button>
    </div>
  );
}
