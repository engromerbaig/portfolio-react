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
    theme.button.bgColor,
    theme.button.textColor,
    theme.button.borderColor,
    theme.button.borderWidth,
    theme.button.rounded,
    padding,
    'rounded-corner-border'  // Add the new class for the border effect
  ];

  const hoverClasses = hover
    ? [
        theme.button.hoverBgColor,
        theme.button.hoverTextColor,
        // SKEW ANIMATION
        'hover:transition duration-300 ease-in-out transform hover:skew-x-6', 
      ]
    : [];

  return (
    <ButtonComponent
      to={to}
      href={href}
      className={[...baseClasses, ...hoverClasses, className].join(' ')}
      {...props}
    >
      {text}
    </ButtonComponent>
  );
};

export default Button;
