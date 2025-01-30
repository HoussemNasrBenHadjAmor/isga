"use client";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';
import "leaflet/dist/leaflet.css";


// Fix for default marker icon
const DefaultIcon = L.icon({
  iconUrl: '/location-indicator-red.svg', // Path to the default marker icon
  iconRetinaUrl: 'location-indicator-red.svg', // Path to the retina marker icon
  iconSize: [50, 50], // Size of the icon
  iconAnchor: [12, 41], // Point of the icon that corresponds to the marker's location
  popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
});

L.Marker.prototype.options.icon = DefaultIcon; // Set the default icon

const Maps = () => {
  // const center = {
  //   lat: 45.57356210681623,
  //   lng: -73.72871787116445,
  // };

  const position = [45.58161642164231, -73.73010229089905]
  const address = "1933 Av. Laplante, Laval, QC H7S 1E6";
  return (
    <div className="w-full max-h-[500px] h-auto"
    >
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
        className="w-full h-full -z-10"
      >
        <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
        <Marker position={position}>
          <Popup>
            {address}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Maps;
