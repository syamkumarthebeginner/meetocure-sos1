import React from "react";
import SOSButton from "./components/SOSButton";
import EmergencyModal from "./components/EmergencyModal";
import StatusPanel from "./components/StatusPanel";
import LocationDetails from "./components/LocationDetails";
import useSOSWorkflow from "./hooks/useSOSWorkflow";

const MeetoCureSOSComponent = () => {
  const {
    isCountdownActive,
    countdown,
    isSOSActive,
    statusMessages,
    location,
    hospitals,
    showModal,
    handleSOSPress,
    handleCloseModal,
  } = useSOSWorkflow();

  return (
    <div className="meetocure-sos">
      <h1>🚨 MeetoCure SOS</h1>
      <SOSButton
        isCountdownActive={isCountdownActive}
        countdown={countdown}
        isSOSActive={isSOSActive}
        onPress={handleSOSPress}
      />

      <StatusPanel messages={statusMessages} />
      {location && <LocationDetails location={location} />}

      {showModal && (
        <EmergencyModal
          onClose={handleCloseModal}
          location={location}
          hospitals={hospitals}
        />
      )}
    </div>
  );
};

export default MeetoCureSOSComponent;
