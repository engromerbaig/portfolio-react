import React from "react";

    function ContactInfo({}) {
      return (<div className="flex justify-center w-full ">
        <div className="flex flex-col gap-4 md:flex-row items-start justify-center">
        <h1 className="text-theme-blue font-bold text-start">title </h1>
        <div className="flex flex-col">
        <h1>header</h1>
        <p>email</p>

        </div>

        </div>


        </div>);
    }

    export default ContactInfo;
  
  