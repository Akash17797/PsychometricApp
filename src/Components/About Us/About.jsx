import React from 'react'


// jo hum last mei export default About likhte hai.... hmne wahi pehli line mei likh diya hai... jo ki kaam same karta hai

export default function About() {
    return (
        <div className="bg-gradient-to-br from-green-100 to-blue-900  py-16 ">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img className='rounded-full shadow-lg '  // this should be added in the local storage or database storage and then fetched from there
                            src="/src/images/About.jpg"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h3 className="text-blue-600 text-2xl font-bold md:text-4xl">
                            About Us
                        </h3>
                        <p className="mt-6 text-black">
                            We are a team of passionate professionals with diverse backgrounds in psychology, education, and human resources. Our multidisciplinary expertise allows us to provide comprehensive, scientifically-grounded career guidance and counseling services.
                        </p>
                        <br />

                        <h3 className="text-2xl text-blue-600 font-bold md:text-4xl">Our Expertise
                        </h3>
                        <p className="mt-4 text-black">
                            <b className='text-md'>Psychology:</b> Our psychologists and career counselors are well-versed in the latest theories and research in career development, personality assessment, and vocational psychology. We use evidence-based tools and techniques to help individuals better understand their strengths, interests, and values.
                        </p>

                        <p className="mt-4 text-black">
                            <b className='text-md'>Education:</b> Our educators bring deep knowledge of academic pathways, degree programs, and the evolving job market. We can provide insightful guidance on selecting the right subjects, majors, and educational opportunities to align with your career goals.
                        </p>

                        <p className="mt-4 text-black">
                            <b className='text-md'>Human Resources:</b> With our HR experts on board, we offer valuable perspectives on the practical realities of the workplace. We can help you navigate job search strategies, interview skills, and professional development to succeed in your chosen career.
                        </p>
                        <br />
                        <h3 className="text-2xl text-gray-900 hover:text-blue-600 font-bold md:text-4xl">Our Passion
                        </h3>
                        <p className="mt-4 text-black">
                            <b className='text-md'>Psychology:</b> What drives us is our genuine passion for empowering individuals to make informed, fulfilling choices about their academic and professional journeys. We believe that the right guidance can open up transformative opportunities and positively impact lives.

                            Through our scientific approach and personalized support, we are committed to helping you: <br /><br />
                                                        
                            <li>Discover your unique strengths, interests, and career-relevant skills</li>
                            <li>Explore educational and vocational pathways that are the best fit for you</li>
                            <li>Develop a clear, actionable plan to achieve your career aspirations</li>
                            <li>Navigate the challenges and transitions of your professional development</li>
                            <br />
                            By tapping into our multidisciplinary expertise, you can be confident in making decisions that will lead to long-term success and satisfaction.


                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
