import { Link } from 'react-router-dom'
import { useState } from 'react'
import Hamburger from 'hamburger-react'
import './Navbar.css'

const Navbar = () => {
	const [isOpen, setOpen] = useState(false)

	return (
		<nav>
			<div className='flex flex-row items-center justify-between p-4 lg:p-8'>
				<Link to={"/"}><img src="/logo.png" alt="" /> Multiverse Researchers</Link>
				<ul className='hidden lg:flex flex-row gap-8'>
					<li><Link to={"/"}>HOME</Link></li>
					<li><Link to={"/about"}>ABOUT</Link></li>
					<li><Link to={"/research"}>RESEARCH</Link></li>
					<li><Link to={"/publications"}>PUBLICATIONS</Link></li>
					<li><Link to={"/contact"}>CONTACT</Link></li>
				</ul>
				<div className='hidden lg:flex'><Link to={"/"}><img src="/logo.png" alt="" /> Search bar placeholder</Link></div>
				<div className='block lg:hidden'><Hamburger toggled={isOpen} toggle={setOpen} /></div> {/* add search bar feature */}
			</div>

			{isOpen && (
				<ul className='lg:hidden w-full flex flex-col items-end gap-5 p-8 bg-white-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 border border-gray-100 absolute'>
					<li><Link to={"/"}>HOME</Link></li>
					<li><Link to={"/about"}>ABOUT</Link></li>
					<li><Link to={"/research"}>RESEARCH</Link></li>
					<li><Link to={"/publications"}>PUBLICATIONS</Link></li>
					<li><Link to={"/contact"}>CONTACT</Link></li>
				</ul>
			)}
		</nav>
	)
}

export default Navbar