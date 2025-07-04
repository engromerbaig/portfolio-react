import React, { useState } from 'react';
import { theme } from '../../theme';
import JobProfiles from '../../Components/JobProfiles/JobProfiles';
import Heading from '../../Components/Heading/Heading';
import FadeInSection from '../../utilities/Animations/FadeInSection';

const Work = () => {
  const [selectedTab, setSelectedTab] = useState(0); // Initialize state with the first tab (0)

  return (
    <FadeInSection>
      <div className={`py-24 pb-40 overflow-hidden ${theme.sectionBg.bgColor} ${theme.sectionBg.textColor} `}>
          <div className={`${theme.sectionPaddings.horizontalPx} flex flex-col items-center py-10 text-center`}>
          <Heading
            title="Work Experience"
            text="With almost 4 years of experience, I’ve grown from front-end development into full-stack work with the MERN stack. I specialize in building responsive UIs and scalable backends, continuously learning and adapting to new technologies. I've worked with companies in Pakistan and Germany, as well as on freelance projects, both remotely and on-site."
            textWidth='max-w-3xl'
          />
        </div>

        <JobProfiles selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

      </div>
    </FadeInSection>
  );
};

export default Work;
