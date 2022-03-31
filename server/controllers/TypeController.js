const Type = require('../models/Type');

const getTypes = async (req, res) => {
  try {
    const types = await Type.find().select('-_id -__v');

    return res.json(types);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};
const getTypeById = async (req, res) => {
  try {
    const type = await Type.findOne({ type_id: req.params.type_id });

    return res.json(type);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

const getDevicesByTypeId = async (req, res) => {
  try {
    const type = await Type.findOne({ type_id: req.params.type_id }).populate(
      'devices',
      ['device_id', 'key', 'name', 'description', 'data']
    );

    return res.json(type.devices);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};
module.exports = { getTypes, getTypeById, getDevicesByTypeId };
