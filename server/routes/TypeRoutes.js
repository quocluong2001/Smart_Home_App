const {
  getTypes,
  getTypeById,
  getDevicesByTypeId,
} = require('../controllers/TypeController');
const express = require('express');
const router = express.Router();

router.get('/types', getTypes);
router.get('/type/:type_id', getTypeById);
router.get('/type/:type_id/devices', getDevicesByTypeId);

module.exports = router;
