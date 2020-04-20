const mongoose = require('mongoose');

let schemaTrivia = mongoose.Schema({
  // id: {type: Number, unique: true, dropDups: true},
  question: String,
  answer: String
});

let Trivia = mongoose.model('Trivia', schemaTrivia);

let schemaUser = mongoose.Schema({
  username: {type: String, unique: true},
  hashedPassword: String,
  trivia: []
});

let User = mongoose.model('User', schemaUser);


module.exports = Trivia;
module.exports = User;