import React from 'react';
import { Link } from 'react-router-dom';
import { theme } from '../../theme';
import './Button.css'; // Import the CSS file for animation

const Button = ({
  text,
  className = '',
  to,
  href,
  hover = false,
  padding = theme.button.padding, // Add padding with default value from theme
  ...props
}) => {
  const ButtonComponent = href ? 'a' : to ? Link : 'button';

  const baseClasses = [
    // Tailwind classes from theme

    theme.button.borderWidth,
    
    padding,
    'text-theme-blue',
    'bg-transparent',

    'btn-31'  // Add the new class for the border effect
  ];

  const hoverClasses = hover
    ? [
        
      ]
    : [];

  return (
    <ButtonComponent
      to={to}
      href={href}
      className={[...baseClasses, ...hoverClasses, className].join(' ')}
      {...props}
    >
      <span className="text-container">
        <span className="text">
          {text}
        </span>
      </span>
    </ButtonComponent>
  );
};

export default Button;
