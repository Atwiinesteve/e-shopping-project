import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

import CartItem from "../components/CartItem";

import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";

export default function Sidebar() {
	const { sidebarOpen, openSidebar } = React.useContext(SidebarContext);
	const { cart, clearCart } = React.useContext(CartContext);
	return (
		<React.Fragment>
			<div
				className={` ${
					sidebarOpen ? "right-0" : "-right-full"
				} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
				<div className="flex items-center justify-between py-6 border-b">
					<div className="uppercase text-sm font-semibold">
						Shopping Bag (0)
					</div>
					<div
						onClick={openSidebar}
						className="cursor-pointer w-8 h-8 flex justify-center items-center">
						<IoMdArrowForward className="text-2xl" />
					</div>
				</div>
				<div>
					{cart.map((item) => (
						<div>
							<CartItem key={item.id} item={item} />
						</div>
					))}
				</div>
				<div className="flex flex-col gap-y-3 py-4 mt-4">
					<div className="flex w-full justify-between items-center">
						{/* total */}
						<div className="uppercase font-semibold">
							<span className="mr-2">Total: </span>$ 1000
						</div>
						{/* clear cart icon */}
						<div className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl">
							<FiTrash2 onClick={() => clearCart()} />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
