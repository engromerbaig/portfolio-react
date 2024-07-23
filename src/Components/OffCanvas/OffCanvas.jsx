import React from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { links } from '../Navbar/modules/links'; // Adjust path if necessary

const OffCanvas = ({ isMenuOpen, closeMenu, darkMode, toggleDarkMode }) => {
    const scrollTo = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
        closeMenu();
    };

    return (
        <>
            {isMenuOpen && (
                <div 
                    className="fixed inset-0 z-40 bg-black bg-opacity-50" // Adjust overlay color
                    onClick={closeMenu}
                />
            )}
            <div className={`fixed top-0 right-0 h-full w-96 bg-white text-black dark:bg-slate-500 dark:text-white flex flex-col items-center pt-4 transition-transform duration-300 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} z-50`}>
                <FaTimes className="text-2xl cursor-pointer mb-6 self-end mr-4 mt-4" onClick={closeMenu} />
                {links.map((link, index) => {
                    const Icon = link.icon; // Extract icon component from link
                    return (
                        <Link 
                            key={index} 
                            to={link.to} 
                            className="flex items-center w-full text-xl text-start p-4 hover:bg-gray-200 dark:hover:bg-gray-700"
                            onClick={closeMenu}
                        >
                            <Icon className="mr-4" /> {/* Icon with margin */}
                            {link.label}
                        </Link>
                    );
                })}
                <button 
                    onClick={toggleDarkMode} 
                    className="mt-6 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                    {darkMode ? 'Light' : 'Dark'}
                </button>
            </div>
        </>
    );
};

export default OffCanvas;
