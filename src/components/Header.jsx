import React, { useEffect } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { BsBag } from "react-icons/bs";
import Logo from "../img/logo.svg";
import { Link } from "react-router-dom";

export default function Header() {
	const [isActive, setIsActive] = React.useState(true);
	const { cartCount } = React.useContext(CartContext);
	const { sidebarOpen, setSidebarOpen } = React.useContext(SidebarContext);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			window.scrollY > 60 ? setIsActive(false) : setIsActive(true);
		});
	});
	return (
		<React.Fragment>
			<header
				className={`${
					isActive ? "bg-white py-4 shadow-md z-10" : "bg-none py-6 z-10"
				} fixed w-full z-10 transition-all`}>
				<div className="container mx-auto flex items-center justify-between h-full">
					<Link to={"/"}>
						<div>
							<img className="w-[40px]" src={Logo} alt="" />
						</div>
					</Link>
					<div
						className="flex relative"
						onClick={() => setSidebarOpen(!sidebarOpen)}>
						<BsBag className="text-2xl cursor-pointer" />
						<div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
							{cartCount}
						</div>
					</div>
				</div>
			</header>
		</React.Fragment>
	);
}
