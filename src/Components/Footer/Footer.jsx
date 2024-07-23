import { links } from "../Navbar/modules/links";
import { Link } from "react-router-dom";
import { socialMediaLinks } from "./modules/socialMediaLinks";


const Footer = ({ darkMode }) => {
  return (
    // parent for full footer
    <div className="bg-theme-light dark:bg-theme-dark text-body-text-light dark:text-body-text-dark">
      {/* parent for main footer */}
      <div className="grid grid-col md:grid-cols-12 justify-center items-start border-t-2 border-b-2 border-gray-200 px-28 py-14 gap-10 md:gap-4">
        <div className="col-span-6 flex flex-col gap-4 pr-20">
          <h1>About</h1>
          <p className="leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, quaerat
            vero corrupti, mollitia soluta eaque voluptatum ex praesentium
            cupiditate accusamus quasi? Exercitationem maiores soluta enim natus
            commodi doloribus quidem quis?
          </p>
        </div>

        <div className="col-span-3 flex flex-col gap-4">
          <h1>Links</h1>
          {links.map((link, index) => {
            const Icon = link.icon; // Extract icon component from link

            return (
              <Link
                key={index}
                to={link.to}
                className="text-theme-blue font-semibold"
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="col-span-3 flex flex-col gap-4">
          <h1>Contact</h1>
          <a href="mailto:omerbaigde@gmail.com">omerbaigde@gmail.com</a>
          <p>Hamburg, Germany</p>
          <a
            href="https://wa.me/4915217143817"
            target="_blank"
            rel="noopener noreferrer"
          >
            +4915217143817
          </a>

          <div className="flex gap-4">
            {/* social row now */}
            <div className="flex gap-6">
              {socialMediaLinks.map((link, index) => {
                const Icon = link.icon; // Extract icon component from link

                return (
                  <a
                    key={index}
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon 
                    className={`text-3xl  text-body-text-light dark:text-body-text-dark`}
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* site credits */}
      <div className="flex justify-center items-center py-3 border-b-2 border-gray-200">
        Copyright © Muhammad Omer Baig 2024.
      </div>
    </div>
  );
};

export default Footer;
