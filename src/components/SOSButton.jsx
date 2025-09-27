import React from "react";

const SOSButton = ({ isCountdownActive, countdown, isSOSActive, onPress }) => {
  return (
    <div className="sos-button-container">
      <button
        onClick={onPress}
        className={`sos-button ${isSOSActive ? "active" : ""}`}
      >
        {isCountdownActive ? countdown : "SOS"}
      </button>
    </div>
  );
};

export default SOSButton;
