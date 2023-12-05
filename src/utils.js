export const generateApiUrl = (apiKey, heroPhotoId) => `https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=${apiKey}&photo_id=${heroPhotoId}&extras=url_b&format=json&nojsoncallback=1`;
export const generateGetListUrl = (apiKey, collectionId) => `https://www.flickr.com/services/rest/?method=flickr.collections.getInfo&api_key=${apiKey}&user_id=${collectionId}&format=json&nojsoncallback=1`

export const fetchHeroImage = async (generatedApiUrl) => {
    try {
      const response = await fetch(generatedApiUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const data = await response.json();
      const sizes = data.sizes.size;
      const desiredSize = sizes.find((size) => size.label === 'Large 2048');
  
      if (desiredSize) {
        return desiredSize.source; // Return URL for the desired size
      } else {
        return sizes[sizes.length - 1].source; // Return the last size's URL
      }
    } catch (error) {
      console.error('Error fetching photo info:', error);
      throw error;
    }
  };