import Heading from "../Heading/Heading";
import ProjectDetail from "./modules/ProjectDetail";


const Projects = () => {
    return ( <div>

<div className="text-center">
        <Heading 
          title="Projects" 
          text="My Recent Projects." 
        />
      </div>
      {/* Here we create project details */}

     <ProjectDetail/>

    </div> );
}
 
export default Projects;