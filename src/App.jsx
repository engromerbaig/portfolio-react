import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import { useState } from 'react';


const App = () => {
    const [darkMode,setDarkMode] = useState(false);

    const toggleDarkMode =() =>{
        setDarkMode(!darkMode);
    }


    const links = [
        { label: 'Heading1', to: '/about-us' },
        { label: 'Heading2', to: '/features' },
        { label: 'Heading3', to: '/resources' },
        { label: 'Heading4', to: '/pricing' },
        { label: 'Heading5', to: '/contact-us' }
    ];

    return (
        <Router>
        <div className={darkMode ? 'dark' : ''}>
        <Navbar links={links} darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
                <Routes>
                <Route path="/" element={<Home/>} darkMode={darkMode} />

                </Routes>
        <Footer />
            </div>
        </Router>
    );
}

export default App;
