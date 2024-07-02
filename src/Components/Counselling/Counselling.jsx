import React from 'react';
import backgroundImage from '../Counselling/vision.jpg';
import image from '../images/Coaching&Mentoring.jpg'

const Counselling = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}
    >
      <div className="flex flex-col md:flex-row w-full bg-opacity-80 rounded-2xl shadow-lg bg-white max-w-5xl">
        <div className="flex-none w-full md:w-2/6 m-2">
          <img src={image} alt="vision" className="rounded-t-2xl md:rounded-l-2xl md:rounded-t-none h-64 md:h-full w-full object-cover" />
        </div>
        <div className="flex-grow p-8">
          <h1 className="text-2xl md:text-4xl font-bold text-indigo-900 mb-8 text-center underline">Guidance & Counselling: An Overview</h1>

          {/* Guidance Section */}
          <div className="mb-12 bg-blue-100 p-6 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-indigo-900 underline">Guidance</h2>
            <p className="text-base md:text-lg text-gray-700 mb-4">
              Guidance is more than giving information. It is a blend of self-development and of the learning and assimilation of career, providing educational and labour market information. The development of self-confidence is often pre-requisite for taking action for one's career. The goal of guidance maybe achieved via individual counselling, self-preparation, career development courses computer-assisted guidance and Internet-based guidance systems.
            </p>
            <p className="text-base md:text-lg text-gray-700">
              Guidance helps people to accomplish their goals. It helps people to identify own talents, strength and weaknesses, family expectations and national requirements to sort out the personal relevance of the educational and vocational options available to them.
            </p>
          </div>

          {/* Counselling Section */}
          <div className="bg-purple-100 p-6 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-indigo-900 underline">Counselling</h2>
            <p className="text-base md:text-lg text-gray-700 mb-4">
              Counselling is a process. It is a continuous course of action. Making adjustments in various important stages of life can be a tedious process and one may require professional help to overcome that stage. Therefore, it is an assistance given by a professionally trained person to the one who is asking for help.
            </p>
            <p className="text-base md:text-lg text-gray-700 mb-4">
              Counselling is defined as a collaborative process in which the counsellor or psychologist facilitates the expansion of the pupil's (individual's) view of life, enlarges his repertoire of coping resources and enables him to make choices for change in himself, the situation, and the environment, without destructive consequences to self or others. The process is directed by the application of specialized skills and strategies in a therapeutic relationship. The goal of intervention is to help pupils manage these problems effectively so that their total development would not be impeded.
            </p>
            <p className="text-base md:text-lg text-gray-700 mb-4">
              It is an assistance and hence not "Advice giving" given to persons who are basically psychologically healthy. Counselling is not carrying another person's burden, but assisting him/her to carry and face their own problem.
            </p>
            <ul className="list-disc list-inside text-base md:text-lg text-gray-700 mb-4">
              <li>Purpose of counselling is not to make decisions for others. It is helping them to arrive at their own decisions.</li>
              <li>It is not solving another's problem but helping him/her to solve their own problems. Making him/her understand his/her assets and liabilities can do this.</li>
            </ul>
            <p className="text-base md:text-lg text-gray-700">
              However, it is a systematic and scientific process with well-specified goals. The term "counseling" is loosely used and all types of people who have no idea of counseling, proclaim themselves to be counselors. It is a profession and a profession is a disciplined group of individuals who adhere to ethical standards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counselling;
