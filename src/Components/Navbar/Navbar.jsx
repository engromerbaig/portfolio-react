import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import OffCanvas from '../OffCanvas/OffCanvas';
import logoBlack from '../../assets/images/logo-black.png';
import logoWhite from '../../assets/images/logo-white.png';
import { theme } from '../../theme'; // Importing theme variables

const Navbar = ({ links,darkMode,toggleDarkMode}) => { // Receive props here
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const closeMenu = () => {
        setIsMenuOpen(false);
    }

    return (
        <>
            <nav className={`${theme.navbar.bgColor} dark:bg-slate-600 px-6 py-4 flex justify-between items-center border-b border-gray-200 shadow-sm`}>
                <div className="flex items-center">
                    <Link to="/">
                        <img 
                            src={darkMode ? logoWhite : logoBlack} 
                            alt="Logo" 
                            className="h-10 mx-10 cursor-pointer" 
                        />
                    </Link>
                </div>
                <div className="flex items-center">
                    {/* Mapping over links to create navigation items */}
                    {links.map((link, index) => (
                        <Link key={index} to={link.to} className={`${theme.navbar.textColor} mr-4`}>{link.label}</Link>
                    ))}
                    <FaBars className={`${theme.navbar.textColor} text-2xl mx-10 cursor-pointer`} onClick={toggleMenu} />
                </div>
            </nav>
            <OffCanvas isMenuOpen={isMenuOpen} closeMenu={closeMenu} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />        </>
    );
}

export default Navbar;
