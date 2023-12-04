import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { HeroImage } from '../components';

export const HomePage = () => {
    return (
        <div className="relative">
          {/* Content for your homepage */}
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center  w-full opacity-80">
            <h1 className="text-5xl text-white text-white-600/75 text-shadow text-shadow-blue" style={{textShadow: `1px 1px 10px white`}}>Kyle Savoca Photography</h1>
            <h2 className="text-xl text-center text-white text-white-600/75" style={{textShadow: `1px 1px 10px white`}}>Landscape <FontAwesomeIcon icon={faCamera} className="text-sm text-white-200 mr-2" />Wildlife <FontAwesomeIcon icon={faCamera} className="text-sm text-white-200 mr-2" /> Astrophotography</h2>
          </div>
          {/* Other content or components */}
          <HeroImage />
        </div>
      );
}