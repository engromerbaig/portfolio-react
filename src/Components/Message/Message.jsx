import Heading from "../Heading/Heading";
import Button from "../Button/Button";

const Message = () => {
    return ( <div className="w-full bg-theme-blue text-center py-20 my-40 px-20">
        <Heading 
        title="What's holding you back? Send me a message!"
        titleColor="text-white"

        />
        <Button
        text="Contact"
        to="/contact"
        textColor="text-white"
        hoverTextColor="#3B82F6"
        hoverBgColor="white"
        borderColor="border-white"
        />
    </div> );
}
 
export default Message;