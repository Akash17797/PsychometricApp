import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="bg-gradient-to-br from-green-100 to-blue-900 w-full">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8 flex flex-col-reverse sm:flex-row">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                            Psychometric Testing
                            <span className="hidden sm:block text-2xl">by Ramvir Singh</span>
                        </h2>
                        <div className='bg-gradient-to-br from-green-500 to-blue-700 p-4 rounded-full'>
                            <p className=" animate-bounce text-green-950 text-2xl pt-2 font-bold sm:text-center">Did you know?</p> <br />
                            <p className='sm:text-center text-balance p-2'>
                                Did you know that having an empathetic, attuned counselor can actually increase the thickness of your Pre-frontal neo cortex (the Problem Solving, higher-level thinking of our brain). When trained caregivers join us on our journey of dreaming, healing, and transformation, it not only changes our lives but also our brain structure. Very Cool! Right?
                            </p>
                        </div>
                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-yellow-600 rounded-lg hover:opacity-75 mt-4 sm:mt-0"
                            to="/"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            &nbsp; Click for Guidance
                        </Link>
                    </div>
                    
                </div>
                <div className="absolute inset-0 w-full lg:my-20 sm:pt-1 pt-12 h-full flex items-center">
                        <img className="w-52 sm:w-96 rounded-full" src="src\images\HomeUp.jpg" alt="image1" />
                    </div>
            </aside>

            <div className="grid place-items-center sm:mt-20">
                <img className="max-w-78 rounded-full" src="src\images\homedown.jpg" alt="image2" />
            </div>

            <h1 className=" text-center text-3xl sm:text-5xl py-10 font-medium">Build your dreams Now</h1>
        </div>
    );
}

export default Home;
