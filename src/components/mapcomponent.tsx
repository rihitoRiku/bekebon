"use client";
import React from "react";

interface MapProps {
  lat: number;
  lng: number;
}

const MapComponent: React.FC<MapProps> = ({ lat, lng }) => {
  const embedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${lat},${lng}!5e0!3m2!1sen!2sus!4v1617171234567!5m2!1sen!2sus`;
  return (
    <iframe
      width="100%"
      height="100%"
      style={{ border: 0, borderRadius: "6px" }}
      allowFullScreen={true}
      loading="lazy"
      src={embedUrl}
    ></iframe>
  );
};

export default MapComponent;
