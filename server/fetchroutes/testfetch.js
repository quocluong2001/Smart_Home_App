// ! THIS IS FOR TESTING PURPOSE
// ! RENEMBER TO UNPLUG AFTER USE

const axios = require('axios');
const Test = require('../models/Test');

const getTest = async () => {
  try {
    const res = await axios.get(
      'https://io.adafruit.com/api/v2/andrewquang/feeds/test/data'
    );
    // const test = await Test.create({
    //   name: response.data[0].feed_key,
    //   description: response.data[0].value,
    // });
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = getTest;
