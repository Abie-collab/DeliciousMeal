import { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { id: 1, productname: 'Laptop', qty: 5 },
    { id: 2, productname: 'Phone', qty: 2 },
  ]);

  const fetchAllProducts = () => products;

  const addProduct = (product) => {
    const newProduct = {
      ...product,
      id: Date.now(),
    };

    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  const removeProduct = (id) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, removeProduct, fetchAllProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
export default ProductContext;
