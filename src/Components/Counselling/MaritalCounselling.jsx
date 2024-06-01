import React from 'react';
import backgroundImage from '../Counselling/vision.jpg';

const MaritalCounselling = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}
    >
      <div className="flex w-full bg-opacity-15 rounded-2xl shadow-lg bg-white">
        <div className="flex-none w-2/6 m-2">
          <img src="\src\Components\images\career counselling.jpg" alt="vision" className="rounded-l-2xl h-full object-cover" />
        </div>
        <div className="flex-grow p-8 bg-blue-200 bg-opacity-55 rounded-2xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">Marital Counselling</h1>
          <p className="text-lg text-gray-700 mb-4 fade-in">
            Marriage counselling is a type of joint counselling in which a couple seeks help typically due to relationship issues. It differs from other types of counselling because two married individuals are involved in each session.
          </p>
          <p className="text-lg text-gray-700 mb-4 fade-in">
            Marriage counselling is considered by many marriage counsellors as the most difficult therapy to undertake, especially with couples who are angry, hurt, anguished, stressed, and low in confidence, and treating the counselling therapy as a medium to prove their partner wrong. They view the process as a court and the counsellor as a judge who, according to them, will hopefully straighten out their partner. Actually, that is not the purpose of marriage therapy.
          </p>
          <p className="text-lg text-gray-700 mb-4 fade-in">
            The main objective of marriage counselling is to help couples understand and resolve their differences to improve their relationship. Marriage counselling gives the couples the tools to communicate with more compassion and less fear while learning how to resolve their problems and deal with their conflicts in a healthy manner.
          </p>
          <p className="text-lg text-gray-700 mb-4 fade-in">
            The married couple should not hesitate to seek marriage counselling as soon as possible to avoid their conflicts becoming irreparable. In fact, the couple may have better results if they don't wait until their marriage is unraveling. As Jaime Bronstein says, "Marriage counselling can benefit couples who just want to strengthen their relationship and feel more connected and bonded with one another."
          </p>
          {/* Additional content with animation can be added here */}
        </div>
      </div>
    </div>
  );
}

export default MaritalCounselling;
