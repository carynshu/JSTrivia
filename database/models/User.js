const mongoose = require('mongoose');


let schemaUser = mongoose.Schema({
  username: {type: String, unique: true},
  hashedPassword: String,
  questions: Array
});

let User = mongoose.model('User', schemaUser);


module.exports = User;