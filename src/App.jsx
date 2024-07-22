import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import { useState } from 'react';
import { links } from './Components/Navbar/modules/links';


const App = () => {
    const [darkMode,setDarkMode] = useState(false);

    const toggleDarkMode =() =>{
        setDarkMode(!darkMode);
    }




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
