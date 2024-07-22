import Heading from "../Heading/Heading";
import ProjectDetail from "./modules/ProjectDetail";
import projectData from "./modules/projectData";


const Projects = () => {
    return ( <div>

<div className="text-center">
        <Heading 
          title="Projects" 
          text="My Recent Projects." 
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
          index={index}
        />
      ))}
    </div>

    </div> );
}
 
export default Projects;