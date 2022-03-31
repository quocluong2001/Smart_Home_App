// ! THIS IS FOR TESTING PURPOSE
// ! RENEMBER TO UNPLUG AFTER USE

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TestSchema = new Schema({
  name: {
    type: String,
    unique: false,
    required: true,
  },
  description: {
    type: String,
    unique: false,
    required: true,
  },
});

const Test = mongoose.model('Test', TestSchema);

module.exports = Test;
