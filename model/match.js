// Load required packages
var mongoose = require('mongoose');

// Define our beer schema
var matchschema   = new mongoose.Schema({
  teams: Array,
  toss:String,
  bowls:Array
  // gender: String,
  // company: String
});

// Export the Mongoose model
module.exports = mongoose.model('match', matchschema);