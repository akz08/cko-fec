export type CommentProviderProps = {
  children: JSX.Element | JSX.Element[];
};

export type CommentProviderValue = {
  comments: IComment[];
  addComment: (comment: IComment) => void;
};

export type ProductTrendsProviderProps = {
  children: JSX.Element | JSX.Element[];
};

export type ProductTrendsProviderValue = {
  trends: IProductTrends[];
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
  // date?: string; // YYYY-MM-DD (UTC ISO 8601)
}

export type StarRatingProps = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  style?: object;
  readOnly?: boolean;
  totalStars: number;
  selectedStars: number;
  onRate?: (rating: number) => void;
};

export type StarProps = {
  selected?: boolean;
  onSelect?: (prop: unknown) => void;
};

export interface IProductTrends {
  date: string; // YYYY-MM-DD (UTC ISO 8601)
  value: number;
}
