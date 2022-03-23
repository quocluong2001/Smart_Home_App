// ! THIS IS FOR TESTING PURPOSE
// ! RENEMBER TO UNPLUG AFTER USE

const Test = require('../models/Test');

const addTest = async (req, res) => {
  try {
    const test = await Test.create({
      name: req.body.name,
      description: req.body.description,
    });
    // await test.save();
    return res.json({
      success: true,
      message: 'Test successfully added.',
    });
  } catch (error) {
    console.log('Error with adding test: ', error);
    return res.json({
      success: false,
      message: 'Error with adding test. See server console for more info.',
    });
  }
};

const getTests = async (req, res) => {
  try {
    const tests = await Test.find().select(['-__v']);

    return res.json({
      success: true,
      message: tests,
    });
  } catch (error) {
    console.log('Error with fetching tests: ', error);
    return res.json({
      success: false,
      message: 'Error with fetching tests. See server console for more info.',
    });
  }
};

module.exports = {
  addTest,
  getTests,
};
