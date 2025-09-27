// import React from "react";

// const SOSButton = ({ isCountdownActive, countdown, isSOSActive, onPress }) => {
//   return (
//     <div className="sos-button-container">
//       <button
//         onClick={onPress}
//         className={`sos-button ${isSOSActive ? "active" : ""}`}
//       >
//         {isCountdownActive ? countdown : "SOS"}
//       </button>
//     </div>
//   );
// };

// export default SOSButton;
// src/components/SOSButton.jsx
import React from "react";
import "./SOSButton.css"; // 👈 create a CSS file for styles

const SOSButton = ({ onClick }) => {
  return (
    <div className="sos-container">
      <div className="background-logo"></div>
      <button className="sos-button" onClick={onClick}>
        🚨 SOS 🚨
      </button>
    </div>
  );
};

export default SOSButton;
