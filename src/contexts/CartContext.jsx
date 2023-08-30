import React from "react";

// create context
export const CartContext = React.createContext();

// cart context provider
export const CartProvider = ({ children }) => {
	const [cart, setCart] = React.useState([]);

	const addToCart = (product, id) => {
		const newItem = { ...product, amount: 1 };
		const cartItem = cart.find((item) => {
			return item.id === id;
		});
		if (cartItem) {
			const newCart = [...cart].map((item) => {
				if (item.id === id) {
					return { ...item, amount: cartItem.amount + 1 };
				} else {
					return item;
				}
			});
			setCart(newCart);
		} else {
			setCart([...cart, newItem]);
		}
	};

	console.log(cart);

	const removeFromCart = (product) => {
		const newCart = cart.filter((item) => item.id !== product.id);
		setCart(newCart);
	};

	const clearCart = () => {
		setCart([]);
	};

	return (
		<CartContext.Provider
			value={{ cart, addToCart, removeFromCart, clearCart }}>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;
