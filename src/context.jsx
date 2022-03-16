import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const openSidebar = () => setIsSidebarOpen(true);
	const closeSidebar = () => setIsSidebarOpen(false);
	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	return (
		<AppContext.Provider
			value={{
				isModalOpen,
				isSidebarOpen,
				closeModal,
				openSidebar,
				closeSidebar,
				openModal,
			}}>
			{children}
		</AppContext.Provider>
	);
};

export { AppContext, AppProvider };

export const useShow = () => {
	return useContext(AppContext);
};
