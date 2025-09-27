import React from "react";

const LocationDetails = ({ locationData }) => {
  if (!locationData) return null;

  return (
    <div className="location-details">
      <h4>📍 Location</h4>
      <p>
        Lat: {locationData.lat}, Lng: {locationData.lng}
      </p>
      {locationData.formatted_address && (
        <p>📬 {locationData.formatted_address}</p>
      )}
      {locationData.what3words && (
        <p>🎯 {locationData.what3words}</p>
      )}
    </div>
  );
};

export default LocationDetails;
