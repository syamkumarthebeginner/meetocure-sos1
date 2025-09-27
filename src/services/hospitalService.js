// src/services/hospitalService.js

/**
 * This service fetches nearby hospitals using Google Maps Places API
 * Requires REACT_APP_GOOGLE_MAPS_API_KEY in your .env file
 */

export async function fetchNearbyHospitals(lat, lng) {
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    throw new Error("Google Maps API key is missing! Please check .env file.");
  }

  const radius = 5000; // search radius in meters (5 km)
  const type = "hospital";

  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${radius}&type=${type}&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== "OK") {
      console.error("Google Places API error:", data);
      throw new Error(`API Error: ${data.status}`);
    }

    // Return only hospital name and location
    return data.results.map((hospital) => ({
      name: hospital.name,
      address: hospital.vicinity,
      location: hospital.geometry.location,
      rating: hospital.rating || "N/A",
    }));
  } catch (error) {
    console.error("Failed to fetch hospitals:", error);
    throw error;
  }
}
