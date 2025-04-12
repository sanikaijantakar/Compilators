import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <section id='home' className='relative w-full'>
      <div className='relative w-full h-screen'>
        <img src="/home.jpg" alt="home" className='w-full h-full object-cover' />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90  to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-center items-start px-10 space-y-6">
          <h1 className="text-white text-5xl font-extrabold drop-shadow-lg">
            Skin Cancer Classifier
          </h1>
          <p className="text-gray-200 text-lg max-w-xl leading-relaxed">
            Harness the power of deep learning for skin cancer detection. Upload an image, get instant insights, and visualize where the model is focusing — all in one click.
          </p>

          <Link
            to="/detect"
            className="inline-block px-8 py-3 bg-white text-teal-700 font-semibold rounded-full shadow-md hover:bg-teal-600 hover:text-white transition-all duration-300"
          >
            Start Detection
          </Link>
        </div>
      </div>
    </section>
  );
};
