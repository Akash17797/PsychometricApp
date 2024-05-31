import React from 'react';
import backgroundImage from '../images/life.jpg'; 

const Drug = () => {
  return (
    <div
      className="py-12 px-4 sm:px-6 lg:px-8 flex animate-fadeIn"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}
    >
      <div className="max-w-5xl mx-auto bg-opacity-60 p-5 rounded-2xl bg-white">
        <h1 className="text-5xl font-bold text-teal-900 mb-8 text-center hover:underline animate-slideInDown">
          Drug Abuse Prevention
        </h1>
        <div className="rounded-lg shadow-lg p-8 mb-8 animate-slideInUp">
          <p className="text-lg text-gray-900 font-semibold mb-4">
            Drug abuse prevention is a multifaceted endeavor aimed at reducing the misuse of substances and promoting healthier lifestyles. At its core, drug abuse prevention seeks to address the root causes and risk factors associated with substance abuse while promoting protective factors that foster resilience and well-being. This comprehensive approach involves various strategies, interventions, and community efforts to mitigate the impact of drug abuse on individuals, families, and communities.
          </p>
          <p className="text-lg text-gray-900 font-semibold mb-4">
            Education plays a pivotal role in drug abuse prevention by raising awareness about the risks and consequences of substance abuse. Schools, families, and communities often collaborate to provide evidence-based drug education programs that equip individuals with the knowledge and skills to make informed decisions and resist peer pressure. These programs typically cover topics such as the effects of drugs on the body and mind, refusal skills, coping mechanisms, and healthy alternatives to substance use.
          </p>
          <p className="text-lg text-gray-900 font-semibold mb-4 animate-slideInLeft">
            Another crucial aspect of drug abuse prevention is fostering a supportive and nurturing environment. This involves strengthening protective factors like positive relationships, community engagement, and access to resources that promote well-being and resilience. By creating a strong social support system, individuals are better equipped to navigate challenges and resist the temptation to turn to substance abuse.
          </p>
          <p className="text-lg text-gray-900 font-semibold mb-4 animate-slideInRight">
            Furthermore, addressing underlying issues such as mental health concerns, trauma, and socioeconomic disparities is essential in tackling drug abuse from a holistic perspective. Providing access to counseling, therapy, and community-based support services can help individuals develop coping strategies and address root causes that may contribute to substance abuse.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Drug;