import React from 'react';

const About = () => {
    return (
        <div className="bg-gradient-to-br from-green-100 to-blue-900 py-16">
            <div className="container mx-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 lg:gap-12">
                    <div className="flex justify-center md:justify-end lg:justify-center">
                        <img
                            className='rounded-full h-5/6 w-4/6 shadow-lg transform hover:scale-105 transition duration-300'
                            src="/src/images/About.jpg"
                            alt="Ramvir Singh"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <div>
                            <h3 className="text-blue-600 text-2xl font-bold md:text-4xl mb-6">About Us</h3>
                            <p className="text-black">
                                We are a team of passionate professionals with diverse backgrounds in psychology, education, and human resources. Our multidisciplinary expertise allows us to provide comprehensive, scientifically-grounded career guidance and counseling services.
                            </p>
                        </div>
                        <div className="mt-8">
                            <h3 className="text-blue-600 text-2xl font-bold md:text-4xl mb-4">Our Expertise</h3>
                            <ul className="list-disc list-inside text-black">
                                <li><span className='text-white'>Psychology:</span> Our psychologists and career counselors are well-versed in the latest theories and research in career development, personality assessment, and vocational psychology. We use evidence-based tools and techniques to help individuals better understand their strengths, interests, and values.</li>
                                <li className="mt-4"><span className='text-white'>Education:</span> Our educators bring deep knowledge of academic pathways, degree programs, and the evolving job market. We can provide insightful guidance on selecting the right subjects, majors, and educational opportunities to align with your career goals.</li>
                                <li className="mt-4"><span className='text-white'>Human Resources:</span> With our HR experts on board, we offer valuable perspectives on the practical realities of the workplace. We can help you navigate job search strategies, interview skills, and professional development to succeed in your chosen career.</li>
                            </ul>
                        </div>
                        <div className="mt-8">
                            <h3 className="text-blue-600 text-2xl font-bold md:text-4xl mb-4">Our Passion</h3>
                            <p className="text-black">
                                What drives us is our genuine passion for empowering individuals to make informed, fulfilling choices about their academic and professional journeys. We believe that the right guidance can open up transformative opportunities and positively impact lives.
                            </p>
                            <ul className="list-disc list-inside text-blue-200 mt-4">
                                <li>Discover your unique strengths, interests, and career-relevant skills</li>
                                <li>Explore educational and vocational pathways that are the best fit for you</li>
                                <li>Develop a clear, actionable plan to achieve your career aspirations</li>
                                <li>Navigate the challenges and transitions of your professional development</li>
                            </ul>
                            <p className="text-black mt-4">
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
