"use client";

import { APIProvider, Map } from "@vis.gl/react-google-maps";

// import { MapContainer, TileLayer, Marker } from "react-leaflet";

// import { MapContainer, TileLayer, useMap, Marker } from 'react-leaflet'
// import "leaflet/dist/leaflet.css";

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
          className="h-[300px] md:h-full"
        />
      </APIProvider>

      {/* <MapContainer center={[51.505, -0.09]} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          // attribution="&copy; OpenStreetMap contributors"
        />
        <Marker position={[51.505, -0.09]} />
      </MapContainer> */}
    </div>
  );
};

export default Maps;
