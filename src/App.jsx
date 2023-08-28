import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

const App = () => {
	return (
		<React.Fragment>
			<div className="overflow-hidden">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="product/:id" element={<ProductDetails />} />
          </Route>
        </Routes>
      </div>
		</React.Fragment>
	);
};

export default App;
