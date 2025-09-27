// src/services/locationService.js

export async function getUserLocation() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocation not supported in this browser"));
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        try {
          const address = await getAddressFromCoords(lat, lng);
          const what3words = await getWhat3WordsAddress(lat, lng);
          resolve({ lat, lng, address, what3words });
        } catch (err) {
          reject(err);
        }
      },
      (error) => {
        reject(new Error("Unable to fetch location: " + error.message));
      }
    );
  });
}

async function getAddressFromCoords(lat, lng) {
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY; // 👈 in .env
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`;

  const res = await fetch(url);
  const data = await res.json();

  if (data.status === "OK" && data.results.length > 0) {
    return data.results[0].formatted_address;
  } else {
    throw new Error("Could not fetch address from coordinates");
  }
}

async function getWhat3WordsAddress(lat, lng) {
  const apiKey = process.env.REACT_APP_WHAT3WORDS_API_KEY; // 👈 in .env
  const url = `https://api.what3words.com/v3/convert-to-3wa?coordinates=${lat},${lng}&key=${apiKey}`;

  const res = await fetch(url);
  const data = await res.json();

  if (data && data.words) {
    return data.words; // example: "filled.count.soap"
  } else {
    throw new Error("Could not fetch What3Words address");
  }
}
