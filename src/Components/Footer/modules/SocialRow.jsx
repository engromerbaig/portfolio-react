import { socialMediaLinks } from "./socialMediaLinks";

const SocialRow = ({justify}) => {
    return (           <div className={`flex  gap-6 ${justify}`}>
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
              className={`text-3xl  text-body-text-light dark:text-body-text-dark hover:text-theme-blue hover:dark:text-theme-blue transition-colors`}
              />
            </a>
          );
        })}
      </div>
);
}
 
export default SocialRow;