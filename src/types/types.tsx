import React from 'react';

export type CommentProviderProps = {
  children: JSX.Element | JSX.Element[];
};

export type CommentProviderValue = {
  comments: IComment[];
  addComment: (comment: IComment) => void;
};

export type CommentProps = {
  comment: IComment;
};

export interface IComment {
  id?: string;
  poster: string;
  email?: string;
  rating: number;
  comment: string;
}

export type StarRatingProps = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  style?: object;
  readOnly?: boolean;
  stars?: number;
  totalStars: number;
};

export type StarProps = {
  selected?: boolean;
  onSelect?: (prop: unknown) => void;
};
