import React, { useState, useRef, useEffect } from 'react';
import SlideWrapper from '../../utilities/Animations/SlideWrapper';
import ProjectDetail from './modules/ProjectDetail';
import projectData from './modules/projectData';
import { theme } from '../../theme';
import Heading from '../Heading/Heading';
import Button from '../Button/Button';
import FadeWrapper from '../../utilities/Animations/FadeWrapper';
import ScrollToTopLink from '../Scroll/ScrollToTopLink';

const Projects = ({ numProjects = 4, noBorder = false, buttonText = "More Projects", buttonLink = "/projects" }) => {
  const [projectsToShow, setProjectsToShow] = useState(numProjects === "all" ? 4 : numProjects);
  const [showLoadMore, setShowLoadMore] = useState(numProjects === "all" && projectData.length > 4);
  const [showShowLess, setShowShowLess] = useState(false);
  const [fadeInButtons, setFadeInButtons] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // New loading state
  const containerRef = useRef(null);

  const borderClass = noBorder ? '' : 'border-b-2 border-light-hover dark:border-dark-hover';

  // Prefetch next items if there are more available
  const prefetchItems = () => {
    const nextItems = projectData.slice(projectsToShow, projectsToShow + 2);
    return nextItems;
  };

  const handleLoadMore = () => {
    setIsLoading(true); // Start loading state
    const newCount = projectsToShow + 2;

    // Simulate fetching data
    setTimeout(() => {
      setProjectsToShow(newCount);
      setShowShowLess(true);
      setShowLoadMore(newCount < projectData.length);
      setIsLoading(false); // End loading state
      
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
          setTimeout(() => setFadeInButtons(true), 300); // Adjust delay as needed
        });
      });
    }, 500); // Simulate network delay (adjust as needed)
  };
  
  const handleShowLess = () => {
    const newCount = projectsToShow - 2;
    setProjectsToShow(newCount);
    setShowShowLess(newCount > 4);
    setShowLoadMore(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
        setTimeout(() => setFadeInButtons(true), 300); // Adjust delay as needed
      });
    });
  };

  useEffect(() => {
    // Reset fadeInButtons to false when projectsToShow changes
    setFadeInButtons(false);
  }, [projectsToShow]);

  useEffect(() => {
    // Prefetch items when component mounts
    prefetchItems();
  }, []);

  return (
    <div id="projects" ref={containerRef} className={`py-20 ${theme.sectionPaddings.horizontalPx} ${borderClass}`}>
      <div className="text-center">
        <Heading
          title="Successful Projects I'm Proud Of"
          text="Nothing beats gaining experience through real-life projects."
        />
      </div>
      <div>
        {projectData.slice(0, projectsToShow).map((project, index) => (
          <FadeWrapper key={index} index={index}>
            <ProjectDetail
              image={project.image}
              title={project.title}
              description={project.description}
              siteLink={project.siteLink}
              gitLink={project.gitLink}
              index={index}
            />
          </FadeWrapper>
        ))}
      </div>
      <div className="flex flex-col md:flex-row gap-4 items-center justify-center text-center">
        <FadeWrapper isVisible={fadeInButtons}>
          {showLoadMore && (
            <Button text={isLoading ? "Loading..." : "Load More"} onClick={handleLoadMore} disabled={isLoading} />
          )}
        </FadeWrapper>
        <FadeWrapper isVisible={fadeInButtons}>
          {showShowLess && (
            <Button text="Show Less" onClick={handleShowLess} />
          )}
        </FadeWrapper>
        <FadeWrapper>
          {numProjects !== "all" && (
            <ScrollToTopLink>
              <Button text={buttonText} to={buttonLink} />
            </ScrollToTopLink>
          )}
        </FadeWrapper>
      </div>
    </div>
  );
};

export default Projects;
