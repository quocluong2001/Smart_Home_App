const axios = require('axios');
// const Test = require('../models/Test');
const Device = require('../models/Device');
const Type = require('../models/Type');

const getDevices = async () => {
  try {
    const response = await axios.get(
      'https://io.adafruit.com/api/v2/andrewquang/feeds'
    );

    const responseDevices = response.data;

    let tempDevices = [];
    let tempTypes = [];

    responseDevices.map(async (eachDevice) => {
      const { id, key, name, description, username } = eachDevice;
      const types = await Type.find({ name: description });

      if (types.length === 0 && !tempTypes.includes(description)) {
        const newType = new Type({
          name: description,
        });
        tempTypes.unshift(description);
        await newType.save();
      }

      const devices = await Device.find({ device_id: id });

      if (devices.length === 0 && !tempDevices.includes(id)) {
        const newDevice = new Device({
          device_id: id,
          key: key,
          name: name,
          description: description == null ? '' : description,
          username: username,
        });
        tempDevices.unshift(id);
        await newDevice.save();
      }
    });
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = getDevices;
