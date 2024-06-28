import React from "react";
import Heading from "../Heading/Heading";
import { theme } from "../../theme";
import Service from "../Service/Service";

const Content = ({ id }) => {
  return (
    <section id={id} className={`${theme.content.bgColor} py-12`}>
      <div className="container mx-auto px-12 my-8">
        <div className="text-center mb-8">
          <Heading title="Our Services" text="We offer a wide range of services to meet your needs." />
        </div>
        <div className="flex flex-wrap -mx-4">
          <Service
            icon="settings"
            title="Service One"
            description="Description of the first service offered by the company."
          />
          <Service
            icon="users"
            title="Service Two"
            description="Description of the second service offered by the company. Description of the second service offered by the company. 
            Description of the second service offered by the company."
          />
          <Service
            icon="briefcase"
            title="Service Three"
            description="Description of the third service offered by the company. loremmmmmmmmmmmsdafadfadfdfsdg"
          />
        </div>
      </div>
    </section>
  );
};

export default Content;
