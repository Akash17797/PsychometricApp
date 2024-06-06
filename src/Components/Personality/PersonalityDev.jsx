import React from 'react';
import backgroundImage from '../images/counselling.jpg'; 
import { NavLink } from 'react-router-dom';
import career from '../images/career counselling.jpg'


const BenefitItem = ({ title, description }) => (
  <li className="hover:bg-green-100 transition bg-opacity-60 duration-300 ease-in-out hover:rounded-xl hover:p-2 transform hover:-translate-y-1 hover:scale-105">
    <span className="text-green-900 font-bold">{title}</span>
    <p>{description}</p>
  </li>
);

function PersonalityDev() {
  const benefits = [
    {
      title: "Adaptability and Thriving in Change",
      description: "Enhanced ability to adapt and thrive in a rapidly changing environment. Through personality development, individuals can cultivate the emotional intelligence and adaptability needed to navigate the ever-shifting demands of the modern workplace, social landscapes, and personal relationships."
    },
    {
      title: "Personal and Professional Success",
      description: "Unlock new avenues for personal and professional success. As individuals delve deeper into their own strengths and talents, they are better equipped to identify and pursue meaningful goals that align with their values and aspirations."
    },
    {
      title: "Interpersonal Relationships",
      description: "Fostering empathy, effective communication, and conflict resolution skills, individuals can build stronger, more meaningful connections with others. The ability to navigate social complexities with emotional intelligence becomes a valuable asset."
    },
    {
      title: "Mental and Emotional Well-being",
      description: "Exploring and addressing the underlying drivers of thoughts, emotions, and behaviors, individuals can develop healthier coping mechanisms, cultivate a growth mindset, and cultivate a greater sense of self-acceptance and self-esteem."
    },
    {
      title: "Positive Impact on the Community",
      description: "The benefits of personality development extend beyond the individual, as they can have a ripple effect on the broader community. Individuals embarking on self-improvement journeys can inspire and empower others, contributing to a more compassionate, resilient, and thriving society."
    }
  ];

  return (
    <div
      className="py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}
    > 
      <div className="bg-blue-200 bg-opacity-55 w-full mx-auto">
        <div className="flex flex-col lg:flex-row bg-white bg-opacity-60 p-4 sm:p-8 rounded-2xl shadow-lg">
          <div className="flex-none w-full lg:w-2/6 mb-4 lg:mb-0 lg:mr-4">
            <img src= {career} alt="vision" className="rounded-lg lg:rounded-l-2xl h-full object-cover" />
          </div>
          <div className="w-full">
            <h1 className="text-4xl font-bold text-center mb-8 text-green-900">
              Personality Development
            </h1>
            <div className="space-y-6">
              <p className="text-lg text-black font-bold">
                In the ever-evolving landscape of the modern world, the importance of personal growth and development has become increasingly vital. Personality development, a multifaceted process of enhancing one's unique traits, attitudes, and behaviors, has emerged as a crucial tool for navigating the complexities of contemporary life.
              </p>
              <p className="text-lg text-black font-bold">
                At its core, personality development is the journey of self-discovery and self-improvement, where individuals strive to uncover their true strengths, address their weaknesses, and cultivate a deeper understanding of their authentic selves. This process is not merely about acquiring new skills or knowledge; it's about fostering a profound transformation that can have a profound impact on an individual's personal and professional life.
              </p>
              <div>
                <h2 className="text-2xl font-bold mb-4 text-green-900">The Benefits of Personality Development in the Modern World</h2>
                <ul className="list-disc list-inside space-y-2">
                  {benefits.map((benefit, index) => (
                    <BenefitItem key={index} title={benefit.title} description={benefit.description} />
                  ))}
                </ul>
              </div>
              <p className="text-lg text-black font-bold">
                In conclusion, in the modern world, where the pace of change and the demands on individuals can be overwhelming, the importance of personality development cannot be overstated. By embracing this transformative process, individuals can unlock a wealth of personal and professional benefits, from enhanced adaptability and success to improved mental and emotional well-being, and ultimately, the ability to positively impact the world around them.
              </p>
            </div>
            <NavLink
              to="/contact"
              className="mt-6 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 block text-center"
            >
              Start Your Journey
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalityDev;
