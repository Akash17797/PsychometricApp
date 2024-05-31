import React from 'react';
import backgroundImage from '../images/counselling.jpg';
import { NavLink } from 'react-router-dom';

const BenefitItem = ({ title, description }) => (
  <li className=" p-4 rounded-lg bg-opacity-20 shadow-lg hover:bg-green-100 transition duration-300 ease-in-out hover:rounded-xl transform hover:-translate-y-1 hover:scale-105">
    <span className="text-green-900 font-bold">{title}</span>
    <p>{description}</p>
  </li>
);

function Coach_Mentor() {
  const benefits = [
    {
      title: "Accelerated Learning",
      description: "In a rapidly evolving world, coaching and mentorship offer accelerated learning opportunities. Individuals can tap into the knowledge and expertise of their coaches and mentors, gaining insights and skills that might take years to acquire independently."
    },
    {
      title: "Personalized Guidance",
      description: "With the guidance of a coach or mentor, individuals receive personalized support tailored to their unique needs, strengths, and goals. This personalized approach fosters deeper self-awareness and empowers individuals to make informed decisions aligned with their aspirations."
    },
    {
      title: "Professional Growth",
      description: "Both coaching and mentorship are instrumental in fostering professional growth. Coaches help individuals develop specific skills, enhance performance, and advance their careers, while mentors provide guidance on navigating complex professional landscapes, expanding networks, and seizing opportunities for growth."
    },
    {
      title: "Enhanced Confidence",
      description: "Through regular feedback, encouragement, and support, coaches and mentors help individuals build confidence in their abilities. As individuals achieve milestones and overcome challenges with the guidance of their mentors or coaches, they develop a sense of self-assurance that propels them towards further success."
    },
    {
      title: "Accountability and Motivation",
      description: "Coaches and mentors serve as sources of accountability and motivation, keeping individuals focused on their goals and accountable for their actions. The regular check-ins, goal-setting exercises, and constructive feedback provided by coaches and mentors help individuals stay on track and maintain momentum towards their desired outcomes."
    },
    {
      title: "Expanded Perspectives",
      description: "One of the most significant benefits of coaching and mentorship is the exposure to diverse perspectives. Coaches and mentors bring their own unique backgrounds, experiences, and insights to the table, broadening the mentee's worldview and challenging their assumptions. This exposure fosters creativity, innovation, and adaptability in the face of change."
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
      <div className="bg-opacity-40 p-8 rounded-2xl bg-white shadow-lg max-w-5xl w-full space-y-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-green-900 animate__animated animate__fadeIn">
          The Role of Coaching and Mentorship
        </h1>
        <div className="space-y-6">
          <div className="bg-green-50 bg-opacity-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-green-900">The Role of a Coach</h2>
            <p className="text-lg text-gray-700 font-semibold">
              A coach is someone who guides individuals towards achieving specific goals, whether personal or professional, by providing feedback, support, and accountability. Coaches typically employ structured processes and methodologies tailored to the needs of their clients. They facilitate self-discovery, help individuals overcome obstacles, and empower them to unlock their full potential.
            </p>
          </div>
          <div className="bg-blue-50 bg-opacity-50  p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-green-900">The Role of a Mentor</h2>
            <p className="text-lg text-gray-700 font-semibold">
              Mentors, on the other hand, are seasoned professionals who offer guidance, wisdom, and advice based on their own experiences. They serve as trusted advisors, sharing insights, knowledge, and perspectives to help mentees navigate their careers, make informed decisions, and overcome challenges. Unlike coaches, mentors often develop more long-term relationships with their mentees, providing ongoing support and nurturing their growth over time.
            </p>
          </div>
          <div className="bg-yellow-50 bg-opacity-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-green-900">Benefits of Coaching and Mentorship in the Modern World</h2>
            <ul className="list-disc list-inside space-y-2">
              {benefits.map((benefit, index) => (
                <BenefitItem key={index} title={benefit.title} description={benefit.description} />
              ))}
            </ul>
          </div>
          <p className="text-lg bg-opacity-50  text-black font-bold bg-pink-50 p-6 rounded-lg shadow-md">
            In conclusion, coaching and mentorship play a crucial role in the modern world by offering individuals the guidance, support, and opportunities needed to thrive personally and professionally. Embracing these transformative processes can lead to significant growth and development, empowering individuals to achieve their fullest potential.
          </p>
        </div>
        <button className="mt-6 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 animate__animated animate__pulse animate__infinite">
          <NavLink to="/contact">
            Start Your Journey
          </NavLink>
        </button>
      </div>
    </div>
  );
}

export default Coach_Mentor;
