const axios = require('axios');
const e = require('cors');
// const Test = require('../models/Test');
const Device = require('../models/Device');

const getData = async () => {
  try {
    const devices = await Device.find();
    devices.map(async (device) => {
      const response = await axios.get(
        `https://io.adafruit.com/api/v2/hohoanghuy2001/feeds/${device.key}/data`
      );

      const responseData = response.data.slice(0, 10);

      if (responseData.length !== 0) {
        responseData.map(async (eachData) => {
          const { id, value, created_at } = eachData;
          const newData = { data_id: id, value, created_at };
          if (device.data.length == 15) {
            device.data.pop();
          }

          if (device.data.length == 0) {
            device.data.unshift(newData);
          }

          if (device.data.filter((e) => e.data_id == id).length == 0) {
            device.data.unshift(newData);
          }
        });
        await device.save();

        // responseData.map(async (eachData) => {
        //   const { id, value, created_at } = eachData;
        //   await axios.delete(
        //     `https://io.adafruit.com/api/v2/andrewquang/feeds/${device.key}/data/${id}`
        //   );
        // });
      }
    });
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = getData;
