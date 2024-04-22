import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='flex justify-center items-center min-h-screen bg-gradient-to-br from-green-100 to-blue-900 p-6'>
            <div className="bg-gray-100 pl-5">


                {/* Welcome Section */}
                <section className="container mx-auto px-4 py-8">
                    <h2 className="text-3xl font-bold mb-4">Welcome to Our Psychometric and Counseling Services</h2>
                    <p className="text-gray-700 mb-6">
                    The initiative to start this venture tok approx. 17 years of extensive research, observation and analysis. During those 17 years it was observed and need was felt that GenZ (Zoomers) are living under mote stress and anxiety then the earlier generations. To understand the basic and urgent requirement of staring this venture GenZ's Psychological Services. 
                    </p>
                </section>

                <section className="container mx-auto px-4 py-8">
                    <h2 className="text-3xl font-bold mb-4">Who are GenZ(Generation of Zoomers) ?</h2>
                    <p className="text-gray-700 mb-6">
                    Generation Z refers to the generation born roughly between 1997 - 2012, following millennials. They are the first generation to be completely raised with the Internet and Smartphones and have grown up with a very different experience of the world compared to previous generations.

                    Specifically, they are interconnected globally with a diverse range of people and largely communicate through technology and Social media.
                    </p>
                </section>

                <section className="container mx-auto px-4 py-8">
                    <h2 className="text-3xl font-bold mb-4">GEN ZOOMERS IN INDIAN CONTEXT</h2>
                    <p className="text-gray-700 mb-6">
                    India a coutry with one of the world's youngest population is aware of the potential and influence of GenZ or "Zoomers". Considering one of the most evolved generations, it is the first cohort to grow up in the digital age - where the world witnessed rapid technological advancements.
                    </p>

                    <br />

                    <h3 className="text-xl font-bold mb-4">'The Economic Times: News Headline'</h3>
                    <p className="text-gray-700 mb-6">
                    "Youth no longer Shy of seeking Psychological counselling/ Psychiatric help."
                    <br />
                    "GenZ demand for mental health drugs lifts sales 9% to Rs. 11,774 crore"
                    <br />
                    "India's youth is realising that you don't have to seek therapy support only for disorders but also to perform well in life's different aspects." said Konika Agarwal, Co-founder of MindPeers
                    </p>
                    <br />
                    <p>
                        The 18-35 age group reports disharmony between the measures of aspiration and leadership, showcasing a lack if direction among them.
                        <br />
                        GenZ is experiencing higher levels of Anxiety & Stress as assessed by Psychologists.
                    </p>

                </section>

                {/* About the Counselor Section */}
                <section className="container mx-auto px-4 py-8">
                    <h2 className="text-3xl font-bold mb-4">About Mr. Ramvir Singh</h2>
                    <div className="flex">
                        <div className="w-72 h-72 rounded-full overflow-hidden mr-8">
                            <img
                                src="\src\images\ramvir.jpg"
                                alt="Dr. John Doe"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div>
                            <p className="text-gray-700 mb-4">
                                Dr. John Doe is a highly respected psychologist and counselor with over 15 years of experience in the field. He holds a Ph.D. in Clinical Psychology from a renowned university and is a certified psychometric assessor.
                            </p>
                            <p className="text-gray-700 mb-4">
                                Dr. Doe's expertise lies in helping individuals overcome various emotional and behavioral challenges, such as anxiety, depression, relationship issues, and personal growth. He utilizes evidence-based therapies, including cognitive-behavioral therapy (CBT), to provide tailored treatment plans for each client.
                            </p>
                            <h3 className="text-2xl font-bold mb-2">Achievements and Recognitions</h3>
                            <ul className="list-disc list-inside text-gray-700">
                                <li>Awarded the "Outstanding Counselor of the Year" by the National Counseling Association in 2020</li>
                                <li>Published numerous research papers in prestigious psychology journals</li>
                                <li>Served as a keynote speaker at various mental health conferences</li>
                                <li>Recognized for his contributions to the field of psychometric assessments</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Home;
