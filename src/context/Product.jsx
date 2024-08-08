import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [singleProduct, setSingleProduct] = useState();
  const [cartItems, setCartItems] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products`
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
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
        console.error("Error fetching categories:", error);
      }
    };

    const loadCartItems = () => {
      try {
        const cart = localStorage.getItem("cart");
        setCartItems(cart ? JSON.parse(cart) : []);
      } catch (error) {
        console.error("Error loading cart items from localStorage:", error);
        setCartItems([]);
      }
    };

    fetchCategories();
    fetchProducts();
    loadCartItems();
  }, []);

  const fetchProductById = async (id) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/product/${id}`
      );
      const data = await response.json();
      setSingleProduct(data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  const updateCartItems = (newCart) => {
    setCartItems(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const checkoutCart = async () => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/csrf-token`).then(
        async (response) => {
          const data = await response.json();
          await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/cart`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "X-CSRF-TOKEN": data.csrf_token,
            },
            body: JSON.stringify(cartItems),
          });
        }
      );
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const openCartDrawer = () => {
    setDrawerOpen(true);
  };

  const closeCartDrawer = () => {
    setDrawerOpen(false);
  };

  const addToCart = (product, selectedSize, quantity) => {
    const cart = [...cartItems];
    const variant = product.variants.find((v) => v.size === selectedSize);

    if (!variant || variant.quantity < quantity) {
      console.error(
        `Size ${selectedSize} not available or insufficient stock.`
      );
      return;
    }

    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id && item.size === selectedSize
    );

    const imageUrl = product.images.length > 0 ? product.images[0].url : "";

    if (existingProductIndex >= 0) {
      cart[existingProductIndex].quantity += quantity;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        size: selectedSize,
        quantity,
        image: imageUrl,
        actual_price: product.actual_price,
        discount_price: product.discount_price,
      });
    }

    updateCartItems(cart);
    openCartDrawer();
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        categories,
        singleProduct,
        fetchProductById,
        cartItems,
        addToCart,
        updateCartItems,
        drawerOpen,
        openCartDrawer,
        closeCartDrawer,
        checkoutCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useStore = () => useContext(ProductContext);
