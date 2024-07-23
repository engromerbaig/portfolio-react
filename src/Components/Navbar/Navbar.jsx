import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import OffCanvas from '../OffCanvas/OffCanvas';
import logoBlack from '../../assets/images/logo-black.png';
import logoWhite from '../../assets/images/logo-white.png';
import { theme } from '../../theme'; // Importing theme variables
import './modules/hamburger.css'
import { MdDarkMode } from "react-icons/md";


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
    <nav className={` absolute px-20  py-6 flex justify-between items-center w-full top-0 z-10 bg-transparent border-b border-gray-400 shadow-sm`}>
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
                    {/* {links.map((link, index) => (
                        <Link key={index} to={link.to} className={`${theme.navbar.textColor} mr-4`}>{link.label}</Link>
                    ))} */}



                    {/* theme icon */}
                    {/* custom hamburger */}
                    <div className=" flex gap-10 justify-center items-center">
                    <MdDarkMode
      className={`text-3xl cursor-pointer transition-colors  ${
        darkMode ? 'text-white' : 'text-black'
      }`}
      onClick={toggleDarkMode}
    />
                    <button onClick={toggleMenu} className={`relative ${isMenuOpen ? 'open' : ''}`}>
                    <div>
                        <div className="hamburger">
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                        </div>
                    </div>
                    </button>
                </div>
                   

                </div>
            </nav>
            <OffCanvas isMenuOpen={isMenuOpen} closeMenu={closeMenu} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />        </>
    );
}

export default Navbar;
