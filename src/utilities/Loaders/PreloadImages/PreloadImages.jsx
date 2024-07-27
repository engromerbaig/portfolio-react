import React, { useEffect } from 'react';

const PreloadImages = ({ images }) => {
  useEffect(() => {
    const preloadImage = (url) => {
      const img = new Image();
      img.src = url;
    };

    images.forEach((image) => preloadImage(image));
  }, [images]);

  return null;
};

export default PreloadImages;
