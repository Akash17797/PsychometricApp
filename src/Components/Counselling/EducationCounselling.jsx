import React from 'react';
import backgroundImage from '../Counselling/vision.jpg';

const EducationCounselling = () => {
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
          <h1 className="text-4xl font-bold text-indigo-900 mb-8 text-center underline">Educational Counselling</h1>

          <div className="mb-12 bg-green-100 bg-opacity-60 p-6 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <p className="text-lg text-gray-800 mb-4">
              Educational counselling mainly refers to providing assistance and guidance to students in making the right choices in their studies, including educational plans, career aspirations, choice of stream and specialization, as well as the selection of a college or university based on their interests and preferences.
            </p>
          </div>

          <div className="bg-blue-100 bg-opacity-70 p-6 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <h2 className="text-3xl font-semibold mb-4 text-indigo-900 underline">Importance</h2>
            <p className="text-lg text-gray-800 mb-4">
              Educational counselling plays an important role in every student's life as it helps them make informed decisions at every step of their academic and professional journey. Many students may not realize the need for professional guidance in their educational or career pursuits, but the right mentor can actually transform their lives.
            </p>

            <h2 className="text-3xl font-semibold mb-4 text-indigo-900 underline">Functions of Educational Counselling</h2>
            <ul className="list-disc list-inside text-lg text-gray-800 mb-4">
              <li>Making a good beginning</li>
              <li>Planning intelligently</li>
              <li>Secondary stage</li>
              <li>Improvement in the method of study</li>
            </ul>

            <p className="text-lg text-gray-800 mb-4">
              Educational counselling involves offering help and advice to students on educational matters such as academic specialization and course selection. It also assists students in developing their educational plans, choosing appropriate courses, and selecting colleges or institutions. Additionally, educational counselling may be applied to improve study skills or provide assistance with school-related issues that interfere with performance, such as learning disabilities.
            </p>

            <p className="text-lg text-gray-800">
              The primary goal of school guidance and counselling services is to enhance and promote student learning. These services are designed to provide support and resources to students at all levels, their families, and educators.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCounselling;