const axios = require('axios');
const Device = require('../models/Device');
const Room = require('../models/Room');
const Type = require('../models/Type');
const { check, validationResult } = require('express-validator');

const getDevices = async (req, res) => {
  try {
    const devices = await Device.find();

    return res.json(devices);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

const getDeviceById = async (req, res) => {
  try {
    const device = await Device.findOne({ device_id: req.params.device_id });
    if (!device) {
      return res.status(400).json({ errors: [{ msg: 'Device not found' }] });
    }
    return res.json(device);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

const addDevice = async (req, res) => {
  // const { feed } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { room_name, device_name, description } = req.body;
  try {
    const room = await Room.findOne({ name: room_name });
    if (!room) {
      return res.status(400).json({ errors: [{ msg: 'Room not found' }] });
    } else {
      const DeviceFields = {
        feed: {
          name: device_name,
          description: description,
        },
      };

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      await axios
        .post(
          `https://io.adafruit.com/api/v2/andrewquang/feeds?group_key=${room.key}`,
          DeviceFields,
          config
        )
        .then(async (success) => {
          return res.json({ msg: ' New device has been added successfully' });
        })
        .catch((err) => {
          return res
            .status(400)
            .json({ errors: [{ msg: err.response.data.error }] });
        });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

const updateDevice = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { device_name } = req.body;
  try {
    let device = await Device.findOne({ device_id: req.params.device_id });
    if (device) {
      const DeviceFields = {
        name: device_name,
      };
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      await axios
        .put(
          `https://io.adafruit.com/api/v2/andrewquang/feeds/${device.key}`,
          DeviceFields,
          config
        )
        .then(async (success) => {
          device = await Device.findOneAndUpdate(
            { device_id: req.params.device_id },
            { $set: DeviceFields },
            { new: true }
          );
          return res.json(device);
        })
        .catch((err) => {
          return res
            .status(400)
            .json({ errors: [{ msg: err.response.data.error }] });
        });
    } else {
      return res
        .status(400)
        .json({ errors: [{ msg: 'This device is not existed' }] });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

const deleteDevice = async (req, res) => {
  try {
    let device = await Device.findOne({ device_id: req.params.device_id });
    if (device) {
      await axios
        .delete(
          `https://io.adafruit.com/api/v2/andrewquang/feeds/${device.key}`
        )
        .then(async (success) => {
          let room = await Room.findOne({
            key: device.key.split('.')[0],
          });
          let indexinRoom = room.devices.indexOf(device._id);
          room.devices = room.devices.splice(indexinRoom, 1);
          let type = await Type.findOne({ name: device.description });
          let indexinType = type.devices.indexOf(device._id);
          type.devices = type.devices.splice(indexinType, 1);
          await room.save();
          await type.save();
          await Device.findOneAndRemove({ device_id: req.params.device_id });
          return res.json({ msg: 'Device has been deleted' });
        })
        .catch((err) => {
          return res
            .status(400)
            .json({ errors: [{ msg: err.response.data.error }] });
        });
    } else {
      return res
        .status(400)
        .json({ errors: [{ msg: 'This device is not existed' }] });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

const getDeviceData = async (req, res) => {
  try {
    const device = await Device.findOne({ device_id: req.params.device_id });
    if (!device) {
      return res.status(400).json({ errors: [{ msg: 'Device not found' }] });
    }
    // console.log(device.data);
    const newDataArray = device.data.map(({ value, ...rest }) => value);
    return res.json(newDataArray);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

const addDatatoDevice = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { value } = req.body;
  try {
    let device = await Device.findOne({ device_id: req.params.device_id });
    if (device) {
      const ValueField = {
        value: value,
      };
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      await axios
        .post(
          `https://io.adafruit.com/api/v2/andrewquang/feeds/${device.key}/data`,
          ValueField,
          config
        )
        .then(async (success) => {
          return res.json({ msg: 'New Data has been added' });
        })
        .catch((err) => {
          return res
            .status(400)
            .json({ errors: [{ msg: err.response.data.error }] });
        });
    } else {
      return res
        .status(400)
        .json({ errors: [{ msg: 'This device is not existed' }] });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};
module.exports = {
  getDevices,
  getDeviceById,
  addDevice,
  updateDevice,
  deleteDevice,
  getDeviceData,
  addDatatoDevice,
};
