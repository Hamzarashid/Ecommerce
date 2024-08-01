import { createContext, useContext, useState, useEffect } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [singleProduct, setSingleProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products`
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/categories`
        );
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
    fetchProducts();
  }, []);

  const fetchProductById = async (id) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/product/${id}`
      );
      const data = await response.json();
      setSingleProduct(data);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  return (
    <ProductContext.Provider
      value={{ products, categories, singleProduct, fetchProductById }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useStore = () => useContext(ProductContext);
