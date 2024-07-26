import { theme } from "../../theme";
import Heading from "../../Components/Heading/Heading";


const Contact = ({darkMode}) => {
    return ( <div className={`py-44 overflow-hidden ${theme.sectionPaddings.horizontalPx} ${theme.sectionBg.bgColor} ${theme.sectionBg.textColor}`}>
        <div className="text-center">
        <Heading
          title="Let's achieve the impossible together"
          text="If you need help or have some questions, I'll be there ready and happy to help."
        />
      </div>
    </div> );
}
 
export default Contact;