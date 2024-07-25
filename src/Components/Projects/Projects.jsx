import React from 'react';
import SlideWrapper from '../../utilities/Animations/SlideWrapper';
import ProjectDetail from './modules/ProjectDetail';
import projectData from './modules/projectData';
import { theme } from '../../theme';
import Heading from '../Heading/Heading';
import Button from '../Button/Button';
import FadeWrapper from '../../utilities/Animations/FadeWrapper';

const Projects = ({ numProjects = 4, noBorder = false, buttonText = "More Projects", buttonLink = "/projects" }) => {
  // Determine the number of projects to show
  const projectsToShow = numProjects === "all" ? projectData : projectData.slice(0, numProjects);
  const borderClass = noBorder ? '' : 'border-b-2 border-light-hover dark:border-dark-hover';

  return (
    <div id="projects" className={`py-20 ${theme.sectionPaddings.horizontalPx} ${borderClass}`}>
      <div className="text-center">
        <Heading
          title="Successful Projects I'm Proud Of"
          text="Nothing beats gaining experience through real-life projects."
        />
      </div>
      <div>
        {projectsToShow.map((project, index) => (
          <SlideWrapper key={index} index={index}>
            <ProjectDetail
              image={project.image}
              title={project.title}
              description={project.description}
              siteLink={project.siteLink}
              gitLink={project.gitLink}
              index={index}
            />
          </SlideWrapper>
        ))}
      </div>
      <FadeWrapper className="text-center">
        <Button text={buttonText} to={buttonLink} />
      </FadeWrapper>
    </div>
  );
};

export default Projects;
