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

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    return (
        <Router>
            <div className={darkMode ? 'dark' : ''}>
                <Navbar links={links} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <Suspense fallback={<PreLoader />}>
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
                    </Routes>
                </Suspense>
                <Footer darkMode={darkMode} />
            </div>
        </Router>
    );
}

export default App;
