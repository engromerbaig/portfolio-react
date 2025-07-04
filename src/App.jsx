// src/App.js

import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { links } from './Components/Navbar/modules/links';
import CircleTracker from './Components/CircleTracker/CircleTracker';
import PreLoader from './utilities/Loaders/PreLoader/PreLoader';

// Lazy load the pages
const Home = lazy(() => import('./Pages/Home/Home'));
const Contact = lazy(() => import('./Pages/Contact/Contact'));
const Project = lazy(() => import('./Pages/Project/Project'));
const Work = lazy(() => import('./Pages/WorkExperience/Work'));
const NotFound = lazy(() => import('./Pages/NotFound/NotFound'));
const TechStack = lazy(() => import('./Pages/TechStack/TechStack'));

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    return (
        <Router>
            <div className={darkMode ? 'dark' : ''}>
                <Suspense fallback={<PreLoader />}>
                    <Navbar links={links} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                    <Routes>
                        <Route path="/" element={
                            <>
                                <Home darkMode={darkMode} />
                                <CircleTracker /> {/* Only render on Home page */}
                            </>
                        } />
                        <Route path="/contact" element={<Contact darkMode={darkMode} />} />
                        <Route path="/projects" element={<Project />} />
                        <Route path="/work-experience" element={<Work />} />
                        <Route path="/tech-stack" element={<TechStack />} />
                        <Route path="*" element={<NotFound darkMode={darkMode} />} /> {/* Catch-all route for 404 */}
                    </Routes>
                    <Footer darkMode={darkMode} />
                </Suspense>
            </div>
        </Router>
    );
}

export default App;
