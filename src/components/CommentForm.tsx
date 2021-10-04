import React, { FormEvent, useState } from 'react';
import { useComments } from '../providers/CommentProvider';
import { IComment } from '../types/types';
import StarRating from './StarRating';

interface FormInputEventTarget extends EventTarget {
  value: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useInput = (initialValue: string): any => {
  const [value, setValue] = useState(initialValue);
  return [
    {
      value,
      onChange: (e: InputEvent) =>
        setValue((e?.target as FormInputEventTarget)?.value),
    },
    () => setValue(initialValue),
  ];
};

export default function CommentForm(): JSX.Element {
  const [nameProps, resetName] = useInput('');
  const [emailProps, resetEmail] = useInput('');
  const [rating, setRating] = useState(3);
  const [commentProps, resetComment] = useInput('');

  const { addComment } = useComments();

  const submit = (e: FormEvent) => {
    e.preventDefault();

    // build a comment
    const newComment: IComment = {
      poster: nameProps.value,
      email: emailProps.value,
      rating: rating,
      comment: commentProps.value,
    };

    addComment(newComment);
    resetName();
    resetEmail();
    setRating(3);
    resetComment();
  };

  return (
    <form onSubmit={submit} className="form-comment">
      <h2>Add Comment</h2>
      <label htmlFor="formName">Name</label>
      <input {...nameProps} id="formName" type="text" required />

      <label htmlFor="formEmail">Email</label>
      <input {...emailProps} id="formEmail" type="email" required />

      <label htmlFor="formRating">Rating</label>
      <StarRating
        style={{ flexDirection: 'row' }}
        selectedStars={rating}
        onRate={(rating: number) => setRating(rating)}
        totalStars={5}
      />

      <label htmlFor="formComment">Comment</label>
      <textarea {...commentProps} id="formComment" required></textarea>
      <button id="formSubmit">Add comment</button>
    </form>
  );
}
