import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Hamburger from 'hamburger-react';
import './Navbar.css';

interface NavItemProps {
	to?: string;
	currentPath: string;
	children: React.ReactNode;
	onClick?: () => void;
}

const Navbar = () => {
	const [isOpen, setOpen] = useState(false);
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false); // State for mobile dropdown
	const location = useLocation();

	// Close menu when clicking a link
	const handleLinkClick = () => {
		setOpen(false);  // Close the hamburger menu
	};

	// Toggle mobile dropdown for programs
	const toggleMobileDropdown = () => {
		setMobileDropdownOpen(!mobileDropdownOpen);
	};

	return (
		<nav className={`lg:static ${isOpen ? 'fixed top-0 left-0 w-full z-50 bg-white shadow-md' : ''}`}>
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
				<div className='block lg:hidden'>
					<Hamburger toggled={isOpen} toggle={setOpen} />
				</div>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<ul className='lg:hidden w-full flex flex-col leading-loose text-right justify-between text-xl p-8 bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-30 border border-gray-100 absolute'>
					<NavItem to="/" currentPath={location.pathname} onClick={handleLinkClick}>HOME</NavItem>
					<NavItem to="/about" currentPath={location.pathname} onClick={handleLinkClick}>ABOUT</NavItem>
					<NavItem to="/research" currentPath={location.pathname} onClick={handleLinkClick}>RESEARCH</NavItem>
					<NavItem to="/papers" currentPath={location.pathname} onClick={handleLinkClick}>PAPERS</NavItem>
					
					{/* Mobile dropdown for programs */}
					<li className='relative'>
						<div className='flex items-center justify-end' onClick={toggleMobileDropdown}>
							<span className='cursor-pointer'>PROGRAMS</span>
							<span className={`ml-2 transition-transform ${mobileDropdownOpen ? 'rotate-180' : ''}`}>▼</span> {/* Animated arrow */}
						</div>
						{mobileDropdownOpen && (
							<ul className='mt-2 rounded-md leading-normal'>
								<li><Link className='block px-4 py-2' to="/rewire" onClick={handleLinkClick}>ReWire Program</Link></li>
								<li><Link className='block px-4 py-2' to="/workshops" onClick={handleLinkClick}>Workshops</Link></li>
								<li><Link className='block px-4 py-2' to="/summer-assistance" onClick={handleLinkClick}>Summer Program Assistance</Link></li>
								<li><Link className='block px-4 py-2' to="/cold-email-assistance" onClick={handleLinkClick}>Cold Email Assistance</Link></li>
							</ul>
						)}
					</li>

					<NavItem to="/contact" currentPath={location.pathname} onClick={handleLinkClick}>CONTACT</NavItem>
				</ul>
			)}
		</nav>
	);
};

const NavItem: React.FC<NavItemProps> = ({ to, currentPath, children, onClick }) => {
	const isActive = currentPath === to;
	return (
		<Link to={to || '#'} className={isActive ? 'font-semibold' : ''} onClick={onClick}>
			{children}
		</Link>
	);
};

export default Navbar;