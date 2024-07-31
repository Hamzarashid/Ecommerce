'use client';
import { createContext, useContext, useMemo, useState } from 'react';

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [product, setProduct] = useState(null);

  const value = useMemo(
    () => ({
      product,
      setProduct,
    }),
    [product, setProduct]
  );

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}

export const useProduct = () => useContext(ProductContext);
