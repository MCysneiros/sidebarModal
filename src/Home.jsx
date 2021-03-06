import React, { useContext } from 'react';
import { FaBars } from 'react-icons/fa';
import { useShow } from './context';
const Home = () => {
	const { openModal, openSidebar } = useShow();
	return (
		<main>
			<button className='sidebar-toggle' onClick={openSidebar}>
				<FaBars />
			</button>
			<button className='btn' onClick={openModal}>
				show modal XD
			</button>
		</main>
	);
};

export default Home;
