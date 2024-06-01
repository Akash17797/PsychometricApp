import React from 'react';
import backgroundImage from '../Counselling/vision.jpg';

const BehavioralCounselling = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}
    >
      <div className="flex w-full bg-opacity-15 rounded-2xl shadow-lg bg-white">
        <div className="flex-none w-2/6 m-2">
          <img src="\src\Components\images\career counselling.jpg" alt="vision" className="rounded-l-2xl h-full object-cover" />
        </div>
        <div className="flex-grow p-8">
          <h1 className="text-4xl font-semibold text-center mb-6">Behavioral Counselling</h1>
          <div className="mb-12 bg-green-100 p-6 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <p className="text-lg text-gray-800 mb-6">
              Behavioral counselling is an umbrella term for types of therapy that treat mental health disorders. It is based on the idea that all behaviors are learned and that behavior can be changed. This form of counselling seeks to identify and help change potentially self-destructive and unhealthy behaviors. The focus of treatment therapy is often on current problems and how to change them.
            </p>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <ul className="list-disc list-inside text-lg text-gray-800 mb-6">
              <li>Behavioral therapy can benefit people with a wide range of disorders.</li>
              <li>Behavioral counselling involves the development and encouragement of desirable behaviors and removal or reduction of undesirable behavior by methods based on learning and reinforcement principles.</li>
              <li>In behavioral counselling, problem behaviors are analyzed through a process of behavior assessment. Behavioral analysis or assessment refers to the understanding by the counselor of whether the behaviors and their consequences show a pattern and what are the various situational factors that cause the problem behavior.</li>
            </ul>
            <div className="flex flex-col space-y-2">
              <p className="text-lg text-gray-800">For behavioral counselling, contact:</p>
              <p className="text-lg text-blue-600">Email: ramvir66singh@gmail.com</p>
              <p className="text-lg text-green-600">WhatsApp: +91 9643190913</p>                    
              <p className="text-lg text-purple-600">Phone: +91 9643190913</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BehavioralCounselling;
