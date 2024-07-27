import React from "react";

function ContactInfo({ contactInfo }) {
  return (
    <div className="grid md:grid-cols-2 justify-center w-full py-20 gap-4 lg:gap-8">
      {contactInfo.map((info, index) => (
        <React.Fragment key={index}>
          {/* lhs - Heading */}
          <div className="flex flex-col items-start">
            <h1 className="text-theme-blue font-bold text-start">{info.heading}</h1>
          </div>
          {/* rhs - Title and Address */}
          <div className="flex flex-col items-start">
            <h2 className="font-semibold">{info.title}</h2>
            {info.link ? (
              <a href={info.link} target="_blank" rel="noopener noreferrer">
                {info.address}
              </a>
            ) : (
              <p>{info.address}</p>
            )}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

export default ContactInfo;
