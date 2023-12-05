import { useState, useEffect } from 'react';
import { apiKey, heroPhotoId} from './../constants';
import { generateApiUrl, fetchHeroImage} from './../utils';

export const HeroImage = () => {
    const [backgroundImage, setBackgroundImage] = useState('');
    
    const makeHeroImageDataFetch = async () => {
        try {
          const generatedApiUrl = generateApiUrl(apiKey, heroPhotoId);
          const heroImageUrl = await fetchHeroImage(generatedApiUrl);
          setBackgroundImage(heroImageUrl);
        } catch (error) {
          // Handle errors here
          console.error('Error in fetchData:', error);
        }
      };

      useEffect(() => {
        makeHeroImageDataFetch();
      }, []);

    return (
        <div className="App h-screen w-full bg-customBlue" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {/* Other content */}
        </div>
    )

}