import React from 'react';

const Vision = () => {
  return (
    <div className="bg-gradient-to-br from-green-300 to-blue-700 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">
          To Create Meaningful Impact Through Career Guidance and Counseling
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Vision</h2>
          <p className="text-lg text-gray-700 mb-4">
            Our vision is to empower every student and working professional to make informed, fulfilling choices about their educational and career paths. We aim to achieve this through a scientifically-driven yet empathetic methodology that prioritizes long-term success and happiness.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visionItems.map((item, index) => (
              <VisionItem key={index} title={item.title} description={item.description} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const VisionItem = ({ title, description }) => {
  return (
    <div className="bg-gradient-to-b from-green-200 to-blue-200 p-6 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const visionItems = [
  {
    title: 'Empowering Informed Decisions',
    description: 'At the core of our vision is a deep commitment to helping individuals make well-reasoned decisions about their studies and careers. We believe that access to high-quality, evidence-based guidance is crucial, especially for those who may lack the resources or support networks to navigate these pivotal life choices.',
  },
  {
    title: 'Integrating Science and Empathy',
    description: "We recognize that career development is a highly personal journey, shaped by one's unique strengths, interests, values, and circumstances. That's why our approach blends scientific rigor with a compassionate, empathetic touch.",
  },
  {
    title: 'Cultivating Long-Term Success and Happiness',
    description: 'Ultimately, our vision extends beyond simply helping people choose a career path. We aspire to guide individuals towards long-term success, fulfillment, and happiness in their professional lives.',
  },
];

export default Vision;




