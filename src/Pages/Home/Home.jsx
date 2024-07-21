import React from "react";
import Hero from "../../Components/Hero/Hero";
import Service from "../../Components/Service/Service";
import Tools from "../../Components/Tools/Tools";

const Home = ({darkMode}) => {
  return (
    <div className=" bg-white dark:bg-red-400 ">
      <Hero />
      <Service />
    <Tools />

    </div>
  );
}

export default Home;
