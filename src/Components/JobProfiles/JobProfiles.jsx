import { jobProfiles } from "./modules/jobProfiles";

const JobProfiles = ({ selectedTab, setSelectedTab }) => {
  return (
    <div>
      <div className="flex justify-center mb-4">
        {jobProfiles.map((profile, index) => (
          <button
            key={index}
            onClick={() => setSelectedTab(index)}
            className={`px-4 py-2 mx-2 ${selectedTab === index ? 'bg-theme-blue text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          >
            {profile.title}
          </button>
        ))}
      </div>
      <div className="p-4">
        <h2>{jobProfiles[selectedTab].title}</h2>
        <p>{jobProfiles[selectedTab].content}</p>
      </div>
    </div>
  );
};

export default JobProfiles;