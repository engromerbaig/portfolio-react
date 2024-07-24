import React from 'react';
import SlideWrapper from '../../utilities/Animations/SlideWrapper';
import ProjectDetail from './modules/ProjectDetail';
import projectData from './modules/projectData';
import { theme } from '../../theme';
import Heading from '../Heading/Heading';
import Button from '../Button/Button';
import FadeWrapper from '../../utilities/Animations/FadeWrapper';

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
        <Button text="More Projects" to="/projects" />
      </FadeWrapper>
    </div>
  );
};

export default Projects;
