var mongoose = require('mongoose');

// Create the GameSchema
var GameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
});

// Export the model schema
