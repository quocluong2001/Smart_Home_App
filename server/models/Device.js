const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DeviceSchema = new Schema({
  device_id: {
    type: String,
  },
  key: {
    type: String,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  data: [
    {
      data_id: {
        type: String,
      },
      value: {
        type: String,
      },
      created_at: {
        type: Date,
      },
    },
  ],
  // group: [
  //   {
  //     id: {
  //       type: String,
  //     },
  //     key: {
  //       type: String,
  //     },
  //     name: {
  //       type: String,
  //     },
  //   },
  // ],
});

module.exports = Device = mongoose.model('devices', DeviceSchema);
