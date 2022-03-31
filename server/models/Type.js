const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TypeSchema = new Schema({
  name: {
    type: String,
  },
  // Array of devices
  devices: [
    {
      type: Schema.Types.ObjectId,
      ref: 'devices',
    },
  ],
});

module.exports = Type = mongoose.model('type', TypeSchema);
