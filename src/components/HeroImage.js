import { useState, useEffect } from 'react';
import { apiKey, heroPhotoId} from './../constants';
import { generateApiUrl} from './../utils';

export const HeroImage = () => {
    const [backgroundImage, setBackgroundImage] = useState('');

    useEffect(() => {
        const generatedApiUrl = generateApiUrl(apiKey, heroPhotoId);
        fetch(generatedApiUrl)
        .then(response => response.json())
        .then(data => {
            // const photoInfo = data.photo;
            // const imageUrl = `https://farm${photoInfo.farm}.staticflickr.com/${photoInfo.server}/${photoInfo.id}_${photoInfo.secret}.jpg`;
            // setBackgroundImage(imageUrl);
            const sizes = data.sizes.size;
            const desiredSize = sizes.find(size => size.label === 'Large 2048');

            if (desiredSize) {
                const imageUrl = desiredSize.source; // URL for the desired size
                // Use 'imageUrl' in your application
                setBackgroundImage(imageUrl);
              }
              else {
                const imageUrl = sizes.slice(-1)[0].source;
                setBackgroundImage(imageUrl);
              }
        })
        .catch(error => {
            console.error('Error fetcching photo info', error);
        })
    }, [])

    return (
        <div className="App h-screen w-full" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {/* Other content */}
        </div>
    )

}