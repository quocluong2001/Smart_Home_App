const axios = require('axios');
const Room = require('../models/Room');
const { check, validationResult } = require('express-validator');

const getRooms = async (req, res) => {
  try {
    const rooms = await Room.find().select('-_id -__v');

    return res.json(rooms);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

const getRoomById = async (req, res) => {
  try {
    const room = await Room.findOne({ room_id: req.params.room_id });
    if (!room) {
      return res.status(400).json({ errors: [{ msg: 'Room not found' }] });
    }
    return res.json(room);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

const getDevicesByRoomId = async (req, res) => {
  try {
    const room = await Room.findOne({ room_id: req.params.room_id }).populate(
      'devices',
      ['device_id', 'key', 'name', 'description', 'data']
    );

    return res.json(room.devices);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

const addRoom = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { group_name, description } = req.body;
  try {
    const room = await Room.findOne({ name: group_name });
    if (room) {
      return res
        .status(400)
        .json({ errors: [{ msg: 'Name has already been taken' }] });
    } else {
      const RoomFields = {
        name: group_name,
        description: description,
      };

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      await axios
        .post(
          'https://io.adafruit.com/api/v2/andrewquang/groups',
          RoomFields,
          config
        )
        .then(async (success) => {
          return res.json({ msg: ' New room has been added successfully' });
          // return res.status(200).send(success);
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

const updateRoom = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { group_name, description } = req.body;
  try {
    let room = await Room.findOne({ room_id: req.params.room_id });
    if (room) {
      const RoomFields = {
        name: group_name,
        description: description,
      };
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      await axios
        .put(
          `https://io.adafruit.com/api/v2/andrewquang/groups/${room.key}`,
          RoomFields,
          config
        )
        .then(async (success) => {
          room = await Room.findOneAndUpdate(
            { room_id: req.params.room_id },
            { $set: RoomFields },
            { new: true }
          );
          return res.json(room);
          // return res.status(200).send(success);
        })
        .catch((err) => {
          return res
            .status(400)
            .json({ errors: [{ msg: err.response.data.error }] });
        });
    } else {
      return res
        .status(400)
        .json({ errors: [{ msg: 'This room is not existed' }] });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

const deleteRoom = async (req, res) => {
  try {
    let room = await Room.findOne({ room_id: req.params.room_id });
    if (room) {
      await axios
        .delete(`https://io.adafruit.com/api/v2/andrewquang/groups/${room.key}`)
        .then(async (success) => {
          await Room.findOneAndRemove({ room_id: req.params.room_id });
          return res.json({ msg: 'Room has been deleted' });
        })
        .catch((err) => {
          return res
            .status(400)
            .json({ errors: [{ msg: err.response.data.error }] });
        });
    } else {
      return res
        .status(400)
        .json({ errors: [{ msg: 'This room is not existed' }] });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

module.exports = {
  getRooms,
  getRoomById,
  getDevicesByRoomId,
  addRoom,
  updateRoom,
  deleteRoom,
};
