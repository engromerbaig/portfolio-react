import { Link } from "react-router-dom";

const ScrollToTopLink = ({ to, children, className, ...props }) => {
  const handleLinkClick = () => {
    // Ensure method exists
    if (typeof window.scrollTo === 'function') {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth", 
        });
      }, 0);
    }
  };

  return (
    <Link to={to} className={className} onClick={handleLinkClick} {...props}>
      {children}
    </Link>
  );
};

export default ScrollToTopLink;
