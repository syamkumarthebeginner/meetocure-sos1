import React from "react";
import LocationDetails from "./LocationDetails";

const StatusPanel = ({ statusMessage, currentStep, locationData, hospitals, acceptedHospital }) => {
  return (
    <div className="status-panel">
      <h3>Status</h3>
      <p>{statusMessage}</p>

      <LocationDetails locationData={locationData} />

      {hospitals && hospitals.length > 0 && (
        <div className="hospital-queue">
          <h4>🏥 Hospital Queue</h4>
          {hospitals.map((h, idx) => (
            <p key={idx}>
              {h.name} ({h.distance}m) — {h.status}
            </p>
          ))}
        </div>
      )}

      {acceptedHospital && (
        <p className="accepted">
          ✅ {acceptedHospital.name} accepted! Help is on the way.
        </p>
      )}
    </div>
  );
};

export default StatusPanel;
