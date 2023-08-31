import React from "react";
import { useParams } from "react-router-dom";

import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";

const ProductDetails = () => {
	const { id } = useParams();
	const { products } = React.useContext(ProductContext);
	const { addToCart } = React.useContext(CartContext);

	// get single product based on the id
	const product = products.find((item) => item.id === parseInt(id));

	// if product is not found, load a spinner
	if (!product) {
		return (
			<section className="h-screen flex justify-center items-center">
				Loading product...
			</section>
		);
	}

	// destructure product
	const { image, title, price, description } = product;

	return (
		<React.Fragment>
			<section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
				<div className="container mx-auto">
          {/* image and text */}
          <div className="flex flex-col lg:flex-row items-center">
            <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
              <img className="max-w-[200px] lg:max-w-sm:" src={image} alt="" />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">{title}</h1>
              <div className="text-xl text-red-500 font-medium mb-6">$ {price}</div>
              <p>{description}</p>
              <button onClick={() => addToCart(product, product.id)} className="bg-primary text-white py-4 px-8">Add to Cart</button>
            </div>
          </div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default ProductDetails;
