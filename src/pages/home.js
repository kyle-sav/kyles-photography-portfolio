import React from 'react';
import { HeroImage } from '../components';

export const HomePage = () => {
    return (
        <div className="relative">
          {/* Content for your homepage */}
          <h1 className="text-5xl w-full text-white text-white-600/75 text-shadow text-shadow-blue text-center absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Welcome to my Photography Portfolio</h1>
          {/* Other content or components */}
          <HeroImage />
        </div>
      );
}