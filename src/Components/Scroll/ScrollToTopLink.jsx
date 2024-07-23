import { Link } from "react-router-dom";

const ScrollToTopLink = ({ to, children, className, ...props }) => {
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  return (
    <Link to={to} className={className} onClick={handleLinkClick} {...props}>
      {children}
    </Link>
  );
};

export default ScrollToTopLink;
