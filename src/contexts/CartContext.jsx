import React from "react";

// create context
export const CartContext = React.createContext();

// cart context provider
export const CartProvider = ({ children }) => {
	const [cart, setCart] = React.useState([]);
	
	// set cart count state
	const [cartCount, setCartCount] = React.useState(0);

	// total price state
	const [totalPrice, setTotalPrice] = React.useState(0);

	// update total price
	React.useEffect(() => {
		const total = cart.reduce((acc, item) => {
			return acc + item.price * item.amount;
		}, 0);
		setTotalPrice(total);
	}, [cart]); 

	// update cart count
	React.useEffect(() => {
		if(cart) {
			const amount = cart.reduce((acc, item) => {
				return acc + item.amount;
			}, 0);
			setCartCount(amount);
		}
	}, [cart]);

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

	const removeFromCart = (id) => {
		const newCart = cart.filter((item) => {
			return item.id !== id;
		});
		setCart(newCart);
	};

	const clearCart = () => {
		setCart([]);
	};

	const increaseItemCount = (id) => {
		const item = cart.find((item) => item.id === id);
		addToCart(item, id);
	};

	const decreaseItemCount = (id) => {
		const item = cart.find((item) => {
			return item.id === id;
		});
		if (item) {
			const newCart = cart.map((item) => {
				if (item.id === id) {
					return { ...item, amount: item.amount - 1 };
				} else {
					return item;
				}
			});
			setCart(newCart);
		}
		if (item.amount < 2) {
			removeFromCart(id);
		}
	};

	return (
		<CartContext.Provider
			value={{
				cart,
				increaseItemCount,
				decreaseItemCount,
				addToCart,
				removeFromCart,
				clearCart,
				cartCount,
				setCartCount,
				totalPrice,
				setTotalPrice
			}}>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;
