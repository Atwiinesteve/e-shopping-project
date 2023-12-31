import React from "react";
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";

// import cart context
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
	const { removeFromCart, decreaseItemCount, increaseItemCount } =
		React.useContext(CartContext);
	const { id, title, price, image, amount } = item;
	return (
		<React.Fragment>
			<div className="flex gap-x-4 py-2 lg:px-6 border-b">
				<div className="w-full min-h-[150px] flex items-center gap-x-4">
					{/* image */}
					<Link to={`/product/${id}`}>
						<img className="max-w-[80px]" src={image} alt="" />
					</Link>
					<div className="w-full flex flex-col">
						{/* title and remove button */}
						<div className="flex justify-between mb-2">
							{/* title */}
							<Link
								to={`/product/${id}`}
								className="text-sm uppercase font-mediu, max-w-[240px] text-primary hover:underline">
								{title}
							</Link>
							{/* remove icon */}
							<div
								onClick={() => removeFromCart(id)}
								className="text-xl cursor-pointer">
								<IoMdClose className="text-gray-500 hover:text-red-500 transition" />
							</div>
						</div>
						{/* price and quantity */}
						<div className="flex gap-x-2 h-[36px] text-sm">
							{/* quantity */}
							<div className="flex flex-1 max-w-[100px] justify-center cursor-pointer items-center h-full border text-primary font-medium">
								{/* minus icon */}
								<div className="flex-1 h-full flex justify-center items-center cursor-pointer">
									<IoMdRemove onClick={() => decreaseItemCount(id)} />
								</div>
								<div className="h-full flex justify-center items-center px-2">
									{amount}
								</div>
								<div className="flex-1 h-full flex justify-center items-center cursor-pointer">
									<IoMdAdd onClick={() => increaseItemCount(id)} />
								</div>
							</div>
							<div className="flex-1 flex items-center justify-around">
								${price}
							</div>
							<div className="flex-1 flex justify-end items-center text-primary font-medium">
								$ {`${parseFloat(price * amount).toFixed(2)}`}
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default CartItem;
