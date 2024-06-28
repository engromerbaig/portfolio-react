import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';


const App = () => {
    const links = [
        { label: 'Heading1', to: '/about-us' },
        { label: 'Heading2', to: '/features' },
        { label: 'Heading3', to: '/resources' },
        { label: 'Heading4', to: '/pricing' },
        { label: 'Heading5', to: '/contact-us' }
    ];

    return (
        <Router>
            <div>
                <Navbar links={links} />
                <Routes>
                
                </Routes>
            </div>
        </Router>
    );
}

export default App;
