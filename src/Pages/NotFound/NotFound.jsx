// src/Pages/NotFound/NotFound.js

import React from 'react';
import { theme } from '../../theme';
import Heading from '../../Components/Heading/Heading';
import Button from '../../Components/Button/Button';

const NotFound = () => {
    return (
        <div className={`py-24 overflow-hidden ${theme.sectionBg.bgColor} ${theme.sectionBg.textColor}`}>
        <div className={`${theme.sectionPaddings.horizontalPx} py-20 text-center `}>
          <Heading
            title="404 Error"
            text="Oops! Page Not Found"
          />
          <p className='pb-8'>It looks like the page you’re looking for doesn’t exist.</p>
          <Button text="Return to Home" to="/" />

        </div>

        </div>
    );
}

export default NotFound;
