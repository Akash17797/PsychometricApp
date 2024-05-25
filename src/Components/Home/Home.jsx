import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-300 to-blue-900 p-6">
            <div className="bg-blue-300 max-w-5xl rounded-lg shadow-xl p-6">
                {/* Welcome Section */}
                <section className="mb-8">
                    <h2 className="text-3xl font-bold mb-4 text-center text-blue-900">Welcome to Our Psychometric and Counseling Services</h2>
                    <p className="text-gray-900 mb-6">
                        The initiative to start this venture took approximately 17 years of extensive research, observation, and analysis. During those 17 years, it was observed and the need was felt that GenZ (Zoomers) are living under more stress and anxiety than earlier generations. To understand the basic and urgent requirement of starting this venture GenZ's Psychological Services.
                    </p>
                </section>

                {/* GenZ Info Section */}
                <section className="mb-8">
                    <h2 className="text-3xl font-bold mb-4 text-center text-blue-900">Who are GenZ (Generation of Zoomers)?</h2>
                    <p className="text-gray-900 mb-6">
                        Generation Z refers to the generation born roughly between 1997 - 2012, following millennials. They are the first generation to be completely raised with the Internet and Smartphones and have grown up with a very different experience of the world compared to previous generations.
                    </p>
                </section>

                {/* GenZ in Indian Context Section */}
                <section className="mb-8">
                    <h2 className="text-3xl font-bold mb-4 text-center text-blue-900">Gen Zoomers in Indian Context</h2>
                    <p className="text-gray-900 mb-6">
                        India, a country with one of the world's youngest populations, is aware of the potential and influence of GenZ or "Zoomers". Considering one of the most evolved generations, it is the first cohort to grow up in the digital age - where the world witnessed rapid technological advancements.
                    </p>
                    <div className="bg-gray-200 rounded-lg p-4 mb-4 hover:scale-105 transform transition-transform">
                        <h3 className="text-lg font-bold mb-2">The Economic Times: News Headlines</h3>
                        <p className="text-gray-900">
                            "Youth no longer shy of seeking Psychological counselling/ Psychiatric help."<br />
                            "GenZ demand for mental health drugs lifts sales 9% to Rs. 11,774 crore."<br />
                            "India's youth is realizing that you don't have to seek therapy support only for disorders but also to perform well in life's different aspects," said Konika Agarwal, Co-founder of MindPeers.
                        </p>
                    </div>
                    <p className="text-gray-900 mb-6">
                        The 18-35 age group reports disharmony between the measures of aspiration and leadership, showcasing a lack of direction among them.<br />
                        GenZ is experiencing higher levels of Anxiety & Stress as assessed by Psychologists.
                    </p>
                </section>

                {/* About the Counselor Section */}
                <section>
                    <h2 className="text-3xl font-bold mb-4 text-center text-blue-900">About Mr. Ramvir Singh</h2>
                    <div className="flex flex-col md:flex-row items-center justify-center mb-6">
                        <img 
                            src="\src\images\ramvir.jpg"
                            alt="Mr. Ramvir Singh"
                            className="object-cover w-full md:w-1/3 h-80 rounded-full mx-auto md:mx-4 mb-4 md:mb-0 shadow-2xl transition-shadow hover:scale-105"
                        />
                        <div className="md:w-2/3">
                            <ul className="list-disc list-inside text-gray-900 space-y-2">
                                <li>M.A. (English & Psychology (Pursuing)) M.Ed (Guidance & Counselling)</li>
                                <li>IDGC (International Diploma course in Guidance and Counselling) from NCERT in collaboration with COL, Vancouver, Canada</li>
                                <li>DAP (Drug Advisory Programme) Colombo Plan Certificate Course by SPYM, New Delhi, India (School Based Intervention on Drug and Substance Abuse)</li>
                                <li>CGRP course certificate from MGSIPA, Sec-26, Chandigarh, Punjab</li>
                                <li>16 years of teaching experience in Sr. Sec. School. Have in-depth knowledge and experience in dealing with adolescence, who are going through a period of STORM and STRESS</li>
                                <li>7 years of experience as CGRP (Cluster Guidance Resource Person) having 10 secondary/senior secondary schools in the cluster</li>
                                <li>13 years of experience in providing Psychometric test (Personality, Interest, Aptitude, and Creativity test) based career guidance and counseling to the students of 9th to 12th classes</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Home;
