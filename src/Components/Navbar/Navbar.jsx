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
    <nav className={` absolute px-8  pb-6 pt-10 flex justify-between items-center w-full top-0 z-10 bg-transparent`}>
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
