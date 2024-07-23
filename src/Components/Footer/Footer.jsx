import { links } from "../Navbar/modules/links";
import { Link } from "react-router-dom";
import { socialMediaLinks } from "./modules/socialMediaLinks";
import { FaGithub, FaSquareUpwork, FaLinkedin } from "react-icons/fa6";

const iconStyles = "text-3xl aspect-square text-theme-blue";


const Footer = ({ darkMode }) => {
  const renderIcon = (icon) => {
    switch (icon) {
      case 'github':
        return <FaGithub className={iconStyles} />;
      case 'upwork':
        return <FaSquareUpwork className={iconStyles} />;
      case 'linkedin':
        return <FaLinkedin className={iconStyles} />;
      default:
        return null;
    }
  };

  return (
    // parent for full footer
    <div>
      {/* parent for main footer */}
      <div className="grid grid-col md:grid-cols-12 justify-center items-start border-t-2 border-b-2 border-gray-200 px-28 py-14 gap-10 md:gap-4">
        <div className="col-span-6 flex flex-col gap-4 pr-20">
          <h1>About</h1>
          <p className="leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, quaerat vero corrupti, mollitia soluta eaque voluptatum ex praesentium cupiditate accusamus quasi? Exercitationem maiores soluta enim natus commodi doloribus quidem quis?</p>
        </div>

        <div className="col-span-3 flex flex-col gap-4">
          <h1>Links</h1>
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.to}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="col-span-3 flex flex-col gap-4">
          <h1>Contact</h1>
          <p>omerbaigde@gmail.com</p>
          <p>Hamburg/Germany</p>
          <p>+4915217143817</p>

          <div className="flex gap-4">
            <div className="flex gap-6">
              {socialMediaLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {renderIcon(link.icon)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* site credits */}
      <div className="flex justify-center items-center py-3">
        Copyright © Muhammad Omer Baig 2024.
      </div>
    </div>
  );
}

export default Footer;
