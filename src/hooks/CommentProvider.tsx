import React, { createContext, useContext, useState } from 'react';
import commentsData from '../data/comments.json';
import {
  CommentProviderProps,
  CommentProviderValue,
  IComment,
} from '../types/types';
import { v4 } from 'uuid';

const CommentContext = createContext<CommentProviderValue>(
  {} as CommentProviderValue
);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useComments = () => useContext(CommentContext);

export default function CommentProvider({
  children,
}: CommentProviderProps): JSX.Element {
  const [comments, setComments] = useState<IComment[]>(commentsData);

  // just add to local state for now
  const addComment = (comment: IComment) => {
    setComments([
      ...comments,
      {
        ...comment,
        // we would be assigned this in a returning call from a service
        id: v4(),
      },
    ]);
  };

  return (
    <CommentContext.Provider value={{ comments, addComment }}>
      {children}
    </CommentContext.Provider>
  );
}
