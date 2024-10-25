import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Hamburger from 'hamburger-react';
import './Navbar.css';

interface NavItemProps {
	to: string;
	currentPath: string;
	children: React.ReactNode;
}

const Navbar = () => {
	const [isOpen, setOpen] = useState(false);
	const location = useLocation();
	const [dropdownOpen, setDropdownOpen] = useState(false);

	return (
		<nav>
			<div className='flex flex-row items-center justify-between p-4 h-fit lg:px-8'>
				<Link to={"/"} className='sm:text-lg lg:text-xl flex flex-row gap-2 items-center font-semibold'>Multiverse Researchers</Link>
				<ul className='hidden lg:flex flex-row gap-8 items-center'>
					<div className='lg:flex flex-row gap-8 items-center lg:py-6'>
						<NavItem to="/" currentPath={location.pathname}>HOME</NavItem>
						<NavItem to="/about" currentPath={location.pathname}>ABOUT</NavItem>
						<NavItem to="/research" currentPath={location.pathname}>RESEARCH</NavItem>
						<NavItem to="/papers" currentPath={location.pathname}>PAPERS</NavItem>

						{/* Programs with dropdown */}
						<div 
							className='relative' 
							onMouseEnter={() => setDropdownOpen(true)} 
							onMouseLeave={() => setDropdownOpen(false)}
						>
							<NavItem to="/programs" currentPath={location.pathname}>PROGRAMS</NavItem>
							{dropdownOpen && (
								<ul className='absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md w-48'>
									<li><Link className='block px-4 py-2 hover:bg-gray-100' to="/rewire">ReWire Program</Link></li>
									<li><Link className='block px-4 py-2 hover:bg-gray-100' to="/workshops">Workshops</Link></li>
									<li><Link className='block px-4 py-2 hover:bg-gray-100' to="/summer-assistance">Summer Program Assistance</Link></li>
									<li><Link className='block px-4 py-2 hover:bg-gray-100' to="/cold-email-assistance">Cold Email Assistance</Link></li>
								</ul>
							)}
						</div>

						<NavItem to="/contact" currentPath={location.pathname}>CONTACT</NavItem>
					</div>
					<a className='font-bold' href="https://daztyxpv.formester.com/f/6e4ea898-ec48-41c9-9570-fbe35facdc17" target="_blank">
						<div className='bg-pink-300 rounded-full py-4 px-8 hover:bg-pink-900 hover:text-white transition-colors duration-300 cursor-pointer'>JOIN</div>
					</a>
				</ul>
				<div className='block lg:hidden'><Hamburger toggled={isOpen} toggle={setOpen} /></div>
			</div>

			{isOpen && (
				<ul className='lg:hidden w-full h-[88vh] flex flex-col text-right justify-evenly text-xl p-8 bg-white-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-30 border border-gray-100 absolute'>
					<NavItem to="/" currentPath={location.pathname}>HOME</NavItem>
					<NavItem to="/about" currentPath={location.pathname}>ABOUT</NavItem>
					<NavItem to="/research" currentPath={location.pathname}>RESEARCH</NavItem>
					<NavItem to="/papers" currentPath={location.pathname}>PAPERS</NavItem>
					<NavItem to="/programs" currentPath={location.pathname}>PROGRAMS</NavItem>
					<NavItem to="/contact" currentPath={location.pathname}>CONTACT</NavItem>
				</ul>
			)}
		</nav>
	);
};

const NavItem: React.FC<NavItemProps> = ({ to, currentPath, children }) => {
	const isActive = currentPath === to;
	return (
		<Link to={to} className={isActive ? 'font-semibold' : ''}>{children}</Link>
	);
};

export default Navbar;
