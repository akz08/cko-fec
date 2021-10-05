import { render, screen } from '@testing-library/react';
import React from 'react';
import Comment from '../components/Comment';
import { IComment, StarRatingProps } from '../types/types';

const mockStarRating = jest.fn();
jest.mock(
  '../components/StarRating',
  () =>
    function MockStarRating(props: StarRatingProps) {
      mockStarRating(props);
      return <div>mock</div>;
    }
);

describe('Comment component', () => {
  const fakeComment: IComment = {
    poster: 'person',
    rating: 2,
    comment: 'I hated it',
  };

  test('renders the poster', () => {
    render(<Comment comment={fakeComment} />);

    const h3Element = screen.getByText(fakeComment.poster);
    expect(h3Element).toBeInTheDocument();
  });

  test('renders the comment', () => {
    render(<Comment comment={fakeComment} />);

    const element = screen.getByText(fakeComment.comment);
    expect(element).toBeInTheDocument();
  });

  describe('child StarRating component', () => {
    test('is set to readOnly', () => {
      render(<Comment comment={fakeComment} />);

      expect(mockStarRating).toHaveBeenCalledWith(
        expect.objectContaining({ readOnly: true })
      );
    });

    test('is set to 5 totalStars', () => {
      render(<Comment comment={fakeComment} />);

      expect(mockStarRating).toHaveBeenCalledWith(
        expect.objectContaining({ totalStars: 5 })
      );
    });

    test('is provided the comment rating', () => {
      render(<Comment comment={fakeComment} />);

      expect(mockStarRating).toHaveBeenCalledWith(
        expect.objectContaining({ selectedStars: fakeComment.rating })
      );
    });
  });
});
