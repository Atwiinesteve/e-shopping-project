import React from "react";
import { ProductContext } from "../contexts/ProductContext";

const Home = () => {
	const { products } = useContext(ProductContext);
	const filteredProducts = products.filter(
		(product) => product.category === "men's clothing" || product.category === "women's clothing",
	);
	return <React.Fragment></React.Fragment>;
};

export default Home;
