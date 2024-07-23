import React from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { theme } from '../../theme'; // Importing theme variables
import './OffCanvas.css'; // Import the CSS file for animation
import { links } from '../Navbar/modules/links';

const OffCanvas = ({ isMenuOpen, closeMenu,darkMode,toggleDarkMode }) => {



    const scrollTo = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
        closeMenu();
    };





    return (
        <>
            {isMenuOpen && (
                <>
                    <div 
                        className={`${theme.offCanvas.overlayColor} fixed inset-0 z-40`}
                        onClick={closeMenu}
                    />
                </>
            )}
            <div className={`offcanvas-container fixed top-0 right-0 h-full w-96 ${theme.offCanvas.bgColor} ${theme.offCanvas.textColor} dark:bg-slate-500 flex flex-col items-center pt-4 transition-transform duration-300 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} z-50`}>
                <FaTimes className="text-2xl cursor-pointer mb-6 self-end mr-4 mt-4" onClick={closeMenu} />
                {links.map((link, index) => (
                        <Link key={index} to={link.to} className={`${theme.navbar.textColor} mr-4`}>{link.label}</Link>
                    ))}

                {/* theme toggler */}
                <button 
                    onClick={toggleDarkMode} 
                   
                >
                    {darkMode ? 'Light' : 'Dark'}
                </button>
            </div>
        </>
    );
}

export default OffCanvas;
