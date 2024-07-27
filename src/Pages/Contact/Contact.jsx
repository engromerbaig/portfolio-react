import { theme } from "../../theme";
import Heading from "../../Components/Heading/Heading";
import ContactForm from "../../Components/ContactForm/ContactForm";
import formFields from "../../Components/ContactForm/modules/formFields";
import { originalRowConfig } from "../../Components/ContactForm/modules/originalRowConfig";
import FadeInSection from "../../utilities/Animations/FadeInSection";
import SlideWrapper from "../../utilities/Animations/SlideWrapper";
import ContactInfo from "../../Components/ContactInfo/ContactInfo";
import { contactInfo } from "../../Components/Footer/modules/contactInfo";

const Contact = ({darkMode}) => {
    return ( <div className={`py-44 overflow-hidden ${theme.sectionBg.bgColor} ${theme.sectionBg.textColor}`}>
        <FadeInSection>
        <div className={` text-center  ${theme.sectionPaddings.horizontalPx} `}>
        <Heading
          title="Let's achieve the impossible together"
          text="If you need help or have some questions, I'll be there ready and happy to help."
        />
      </div>


      <div className="py-10 px-4 md:px-80">
        <SlideWrapper>

        <ContactForm formFields={formFields} rowConfig={originalRowConfig} />
        <ContactInfo contactInfo={contactInfo}     />


        </SlideWrapper>
      </div>

        {/* Forms here now */}


        {/* now contact fields */}



        </FadeInSection>
      


    </div> );
}
 
export default Contact;