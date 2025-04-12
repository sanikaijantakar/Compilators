import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className='bg-teal-600 flex items-center justify-center fixed top-0 left-0 w-full h-19 z-10'>
      <nav className="bg-white/20 backdrop-blur-md rounded-full">
        <div className="container flex items-center justify-center p-6 mx-auto text-gray-300 capitalize">
          <Link to="/" className="mx-3 hover:cursor-pointer hover:text-white transition-all">Home</Link>
          <Link to="/about" className="mx-3 hover:cursor-pointer hover:text-white transition-all">About</Link>
          <Link to="/detect" className="mx-3 hover:cursor-pointer hover:text-white transition-all">Detect</Link>
        </div>
      </nav>
    </div>
  );
};
