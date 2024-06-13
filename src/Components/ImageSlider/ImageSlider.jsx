import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


// Import local images
import image1 from '../images/HomePic.jpg';
import image2 from '../images/Coaching.jpg';
import image3 from '../images/Drug.jpg';
import image4 from '../images/life.jpg';
import image5 from '../images/psychometric.jpg';
import image6 from '../images/IMG-20230828-WA0024.jpg';
import image7 from '../images/Coaching&Mentoring.jpg';
import image8 from '../images/IMG_20220315_131802.jpg';
import image9 from '../images/vision2.jpg';
import image10 from '../images/IMG-20220316-WA0060.jpg';

const ImageSlider = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
  ];

  const settings = {
    centerMode: true,
    centerPadding: '0',
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show 1 slide on small screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 640, // Tailwind's sm breakpoint (640px)
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768, // Tailwind's md breakpoint (768px)
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024, // Tailwind's lg breakpoint (1024px)
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1280, // Tailwind's xl breakpoint (1280px)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-blue-100 container mx-auto p-4 flex justify-around">
      <Slider {...settings} className="w-full h-96">
        {images.map((image, index) => (
          <div key={index} className="px-2 w-full h-96">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-96 object-contain transition-opacity duration-500 ease-in-out slick-center:opacity-200 slick-center:scale-100 slick-active:opacity-50 slick-active:scale-75"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
