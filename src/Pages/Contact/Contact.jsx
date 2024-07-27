import { theme } from "../../theme";
import Heading from "../../Components/Heading/Heading";
import ContactForm from "../../Components/ContactForm/ContactForm";
import formFields from "../../Components/ContactForm/modules/formFields";
import { originalRowConfig } from "../../Components/ContactForm/modules/originalRowConfig";
import FadeInSection from "../../utilities/Animations/FadeInSection";
import SlideWrapper from "../../utilities/Animations/SlideWrapper";


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

        </SlideWrapper>
      </div>

        {/* Forms here now */}


        {/* now contact fields */}

        <div className="flex justify-center w-full ">
        <div className="flex flex-col gap-4 md:flex-row items-start justify-center">
        <h1 className="text-theme-blue font-bold">title </h1>
        <div className="flex flex-col">
        <h1>header</h1>
        <p>email</p>

        </div>

        </div>


        </div>


        </FadeInSection>
      


    </div> );
}
 
export default Contact;