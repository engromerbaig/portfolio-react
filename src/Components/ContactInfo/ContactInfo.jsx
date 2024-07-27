import React from "react";

function ContactInfo({ contactInfo }) {
  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col gap-4 md:flex-row items-start justify-center">
        {contactInfo.map((info, index) => (
          <div key={index} className="flex flex-col items-start">
            <h1 className="text-theme-blue font-bold text-start">{info.heading}</h1>
            <div className="flex flex-col">
              <h2>{info.title}</h2>
              {info.link ? (
                <a href={info.link} target="_blank" rel="noopener noreferrer">
                  {info.address}
                </a>
              ) : (
                <p>{info.address}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactInfo;
