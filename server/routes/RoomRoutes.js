const express = require('express');
const { check } = require('express-validator');
const {
  getRooms,
  getRoomById,
  getDevicesByRoomId,
  addRoom,
  updateRoom,
  deleteRoom,
} = require('../controllers/RoomController');
const router = express.Router();

router.get('/rooms', getRooms);
router.get('/room/:room_id', getRoomById);
router.get('/room/:room_id/devices', getDevicesByRoomId);
router.post(
  '/room',
  [check('group_name', 'Group name is required').not().isEmpty()],
  addRoom
);
router.put('/room/:room_id', updateRoom);
router.delete('/room/:room_id', deleteRoom);

module.exports = router;
