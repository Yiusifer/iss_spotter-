/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */

const request = require('request');

const fetchMyIP =  (callback) => {
  // use request to fetch IP address from JSON API
  request("https://api.ipify.org?format=json", (error, response, body) => {
    if (error) {
      return callback(error, null);
    }

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    const ip = JSON.parse(body).ip;
    callback(null, ip);

  });
};

const fetchCoordsByIP = (stringIP, callback) => {
  request(`https://freegeoip.app/json/${stringIP}`, (error, response, body) => {
    if (error) {
      return callback(error, null)
    };
    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching Coordinates for IP: ${body}`), null);
      return;
    }
    const { latitude, longitude } = JSON.parse(body);

    return callback(null, { latitude, longitude });

  })

};

const fetchISSFlyOverTimes = function(coords, callback) {
  request ("https://iss-pass.herokuapp.com/json/?lat=43.797569274902344&lon=-79.22724914550781", (error, response, body) => {
    if (error) {
      return callback(error,null);
    };

    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching Coordinates for IP: ${body}`), null);
    };

   let results = JSON.parse(body);
   return callback(null, results);
  })
};




module.exports = { fetchMyIP };
module.exports = { fetchCoordsByIP };
module.exports = { fetchISSFlyOverTimes };