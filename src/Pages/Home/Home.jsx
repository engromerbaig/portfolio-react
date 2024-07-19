import React from "react";
import Hero from "../../Components/Hero/Hero";
import Service from "../../Components/Service/Service";
import Tools from "../../Components/Tools/Tools";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="my-80">
        <Service 
          icon="settings" 
          title="Settings" 
          description="Manage your settings here."
        />
        <Service 
          icon="users" 
          title="Users" 
          description="Manage your users here."
        />
        <Service 
          icon="briefcase" 
          title="Briefcase" 
          description="Manage your projects here."
        />
      </div>
    <Tools />

    </div>
  );
}

export default Home;
