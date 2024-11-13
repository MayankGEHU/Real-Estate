import React, { useEffect } from 'react';

const StreetViewPanorama = () => {
  useEffect(() => {
    const googleMapsScript = document.createElement('script');
    googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY`;
    googleMapsScript.async = true;
    googleMapsScript.onload = () => {
      const map = new window.google.maps.StreetViewPanorama(
        document.getElementById('street-view'),
        {
          position: { lat: 30.3165, lng: 78.0322 }, // Replace with your coordinates
          pov: { heading: 165, pitch: 0 },
          zoom: 1,
        }
      );
    };
    document.head.appendChild(googleMapsScript);
  }, []);

  return <div id="street-view" style={{ width: '100%', height: '500px' }} />;
};

export default StreetViewPanorama;
