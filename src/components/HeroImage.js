import { useState, useEffect } from 'react';
import { createFlickr } from "flickr-sdk"

export const HeroImage = () => {
    const [backgroundImage, setBackgroundImage] = useState('');
    // const [res, setRes] = useState();

    // const apiKey = '5018ebf848215c876989ce7422fc5a78';
    // const photoId = '53252681097';

    // const { flickr } = createFlickr(apiKey)

    // useEffect( async () => {
    //     const res = await flickr("flickr.photos.getInfo", {
    //         photo_id: photoId,
    //     });
    //     console.log(res);
    //     setRes(res);
    // }, []);

    // https://github.com/flickr/flickr-sdk/tree/next



    //  figure out Flickrs API for image size

    
    useEffect(() => {
        const apiKey = '5018ebf848215c876989ce7422fc5a78';
        const photoId = '53252681097';
        const apiUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=${apiKey}&photo_id=${photoId}&extras=url_b&format=json&nojsoncallback=1`;

        fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const photoInfo = data.photo;
            const imageUrl = `https://farm${photoInfo.farm}.staticflickr.com/${photoInfo.server}/${photoInfo.id}_${photoInfo.secret}.jpg`;
            setBackgroundImage(imageUrl);
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