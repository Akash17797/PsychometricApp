import React from 'react';
import backgroundImage from '../Counselling/vision.jpg';
import careerCounselling from '../images/career counselling.jpg'

const CareerCounselling = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}
    >
      <div className="flex flex-col lg:flex-row w-full bg-opacity-15 rounded-2xl shadow-lg bg-white">
        <div className="w-full lg:w-6/6 m-2">
          <img src={careerCounselling} alt="vision" className="rounded-2xl h-full object-cover w-full lg:w-auto" />
        </div>
        <div className="flex-grow p-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center lg:text-left underline">Career Counselling and its Benefits</h1>

          <div className="mb-12 bg-green-100 p-6 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <p className="text-base lg:text-lg text-gray-700 mb-8">
              In today's rapidly evolving job market, navigating the path to a fulfilling and successful career can be a daunting task for many individuals. This is where the role of career counselling becomes invaluable. Career counselling is a specialized service that helps people explore their interests, skills, and values, and then guide them towards finding the right educational and professional opportunities that align with their unique aspirations.
            </p>
          </div>

          <div className="bg-blue-100 p-6 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">The Benefits of Career Counselling</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">Self-Discovery</h3>
                <p className="text-base lg:text-lg text-gray-700">
                  One of the primary benefits of career counselling is the self-discovery process it facilitates. Through a series of assessments and discussions, career counsellors help individuals gain a deeper understanding of their innate strengths, personality traits, and career-relevant skills. This self-awareness is the foundation upon which informed and meaningful career decisions can be made.
                </p>
              </div>
              <div>
                <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">Career Exploration</h3>
                <p className="text-base lg:text-lg text-gray-700">
                  Armed with a clear understanding of their own abilities and preferences, individuals can then embark on the exploration of various career options. Career counsellors provide comprehensive information about different industries, job roles, educational requirements, and job market trends. This knowledge empowers individuals to make well-informed choices about the academic and professional paths that are best suited to their unique needs and goals.
                </p>
              </div>
              <div>
                <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">Practical Guidance</h3>
                <p className="text-base lg:text-lg text-gray-700">
                  Beyond simply identifying potential career paths, career counselling also helps individuals navigate the practical aspects of career development. This includes assistance with résumé writing, job search strategies, interview preparation, and negotiating job offers. By providing this hands-on guidance, career counsellors help individuals present themselves in the most compelling way to potential employers, increasing their chances of securing their desired positions.
                </p>
              </div>
              <div>
                <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">Informed Decision-Making</h3>
                <p className="text-base lg:text-lg text-gray-700">
                  One of the most significant benefits of career counselling is its role in mitigating the risk of making uninformed career choices. Many individuals, especially those just starting their professional journey, may find themselves overwhelmed by the sheer number of options available. Without the guidance of a career counsellor, they may end up pursuing paths that do not align with their true interests and strengths, leading to job dissatisfaction, burnout, and even career stagnation.
                </p>
              </div>
              <div>
                <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">Navigating Transitions</h3>
                <p className="text-base lg:text-lg text-gray-700">
                  Career counselling is not just beneficial for those embarking on their first career; it can also be invaluable for individuals seeking to make a mid-career change, return to the workforce after a break, or navigate the complexities of retirement planning. In these situations, career counsellors can provide the support and guidance necessary to help individuals navigate these pivotal life transitions with confidence and clarity.
                </p>
              </div>
            </div>
            <p className="text-base lg:text-lg text-gray-700 mt-8">
              In conclusion, career counselling is a powerful tool that can have a transformative impact on an individual's professional development and overall life satisfaction. By helping people understand their unique strengths and interests, explore viable career options, and develop practical skills for success, career counsellors play a crucial role in empowering individuals to take charge of their professional futures and achieve their full potential.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerCounselling;
