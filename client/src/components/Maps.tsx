"use client";

import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

// Dynamically import Leaflet and react-leaflet components
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
);

// Dynamically import Leaflet and configure the default icon
let DefaultIcon: any;
if (typeof window !== 'undefined') {
  const L = require('leaflet');
  DefaultIcon = L.icon({
    iconUrl: '/location-indicator-red.svg', // Path to the default marker icon
    iconRetinaUrl: '/location-indicator-red.svg', // Path to the retina marker icon
    iconSize: [50, 50], // Size of the icon
    iconAnchor: [12, 41], // Point of the icon that corresponds to the marker's location
    popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
  });
}

const Maps = () => {
  const position : [number , number] = [45.57356210681623, -73.72871787116445]; // ISGA coordinates
  const adress = '1933 Av. Laplante, Laval, QC H7S 1E6' //ISGA adress
  return (
    <div className="w-full max-h-[500px] h-auto z-10">
        {/* <APIProvider apiKey="AIzaSyApj-7P8eOCVQvzcqPyZAtT1TFKMkJN68o">
        <Map
          defaultCenter={center}
          defaultZoom={12}
          className="h-[300px] md:h-full"
        />
      </APIProvider> */}

      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={DefaultIcon}>
          <Popup>
            {adress}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Maps;