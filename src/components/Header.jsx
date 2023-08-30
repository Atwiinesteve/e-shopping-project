import React from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { BsBag } from "react-icons/bs";

export default function Header() {
	const { sidebarOpen, setSidebarOpen } = React.useContext(SidebarContext);
	return (
		<React.Fragment>
			<header className="bg-pink-200">
				<div>Header</div>
				<div
					className="flex relative"
					onClick={() => setSidebarOpen(!sidebarOpen)}>
					<BsBag className="text-2xl cursor-pointer" />
				</div>
			</header>
		</React.Fragment>
	);
}
