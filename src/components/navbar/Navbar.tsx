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

    return (
        <nav>
            <div className='flex flex-row items-center justify-between p-4 lg:p-8'>
                <Link to={"/"} className='sm:text-lg lg:text-xl flex flex-row gap-2 items-center font-semibold'>Multiverse Researchers</Link>
                <ul className='hidden lg:flex flex-row gap-8'>
                    <NavItem to="/" currentPath={location.pathname}>HOME</NavItem>
                    <NavItem to="/about" currentPath={location.pathname}>ABOUT</NavItem>
                    <NavItem to="/research" currentPath={location.pathname}>RESEARCH</NavItem>
                    <NavItem to="/publications" currentPath={location.pathname}>PUBLICATIONS</NavItem>
                    <NavItem to="/contact" currentPath={location.pathname}>CONTACT</NavItem>
                </ul>
                <div className='hidden lg:flex'><Link to={"/"}><img src="/logo.png" alt="" /> Search bar placeholder</Link></div>
                <div className='block lg:hidden'><Hamburger toggled={isOpen} toggle={setOpen} /></div> {/* add search bar feature */}
            </div>

            {isOpen && (
                <ul className='lg:hidden w-full h-[88vh] flex flex-col text-right justify-evenly text-xl p-8 bg-white-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-30 border border-gray-100 absolute'>
                    <NavItem to="/" currentPath={location.pathname}>HOME</NavItem>
                    <NavItem to="/about" currentPath={location.pathname}>ABOUT</NavItem>
                    <NavItem to="/research" currentPath={location.pathname}>RESEARCH</NavItem>
                    <NavItem to="/publications" currentPath={location.pathname}>PUBLICATIONS</NavItem>
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