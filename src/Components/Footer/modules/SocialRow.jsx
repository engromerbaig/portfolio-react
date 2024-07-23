import { socialMediaLinks } from "./socialMediaLinks";

const SocialRow = () => {
    return (           <div className="flex gap-6">
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
);
}
 
export default SocialRow;