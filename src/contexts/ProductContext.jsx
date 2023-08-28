import React, { useState, useEffect, createContext } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		const fetchProducts = async () => {
			const response = await fetch("https://fakestoreapi.com/products");
			const products = await response.json();
			setProducts(products);
		};
    fetchProducts();
	}, [products]);
	return <ProductContext.Provider value={{products}}>{children}</ProductContext.Provider>;
};

export default ProductProvider;
