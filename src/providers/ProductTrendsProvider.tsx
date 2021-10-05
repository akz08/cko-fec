import React, { createContext, useContext, useState } from 'react';
import trendData from '../data/trends.json';
import {
  IProductTrends,
  ProductTrendsProviderProps,
  ProductTrendsProviderValue,
} from '../types/types';

const ProductTrendsContext = createContext<ProductTrendsProviderValue>(
  {} as ProductTrendsProviderValue
);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useProductTrends = () => useContext(ProductTrendsContext);

export default function ProductTrendsProvider({
  children,
}: ProductTrendsProviderProps): JSX.Element {
  const [trends] = useState<IProductTrends[]>(trendData);

  return (
    <ProductTrendsContext.Provider value={{ trends }}>
      {children}
    </ProductTrendsContext.Provider>
  );
}
