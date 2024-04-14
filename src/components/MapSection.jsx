import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FaLocationDot } from "react-icons/fa6";
import './styles.css'

const MapSection = () => {
  // Example position
  const position = [28.6129, 77.2295];
  const zoom = 13;

  return (
    <div className="w-[48%] ml-4 z-10">
      <MapWithMarker position={position} zoom={zoom} />
    </div>
  );
};

const MapWithMarker = ({ position, zoom }) => {
  // Convert the icon component to HTML string

  return (
    <MapContainer
      center={position}
      zoom={zoom}
      style={{ height: "515px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          New Delhi <br /> India Gate
        </Popup>
        <FaLocationDot color="red" size={16} />
      </Marker>
    </MapContainer>
  );
};

export default MapSection;
