import { render, screen } from '@testing-library/react';
import React from 'react';
import CommentList from '../components/CommentList';
import * as provider from '../providers/CommentProvider';
import { CommentProps, IComment } from '../types/types';

const mockComment = jest.fn();
jest.mock(
  '../components/Comment',
  () =>
    function MockComment(props: CommentProps) {
      mockComment(props);
      return <div>mock</div>;
    }
);

describe('CommentList component', () => {
  const fakeCommentList: IComment[] = [
    {
      poster: 'person 1',
      rating: 2,
      comment: 'I hated it',
    },
    {
      poster: 'person 2',
      rating: 5,
      comment: 'I loved it',
    },
  ];

  test('renders placeholder text if no comments', () => {
    jest.mock('../providers/CommentProvider', () => {
      return jest.fn();
    });
    render(<CommentList />);

    const placeholder = screen.getByText(/no comments yet/i);
    expect(placeholder).toBeInTheDocument();
  });

  test('renders all comments if available', () => {
    const mockUseComments = jest.spyOn(provider, 'useComments');
    mockUseComments.mockImplementation(() => ({
      comments: fakeCommentList,
      addComment: () => null,
    }));
    render(<CommentList />);

    expect(mockUseComments).toHaveBeenCalledTimes(1);
    expect(mockComment).toHaveBeenCalledTimes(2);
    expect(mockComment).toHaveBeenNthCalledWith(
      1,
      expect.objectContaining({ comment: fakeCommentList[0] })
    );
    expect(mockComment).toHaveBeenNthCalledWith(
      2,
      expect.objectContaining({ comment: fakeCommentList[1] })
    );
  });
});
