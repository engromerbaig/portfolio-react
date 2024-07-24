import Heading from "../Heading/Heading";
import ProjectDetail from "./modules/ProjectDetail";
import projectData from "./modules/projectData";
import Button from "../Button/Button";
import { theme } from "../../theme";

const Projects = () => {
    return ( 
    
    
      <div id="projects" className={`py-20 border-b-2 ${theme.sectionPaddings.horizontalPx} border-light-hover dark:border-dark-hover`}>

      <div className="text-center">
        <Heading 
          title="Successful Projects I'm Proud Of" 
          text="Nothing beats gaining experience through real-life projects." 
        />
      </div>
      {/* Here we create project details */}

      <div>
      {projectData.map((project, index) => (
        <ProjectDetail
          key={index}
          image={project.image}
          title={project.title}
          description={project.description}
          siteLink={project.siteLink}
          gitLink={project.gitLink}

          index={index}
        />
      ))}
    </div>

    <div className="text-center">
            <Button
              text="More Projects"
             to=""
            />
      </div>

    </div> );
}
 
export default Projects;