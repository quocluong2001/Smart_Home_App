const config = require('config');
const io_key = config.get('io_key');
const setIOkey = require('../ultis/setIOKey');
// const getTest = require('./testfetch');
const getRooms = require('./getRooms');
const getDevices = require('./getDevices');
const addDevices = require('./addDevices');
const getData = require('./getData');

// ! if the Adafruit is set to public we dont need to setIOkey
setIOkey(io_key);

// Fetch api from Adafruit at Interval of 5 seconds
const fetchInterval = setInterval(async () => {
  await getDevices();
  await getRooms();
  await addDevices();
  await getData();
}, 5000);

const fetch = async () => {
  // var startTime = performance.now();
  // await getDevices();
  // await getRooms();
  // await addDevices();
  // await getData();
  // var endTime = performance.now();
  // console.log(`${endTime - startTime} milliseconds`);
};
module.exports = fetchInterval;
