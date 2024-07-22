import React from "react";
import Hero from "../../Components/Hero/Hero";
import Service from "../../Components/Service/Service";
import Tools from "../../Components/Tools/Tools";
import Statistics from "../../Components/Statistics/Statistics";
import Projects from "../../Components/Projects/Projects";
import AboutMe from "../../Components/AboutMe/AboutMe";
import { theme } from "../../theme";

const Home = ({darkMode}) => {
  return (
    <div className={`py-24 ${theme.sectionBg.bgColor} ${theme.sectionBg.textColor}`}>
      <Hero />
      <Service />
      <Tools />
      {/* <Statistics /> */}
      <Projects />
      <AboutMe />
    </div>
  );
}

export default Home;
