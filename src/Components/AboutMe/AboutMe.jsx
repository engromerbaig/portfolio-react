import React, { useState } from 'react';
import omerImage from '../../assets/images/omer.jpg';
import Heading from '../Heading/Heading';

const AboutMe = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleText = () => {
        setIsExpanded(!isExpanded);
    };

    const shortText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus distinctio tempore, cupiditate pariatur debitis magnam?";
    const fullText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus distinctio tempore, cupiditate pariatur debitis magnam? Tenetur recusandae pariatur dolor, esse minus expedita itaque vero sint dignissimos qui ad, delectus laudantium.";

    return (
        <div className="grid md:grid-cols-2 py-16 px-16">
            <div className="flex justify-center p-8">
                <img src={omerImage} alt="Hero" className="w-full lg:w-1/2 aspect-auto shadow-aboutme-image" />
            </div>

            <div className="flex flex-col px-12">
                <Heading title="About Me, I'm Muhammad Omer Baig" />
                <p>
                    {isExpanded ? fullText : shortText}
                </p>
                <button
                    onClick={toggleText}
                    className="mt-4 text-theme-blue hover:underline text-left"
                >
                    {isExpanded ? 'Show Less' : 'Read More'}
                </button>
            </div>
        </div>
    );
}

export default AboutMe;
