import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav>
            <Link to={"/"}><img src="/logo.png" alt="" /> Multiverse Researchers</Link>
            <ul>
                <li><Link to={"/home"}>HOME</Link></li>
                <li><Link to={"/about"}>ABOUT</Link></li>
                <li><Link to={"/research"}>RESEARCH</Link></li>
                <li><Link to={"/publications"}>PUBLICATIONS</Link></li>
                <li><Link to={"/contact"}>CONTACT</Link></li>
            </ul>
            {/* add search bar feature */}
        </nav>
    )
}

export default Navbar