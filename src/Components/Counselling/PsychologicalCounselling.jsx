import React, { useState } from 'react';

const PsychologicalCounselling = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (sectionIndex) => {
    setExpandedSection(expandedSection === sectionIndex ? null : sectionIndex);
  };

  const benefits = [
    {
      title: 'Coping with the Demands of Daily Life',
      content:
        'One of the primary benefits of psychological counselling in the modern world is its ability to help individuals cope with the overwhelming demands and pressures of daily life. In a fast-paced, highly-connected society, individuals can easily become consumed by work, family obligations, and the constant barrage of digital distractions, leading to feelings of burnout, anxiety, and depression. Through psychological counselling, clients can learn effective stress management techniques, develop healthier coping mechanisms, and regain a sense of balance and control in their lives.'
    },
    {
      title: 'Addressing Mental Health Challenges',
      content:
        'Additionally, psychological counselling can play a crucial role in addressing the growing prevalence of mental health issues in the modern world. With the increasing recognition of the impact of mental health on overall well-being, psychological counselling has become an essential resource for individuals struggling with conditions such as depression, anxiety, and trauma. By providing evidence-based treatments and support, counsellors can help clients navigate these challenges and work towards recovery and improved mental health.'
    },
    // Add more benefit objects as needed
  ];

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Psychological Counselling
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          In today's rapidly evolving world, the importance of psychological
          counselling has become increasingly prominent. Psychological
          counselling is a professional service that provides individuals with
          the support, guidance, and tools necessary to navigate the complex
          challenges and stresses of modern life.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          The Benefits of Psychological Counselling in the Modern World
        </h2>
        <div className="space-y-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 cursor-pointer"
              onClick={() => toggleSection(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <svg
                  className={`h-6 w-6 text-gray-500 transform transition-transform duration-300 ${
                    expandedSection === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              {expandedSection === index && (
                <p className="text-gray-700 mt-4">{benefit.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PsychologicalCounselling;