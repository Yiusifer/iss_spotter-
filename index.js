//const { fetchMyIP} = require('./iss');
const { fetchCoordsByIP } = require("./iss");
const { fetchISSFlyOverTimes } = require("./iss")

/*fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log('It worked! Returned IP:', ip);
});*/

fetchCoordsByIP("166.48.92.200",(error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log('It worked! Returned coordinates:', ip);
});

let coordinates = { latitude: 43.797569274902344, longitude: -79.22724914550781 }

fetchISSFlyOverTimes(coordinates,(error, flyOver) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  console.log("It worked!", flyOver)
})



