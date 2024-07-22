import { links } from "../Navbar/modules/links";

const Footer = () => {
    return ( 
        // parent for full footer
    <div>

    {/* parent for main footer */}
    <div className="grid grid-col md:grid-cols-3 items-center justify-center border-t-2 border-b-2 border-gray-200 px-10 py-14">
    <div className="flex flex-col gap-4">
    <h1 className="text-2xl">About</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, quaerat vero corrupti, mollitia soluta eaque voluptatum ex praesentium cupiditate accusamus quasi? Exercitationem maiores soluta enim natus commodi doloribus quidem quis?</p>
        </div>

        <div className="flex flex-col gap-4">
      
        <h1 className="text-2xl">Links</h1>

        {links.map((link, index) => (
        <p
          key={index}
          to={link.to}
        >
          {link.label}
        </p>
      ))}       
        </div>

        <div className="flex flex-col gap-4">
        <h1 className="text-2xl">Contact</h1>
            <p>omerbaigde@gmail.com</p>
            <p>Hamburg/Germany</p>
            <p>+4915217143817</p>

            <div className="flex gap-4">
                <p>github</p>
                <p>Linkedin</p>
                <p>upwork</p>
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