
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/codebro');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("successful")
});

module.exports = db;