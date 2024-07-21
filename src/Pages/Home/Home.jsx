import React from "react";
import Hero from "../../Components/Hero/Hero";
import Service from "../../Components/Service/Service";
import Tools from "../../Components/Tools/Tools";
import { theme } from "../../theme";

const Home = ({darkMode}) => {
  return (
    <div className={`py-24 ${theme.sectionBg.bgColor} ${theme.sectionBg.textColor}`}>
      <Hero />
      <Service />
    <Tools />

    </div>
  );
}

export default Home;
