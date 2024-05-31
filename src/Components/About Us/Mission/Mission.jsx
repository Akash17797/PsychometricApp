import React from 'react';
import backgroundImage from '../mission.jpg';

const Mission = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 flex"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}
    >
      <div className='max-w-5xl mx-auto bg-opacity-40 p-5 rounded-2xl bg-white'>
        <h1 className="text-4xl font-bold text-black mb-8">
          To Create Meaningful Impact Through Career Guidance and Counseling
        </h1>
        <div className="rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-black mb-6">Mission</h2>
          <p className="text-lg text-black font-bold mb-4">
            The core mission is to positively impact the lives of underprivileged or underserved individuals who are facing crucial decisions about their education and career path. This includes students who are unsure about which subject or field to pursue, as well as professionals who are at a crossroads in their career development.
          </p>
          <p className="text-lg text-black font-bold mb-4">
            The aim is to provide these individuals with high-quality, scientific career counseling and guidance that adds real value to their academic and professional endeavors. By leveraging expertise in career psychology, aptitude assessment, and mentorship, the mission is to help these individuals make informed, fulfilling choices about their studies and careers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <MissionItem 
              title="Underprivileged or Unaware Students" 
              description="Many students, especially those from disadvantaged backgrounds, lack access to robust career guidance resources. The mission is to reach these students and empower them to identify their strengths, interests, and best-fit academic and career options."
            />
            <MissionItem 
              title="Professionals at Career Crossroads" 
              description="Even experienced professionals can find themselves uncertain about the next steps in their career development. The mission is to provide these individuals with personalized counseling to help them navigate career transitions, re-skilling, or reinvention."
            />
          </div>
        </div>
        <p className="text-lg text-black font-bold mb-4">
          The overarching goal is to create tangible, lasting impact on the lives of these target beneficiaries. By delivering scientific, value-adding career guidance, the mission aims to help individuals make well-informed decisions that lead to greater academic success, job satisfaction, and overall life fulfillment. This, in turn, can drive positive ripple effects within families, communities, and society at large.
        </p>
      </div>
    </div>
  );
};

const MissionItem = ({ title, description }) => {
  return (
    <div className="bg-green-300 bg-opacity-60 p-6 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-900">{description}</p>
    </div>
  );
};

export default Mission;
