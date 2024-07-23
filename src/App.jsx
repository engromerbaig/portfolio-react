// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import { useState } from 'react';
import { links } from './Components/Navbar/modules/links';
import Contact from './Pages/Contact/Contact';
import CircleTracker from './Components/CircleTracker/CircleTracker';
const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    return (
        <Router>
            <div className={darkMode ? 'dark' : ''}>
                <Navbar links={links} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <Routes>
                    <Route path="/" element={<Home />} darkMode={darkMode} />
                    <Route path="/contact" element={<Contact />} darkMode={darkMode} />
                </Routes>
                <Footer darkMode={darkMode} />
                <CircleTracker /> {/* Add the CircleTracker component */}
            </div>
        </Router>
    );
}

export default App;
