import { useState } from "react";
import { getUserLocation } from "../services/locationService";
import { fetchNearbyHospitals } from "../services/hospitalService";

export default function useSOSWorkflow() {
  const [status, setStatus] = useState("Idle");
  const [location, setLocation] = useState(null);
  const [hospitals, setHospitals] = useState([]);

  const triggerSOS = async () => {
    try {
      setStatus("Fetching location...");

      const loc = await getUserLocation();
      setLocation(loc);
      setStatus("Location fetched ✅");

      setStatus("Finding nearby hospitals...");
      const nearby = await  fetchNearbyHospitals(loc.lat, loc.lng);
      setHospitals(nearby);
      setStatus("Hospitals found ✅");

      setStatus("🚨 SOS Alert Sent!");
    } catch (error) {
      console.error("SOS Workflow Error:", error);
      setStatus("❌ Error: " + error.message);
    }
  };

  return {
    status,
    location,
    hospitals,
    triggerSOS
  };
}
