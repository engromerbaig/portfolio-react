import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import OffCanvas from '../OffCanvas/OffCanvas';
import logo from '../../assets/logo.png';
import { theme } from '../../theme'; // Importing theme variables

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const closeMenu = () => {
        setIsMenuOpen(false);
    }

    return (
        <>
            <nav className={`${theme.navbar.bgColor} px-6 py-4 flex justify-between items-center border-b border-gray-200 shadow-sm`}>
                <div className="flex items-center">
                    <Link to="/">
                        <img src={logo} alt="Logo" className="h-10 mx-10 cursor-pointer" /> {/* Making the logo clickable */}
                    </Link>
                </div>
                <div className="flex items-center">
                <span className={`${theme.navbar.textColor} mr-2`}>Button</span>
                    <FaBars className={`${theme.navbar.textColor} text-2xl mx-10 cursor-pointer`} onClick={toggleMenu} />
                </div>
            </nav>
            <OffCanvas isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
        </>
    );
}

export default Navbar;
