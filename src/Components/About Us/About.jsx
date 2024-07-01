import React from 'react';
import backgroundImage from '../About Us/vision.jpg';
import Career from '../images/Career.jpg'

const About = () => {
  return (
    <div className=" py-16 animate-fadeIn"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}
    >
      <div className="container mx-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="flex flex-col md:flex-row md:gap-6">
          <div className="flex justify-center md:w-1/2 lg:w-1/3 mb-6 md:mb-0">
            <img
              className="rounded-xl shadow-lg shadow-black transform hover:scale-105 transition-transform duration-300 animate-slideInLeft object-cover object-center"
              src= {Career }
              alt="Ramvir Singh"
            />
          </div>
          <div className="bg-blue-200 bg-opacity-70 p-4 rounded-2xl flex flex-col justify-center md:w-1/2 lg:w-2/3 text-justify animate-slideInDown">
            <div>
              <h3 className="text-blue-700 text-2xl font-bold md:text-4xl mb-6 underline">About Us</h3>
              <p className="text-gray-900 font-semibold">
                We are a team of passionate professionals with diverse backgrounds in psychology, education, and human resources. Our multidisciplinary expertise allows us to provide comprehensive, scientifically-grounded career guidance and counseling services.
              </p>
            </div>
            <div className="mt-8">
              <h3 className="text-blue-700 text-2xl font-bold md:text-4xl mb-4 underline">Our Expertise</h3>
              <ul className="list-disc list-inside text-gray-900 space-y-4">
                <li className='font-semibold'>
                  <span className='text-red-600 font-bold text-xl hover:underline'>Psychology:</span> Our psychologists and career counselors are well-versed in the latest theories and research in career development, personality assessment, and vocational psychology. We use evidence-based tools and techniques to help individuals better understand their strengths, interests, and values.
                </li>
                <li className='font-semibold'>
                  <span className='text-red-600 font-bold text-xl hover:underline'>Education:</span> Our educators bring deep knowledge of academic pathways, degree programs, and the evolving job market. We can provide insightful guidance on selecting the right subjects, majors, and educational opportunities to align with your career goals.
                </li>
                <li className='font-semibold'>
                  <span className='text-red-600 font-bold text-xl hover:underline'>Human Resources:</span> With our HR experts on board, we offer valuable perspectives on the practical realities of the workplace. We can help you navigate job search strategies, interview skills, and professional development to succeed in your chosen career.
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <h3 className="text-blue-700 text-2xl font-bold md:text-4xl mb-4 underline">Our Passion</h3>
              <p className="text-gray-900 font-semibold">
                What drives us is our genuine passion for empowering individuals to make informed, fulfilling choices about their academic and professional journeys. We believe that the right guidance can open up transformative opportunities and positively impact lives.
              </p>
              <ul className="list-disc list-inside text-white mt-4 space-y-2">
                <li className='hover:text-red-500 hover:font-bold transition-colors duration-300 font-semibold'>Discover your unique strengths, interests, and career-relevant skills</li>
                <li className='hover:text-red-500 hover:font-bold transition-colors duration-300 font-semibold'>Explore educational and vocational pathways that are the best fit for you</li>
                <li className='hover:text-red-500 hover:font-bold transition-colors duration-300 font-semibold'>Develop a clear, actionable plan to achieve your career aspirations</li>
                <li className='hover:text-red-500 hover:font-bold transition-colors duration-300 font-semibold'>Navigate the challenges and transitions of your professional development</li>
              </ul>
              <p className="text-gray-900 mt-4 font-semibold">
                By tapping into our multidisciplinary expertise, you can be confident in making decisions that will lead to long-term success and satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
