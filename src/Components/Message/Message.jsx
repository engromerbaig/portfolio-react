import Heading from "../Heading/Heading";
import Button from "../Button/Button";

const Message = () => {
    return ( <div className="w-full bg-theme-blue text-center py-20 px-20">
        <Heading 
        title="What's holding you back? Send me a message!"

        />
        <Button
        text="Contact Us"
        to="/contact-us"
        />
    </div> );
}
 
export default Message;