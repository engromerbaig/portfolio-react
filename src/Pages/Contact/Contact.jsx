import { theme } from "../../theme";
import Heading from "../../Components/Heading/Heading";
import ContactForm from "../../Components/ContactForm/ContactForm";
import formFields from "../../Components/ContactForm/modules/formFields";
import { originalRowConfig } from "../../Components/ContactForm/modules/originalRowConfig";
import FadeInSection from "../../utilities/Animations/FadeInSection";


const Contact = ({darkMode}) => {
    return ( <div className={`py-44 overflow-hidden ${theme.sectionPaddings.horizontalPx} ${theme.sectionBg.bgColor} ${theme.sectionBg.textColor}`}>
        <FadeInSection>
        <div className="text-center">
        <Heading
          title="Let's achieve the impossible together"
          text="If you need help or have some questions, I'll be there ready and happy to help."
        />
      </div>


      <div className="py-10 px-14 md:px-80">
        <ContactForm formFields={formFields} rowConfig={originalRowConfig} />
      </div>

        {/* Forms here now */}


        </FadeInSection>
      


    </div> );
}
 
export default Contact;