import React, { useState } from 'react';
import backgroundImage from '../images/life.jpg'; // Adjust the path as needed

const Drug = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div
      className="py-12 px-4 sm:px-6 lg:px-8 flex"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}
    >
      <div className="max-w-5xl mx-auto bg-opacity-70 p-5 rounded-2xl bg-white">
        <h1 className="text-5xl font-bold text-red-700 mb-8 text-center hover:underline ">
          Drug Abuse Prevention
        </h1>
        <p className="text-lg text-black font-bold mb-4">
          Drug abuse prevention is a multifaceted endeavor aimed at reducing the misuse of substances and promoting healthier lifestyles. At its core, drug abuse prevention seeks to address the root causes and risk factors associated with substance abuse while promoting protective factors that foster resilience and well-being. This comprehensive approach involves various strategies, interventions, and community efforts to mitigate the impact of drug abuse on individuals, families, and communities.
        </p>
        <p className="text-lg text-black font-bold mb-4">
          Education plays a pivotal role in drug abuse prevention by raising awareness about the risks and consequences of substance abuse. Schools, families, and communities often collaborate to provide evidence-based drug education programs that equip individuals with the knowledge and skills to make informed decisions and resist peer pressure. These programs typically cover topics such as the effects of drugs on the body and mind, refusal skills, coping mechanisms, and healthy alternatives to substance use.
        </p>
        {showMore && (
          <>
            <p className="text-lg text-black font-bold mb-4">
              Another crucial aspect of drug abuse prevention is fostering a supportive and nurturing environment. This involves strengthening protective factors like positive relationships, community engagement, and access to resources that promote well-being and resilience. By creating a strong social support system, individuals are better equipped to navigate challenges and resist the temptation to turn to substance abuse.
            </p>
            <p className="text-lg text-black font-bold mb-4">
              Furthermore, addressing underlying issues such as mental health concerns, trauma, and socioeconomic disparities is essential in tackling drug abuse from a holistic perspective. Providing access to counseling, therapy, and community-based support services can help individuals develop coping strategies and address root causes that may contribute to substance abuse.
            </p>
          </>
        )}
        <button
          className="mt-6 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors duration-300"
          onClick={toggleShowMore}
        >
          {showMore ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </div>
  );
};

export default Drug;
