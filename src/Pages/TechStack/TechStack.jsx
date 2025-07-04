
import { theme } from '../../theme';
import ToolSection from '../../Components/Tools/modules/ToolSection';
import FadeInSection from '../../utilities/Animations/FadeInSection';
import toolData from '../../Components/Tools/modules/toolData';

export default function TechStack() {
  return (
    <div className={`py-24 overflow-hidden ${theme.sectionBg.bgColor} ${theme.sectionBg.textColor}`}>
      {toolData.map(({ category }, index) => (
        <FadeInSection key={index}>
          <ToolSection 
            title={category}
            tools={toolData}
            category={category}
          />
        </FadeInSection>
      ))}

 
    </div>
  );
}
