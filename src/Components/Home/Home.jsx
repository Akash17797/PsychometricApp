
//The initiative to start this venture took approximately 17 years of extensive research, observation, and analysis. During those 17 years, it was observed and the need was felt that GenZ (Zoomers) are living under more stress and anxiety than earlier generations. To understand the basic and urgent requirement of starting this venture GenZ's Psychological Services.
//                    
// Who are GenZ (Generation of Zoomers)?
//Generation Z refers to the generation born roughly between 1997 - 2012, following millennials. They are the first generation to be completely raised with the Internet and Smartphones and have grown up with a very different experience of the world compared to previous generations.
//Gen Zoomers in Indian Context
//India, a country with one of the world's youngest populations, is aware of the potential and influence of GenZ or "Zoomers". Considering one of the most evolved generations, it is the first cohort to grow up in the digital age - where the world witnessed rapid technological advancements.
// The Economic Times: News Headlines
//    "Youth no longer shy of seeking Psychological counselling/ Psychiatric help."
//    "GenZ demand for mental health drugs lifts sales 9% to Rs. 11,774 crore."
//    "India's youth is realizing that you don't have to seek therapy support only for disorders but also to perform well in life's different aspects," said Konika Agarwal, Co-founder of MindPeers.
//                        
//The 18-35 age group reports disharmony between the measures of aspiration and leadership, showcasing a lack of direction among them.
//GenZ is experiencing higher levels of Anxiety & Stress as assessed by Psychologists.
//About Mr. Ramvir Singh

// Mr. Ramvir Singh"
//M.A. (English & Psychology (Pursuing)) M.Ed (Guidance & Counselling)
//IDGC (International Diploma course in Guidance and Counselling) from NCERT in collaboration with COL, Vancouver, Canada
//DAP (Drug Advisory Programme) Colombo Plan Certificate Course by SPYM, New Delhi, India (School Based Intervention on Drug and Substance Abuse)
//CGRP course certificate from MGSIPA, Sec-26, Chandigarh, Punjab
//16 years of teaching experience in Sr. Sec. School. Have in-depth knowledge and experience in dealing with adolescence, who are going through a period of STORM and STRESS
//7 years of experience as CGRP (Cluster Guidance Resource Person) having 10 secondary/senior secondary schools in the cluster
//13 years of experience in providing Psychometric test (Personality, Interest, Aptitude, and Creativity test) based career guidance and counseling to the students of 9th to 12th classes
//   


import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Home() {
    return (
        <div className="bg-gray-100 text-gray-800">
            {/* Hero Section */}
            <section className="bg-cover bg-center h-screen" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1716635312355-e727dfde0705?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}>
                <div className="flex items-center justify-center h-full bg-black bg-opacity-50 animate-fadeIn">
                    <div className="text-center text-white">
                        <h1 className="text-5xl font-bold mb-4 animate-slideInDown">Ramvir Singh</h1>
                        <p className="text-xl mb-8 animate-slideInUp">Personal Mentor and Counsellor</p>
                        <button className="px-8 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transform hover:scale-105 transition-transform">
                            <NavLink to="./about">
                                Get Started
                            </NavLink>
                        </button>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-16 px-4">
                <div className="max-w-5xl mx-auto text-center animate-fadeIn">
                    <h2 className="text-4xl font-bold mb-4">About Ramvir Singh</h2>
                    <p className="text-xl mb-8">Ramvir Singh is a renowned personal mentor and counsellor with over 17 years of experience in guiding individuals towards personal and professional growth. <br />M.A. (English & Psychology (Pursuing)) M.Ed (Guidance & Counselling) </p>
                    <div className="flex justify-center">
                        <img src=".\src\images\ramvir.jpg" alt="Ramvir Singh" className="rounded-full w-80 h-80 object-cover shadow-lg transform hover:scale-110 transition-transform" />
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 bg-gray-200 px-4 animate-fadeIn">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-center">Services Offered</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform">
                            <img src="https://via.placeholder.com/200x200" alt="Service 1" className="w-full h-48 object-cover mb-4 rounded animate-fadeIn" />
                            <h3 className="text-2xl font-bold mb-2">Life Coaching</h3>
                            <p className="text-gray-600">Personalized guidance to help you achieve your life goals and overcome obstacles.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform">
                            <img src="https://via.placeholder.com/200x200" alt="Service 2" className="w-full h-48 object-cover mb-4 rounded animate-fadeIn" />
                            <h3 className="text-2xl font-bold mb-2">Personality Development</h3>
                            <p className="text-gray-600">Empowering you to improve your skills, confidence, and personal growth for a better future.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform">
                            <img src="https://via.placeholder.com/200x200" alt="Service 3" className="w-full h-48 object-cover mb-4 rounded animate-fadeIn" />
                            <h3 className="text-2xl font-bold mb-2">Career Counseling</h3>
                            <p className="text-gray-600">Professional advice to help you navigate and advance in your career.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 px-4">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-12">What People Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform animate-fadeIn">
                            <p className="text-gray-600 mb-4">"kuch toh likhna hai idhar wo dekhenge kya likhna hai bt likhna jarur hai. haan bt likhna jarur hai"</p>
                            <h3 className="text-xl font-bold">- Koi toh hu mai</h3>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform animate-fadeIn">
                            <p className="text-gray-600 mb-4">"kuch toh likhna hai idhar wo dekhenge kya likhna hai bt likhna jarur hai. haan bt likhna jarur hai"</p>
                            <h3 className="text-xl font-bold">- Mai bhi hu koi</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-16 bg-orange-500 text-white text-center animate-fadeIn">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Life?</h2>
                    <p className="text-xl mb-8">Join the thousands of people who have already transformed their lives with the help of Ramvir Singh.</p>
                    <button className="px-8 py-3 bg-white text-orange-600 rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-transform">
                        <NavLink to="./contact">
                            Contact Us
                        </NavLink>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Home;

