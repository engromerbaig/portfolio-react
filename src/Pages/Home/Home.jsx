import React from "react";
import Hero from "../../Components/Hero/Hero";
import Service from "../../Components/Service/Service";
import Tools from "../../Components/Tools/Tools";
import Statistics from "../../Components/Statistics/Statistics";
import Projects from "../../Components/Projects/Projects";
import AboutMe from "../../Components/AboutMe/AboutMe";
import Message from "../../Components/Message/Message";
import { theme } from "../../theme";

const Home = ({darkMode}) => {
  return (
    <div className={`py-24 ${theme.sectionBg.bgColor} ${theme.sectionBg.textColor}`}>
      <Hero />
      <Service />
      <Tools />
      <Statistics />
      <Projects />
      <AboutMe />
      <Message />
    </div>
  );
}

export default Home;
