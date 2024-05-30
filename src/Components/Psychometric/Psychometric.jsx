import React from 'react';
import backgroundImage from '../images/psychometric.jpg'; 

const ListItem = ({ title, description }) => (
  <li className="hover:bg-green-100 transition duration-300 ease-in-out hover:rounded-xl hover:p-2 transform hover:-translate-y-1 hover:scale-105">
    <span className="text-green-900 font-bold">{title}</span>
    <p>{description}</p>
  </li>
);

function Psychometric() {
  const benefits = [
    {
      title: "Discover their unique talents and abilities",
      description: "Psychometric assessments can uncover the innate strengths and talents of Gen Z students, empowering them to pursue educational and career paths that align with their natural inclinations."
    },
    {
      title: "Explore diverse career options",
      description: "By understanding their personality traits, cognitive skills, and problem-solving abilities, Gen Z students can explore a wider range of career possibilities, increasing their chances of finding fulfilling and rewarding work."
    },
    {
      title: "Develop essential soft skills",
      description: "Psychometric testing often evaluates interpersonal skills, emotional intelligence, and adaptability – crucial attributes for success in the modern workplace. By identifying areas for improvement, Gen Z students can proactively develop these valuable soft skills."
    },
    {
      title: "Enhance academic and professional performance",
      description: "Psychometric testing often evaluates interpersonal skills, emotional intelligence, and adaptability – crucial attributes for success in the modern workplace. By identifying areas for improvement, Gen Z students can proactively develop these valuable soft skills."
    },
    {
      title: "Navigate the changing job market",
      description: "As the job market continues to evolve, psychometric testing can help Gen Z students navigate the complexities of the modern workforce, positioning them for success in an increasingly competitive and dynamic environment."
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
      <div className="bg-opacity-75 p-8 rounded-2xl bg-white shadow-lg max-w-5xl w-full">
        <h1 className="text-4xl font-bold text-center mb-8 text-green-900">
          Psychometric Testing: A Comprehensive Approach to Personal and Professional Development
        </h1>
        <div className="space-y-6">
          <p className="text-lg text-black font-bold">
            In the ever-evolving landscape of personal and professional growth, psychometric testing has emerged as a powerful tool for individuals seeking to unlock their full potential. Psychometric tests are designed to assess a range of cognitive abilities, personality traits, and behavioral tendencies, providing a comprehensive understanding of an individual's strengths, weaknesses, and overall profile.
          </p>
          <p className="text-lg text-black font-bold">
            At its core, psychometric testing relies on a systematic approach to measuring and evaluating various psychological attributes. These tests often encompass a wide spectrum, including intelligence quotient (IQ) tests, aptitude assessments, personality inventories, and situational judgment evaluations. By delving into these multifaceted dimensions, psychometric assessments offer invaluable insights that can guide personal development, career planning, and organizational decision-making.
          </p>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-green-900">Benefits of Psychometric Testing for Gen Z Students</h2>
            <ul className="list-disc list-inside space-y-2">
              {benefits.map((benefit, index) => (
                <ListItem key={index} title={benefit.title} description={benefit.description} />
              ))}
            </ul>
          </div>
          <p className="text-lg text-black font-bold">
            One of the primary benefits of psychometric testing lies in its ability to facilitate self-awareness. Through the administration of these assessments, individuals gain a deeper understanding of their cognitive capabilities, emotional intelligence, and behavioral patterns. This newfound self-knowledge can empower them to make informed decisions about their educational and career paths, enabling them to align their aspirations with their inherent strengths and preferences.
          </p>
          <p className="text-lg text-black font-bold">
            Moreover, psychometric testing can be instrumental in the realm of career development. Employers and HR professionals often utilize these assessments to identify the most suitable candidates for specific roles, ensuring a strong fit between the individual's profile and the job requirements. This approach not only enhances the effectiveness of the hiring process but also contributes to the long-term success and job satisfaction of the employee.
          </p>
          <p className="text-lg text-black font-bold">
            In conclusion, psychometric testing has emerged as a comprehensive approach to personal and professional development, offering invaluable insights and guidance for individuals of all ages, including the Generation Z cohort. By embracing the power of these assessments, Gen Z students can embark on a transformative journey of self-discovery, career exploration, and lifelong learning, ultimately positioning themselves for sustained success in the ever-evolving world of work.
          </p>
        </div>
        <button className="mt-6 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
          Take a Psychometric Test
        </button>
      </div>
    </div>
  );
}

export default Psychometric;
