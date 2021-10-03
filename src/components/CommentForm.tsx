import React from 'react';

export default function CommentForm(): JSX.Element {
  return (
    <div className="form-comment">
      <h2>Add Comment</h2>
      <label htmlFor="formName">Name</label>
      <input id="formName" type="text" />

      <label htmlFor="formEmail">Email</label>
      <input id="formEmail" type="email" />

      <label htmlFor="formRating">Rating</label>
      <div id="formRating">rating placeholder</div>

      <label htmlFor="formComment">Comment</label>
      <textarea id="formComment"></textarea>
      <button id="formSubmit">Add comment</button>
    </div>
  );
}
