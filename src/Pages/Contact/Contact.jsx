import { theme } from "../../theme";
import Heading from "../../Components/Heading/Heading";
import ContactForm from "../../Components/ContactForm/ContactForm";
import formFields from "../../Components/ContactForm/modules/formFields";
import { originalRowConfig } from "../../Components/ContactForm/modules/originalRowConfig";
import FadeInSection from "../../utilities/Animations/FadeInSection";
import SlideWrapper from "../../utilities/Animations/SlideWrapper";
import ContactInfo from "../../Components/ContactInfo/ContactInfo";
import { contactInfo } from "../../Components/Footer/modules/contactInfo";
import FadeWrapper from "../../utilities/Animations/FadeWrapper";
import SocialRow from "../../Components/Footer/modules/SocialRow";

const Contact = ({darkMode}) => {
    return ( <div className={`py-44 overflow-hidden ${theme.sectionBg.bgColor} ${theme.sectionBg.textColor}`}>
        <FadeInSection>
        <div className={` text-center  ${theme.sectionPaddings.horizontalPx} `}>
        <Heading
          title="Get in Touch"
          text="Reach out today, and let's turn your vision into reality together!"
        />
      </div>


      <div className="py-10 px-4 md:px-40 lg:px-80">
        <SlideWrapper>

        <ContactForm formFields={formFields} rowConfig={originalRowConfig} />
        <FadeWrapper>

        <ContactInfo contactInfo={contactInfo}     />
        <div className="px-8">

        <SocialRow justify="justify-between" showAlt="true"/>

        </div>


        </FadeWrapper>


        </SlideWrapper>
      </div>

        {/* Forms here now */}


        {/* now contact fields */}
        <div>


        </div>




        </FadeInSection>
      


    </div> );
}
 
export default Contact;