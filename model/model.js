// Load required packages
var mongoose = require('mongoose');

// Define our beer schema
var BeerSchema   = new mongoose.Schema({
  name: String,
  // gender: String,
  // company: String
});

// Export the Mongoose model
module.exports = mongoose.model('data', BeerSchema);