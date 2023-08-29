import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

import Product from "../components/Product";

const Home = () => {
	const { products } = useContext(ProductContext);
	return (
		<React.Fragment>
			<section className="py-16">
				<div className="container mx-auto">
					<div className="grid gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 ">
						{products.map((product) => (
							<Product key={product.id} product={product} />
						))}
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default Home;
