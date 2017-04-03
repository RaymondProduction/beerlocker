// Load required packages
var mongoose = require('mongoose');

// Define our beer schema
// Created a Mongoose schema which maps to a MongoDB
// collection and defines the shape of the documents
// within that collection
var BeerSchema   = new mongoose.Schema({
  name: String,
  type: String,
  quantity: Number
});

// Export the Mongoose model
module.exports = mongoose.model('Beer', BeerSchema);
