import { theme } from "../../theme";
import Projects from "../../Components/Projects/Projects";

const Project = ({}) => {
    return ( <div className={`py-24 overflow-hidden ${theme.sectionBg.bgColor} ${theme.sectionBg.textColor}`}>
        <Projects noBorder={true} numProjects="all" buttonText="Load More" />
    </div> );
}
 
export default Project;