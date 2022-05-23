//const { fetchMyIP} = require('./iss');
const { fetchCoordsByIP } = require("./iss");
const { fetchISSFlyOverTimes } = require("./iss")
const { nextISSTimesForMyLocation } = require('./iss');

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

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  console.log(passTimes);
});

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);

    datetime.setUTCSeconds(pass.risetime);

    const duration = pass.duration;
    
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

