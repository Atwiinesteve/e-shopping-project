import React, { createContext } from "react";

// create context
export const SidebarContext = createContext();

// provider component
export const SidebarProvider = ({ children }) => {
	const [sidebarOpen, setSidebarOpen] = React.useState(false);
	const openSidebar = () => {
		setSidebarOpen(true);
	};
	return (
		<SidebarContext.Provider
			value={{ sidebarOpen, setSidebarOpen, openSidebar }}>
			{children}
		</SidebarContext.Provider>
	);
};

export default SidebarProvider;
