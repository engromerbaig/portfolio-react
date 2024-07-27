import { theme } from "../../theme";
import Projects from "../../Components/Projects/Projects";
import FadeInSection from "../../utilities/Animations/FadeInSection";

const Project = ({}) => {
    return ( <div className={`py-24 overflow-hidden ${theme.sectionBg.bgColor} ${theme.sectionBg.textColor}`}>
        <FadeInSection>

        <Projects noBorder={true} numProjects="all" />

        </FadeInSection>
      </div> );
}
 
export default Project;