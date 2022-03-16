import React from 'react';
import logo from './logo.svg';
import { FaTimes } from 'react-icons/fa';
import { social, links } from './data';
import { useShow } from './context';

const Sidebar = () => {
	const { isSidebarOpen, closeSidebar } = useShow();
	return (
		<aside className={`sidebar ${isSidebarOpen ? 'show-sidebar' : null}`}>
			<div className='sidebar-header'>
				<img src={logo} className='logo' alt='logo' />
				<button className='close-btn' onClick={closeSidebar}>
					<FaTimes />
				</button>
			</div>

			<ul className='links'>
				{links.map(link => {
					return (
						<li key={link.id}>
							<a href={link.url}>
								{link.icon} {link.text}
							</a>
						</li>
					);
				})}
			</ul>
			<ul className='social-icons'>
				{social.map(icon => {
					return (
						<li key={icon.id}>
							<a href={icon.url}>{icon.icon}</a>
						</li>
					);
				})}
			</ul>
		</aside>
	);
};

export default Sidebar;
