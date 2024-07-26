import { theme } from "../../theme";
import Heading from "../../Components/Heading/Heading";
import ContactForm from "../../Components/ContactForm/ContactForm";


const Contact = ({darkMode}) => {
    return ( <div className={`py-44 overflow-hidden ${theme.sectionPaddings.horizontalPx} ${theme.sectionBg.bgColor} ${theme.sectionBg.textColor}`}>
        <div className="text-center">
        <Heading
          title="Let's achieve the impossible together"
          text="If you need help or have some questions, I'll be there ready and happy to help."
        />
      </div>


      <div className="py-10">
        {/* <ContactForm formFields={formFields} rowConfig={originalRowConfig} /> */}
      </div>

        {/* Forms here now */}


    </div> );
}
 
export default Contact;