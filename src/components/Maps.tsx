"use client";

import { APIProvider, Map } from "@vis.gl/react-google-maps";

const Maps = () => {
  const center = {
    lat: 45.57356210681623,
    lng: -73.72871787116445,
  };

  return (
    <div className="w-full max-h-[500px] h-auto">
      <APIProvider apiKey="AIzaSyApj-7P8eOCVQvzcqPyZAtT1TFKMkJN68o">
        <Map
          defaultCenter={center}
          defaultZoom={12}
          //   style={containerStyle}
          className="h-[300px] md:h-full"
        />
      </APIProvider>
    </div>
  );
};

export default Maps;
