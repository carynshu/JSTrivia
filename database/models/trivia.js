const mongoose = require('mongoose');

let schemaTrivia = mongoose.Schema({
  // id: {type: Number, unique: true, dropDups: true},
  question: {type: String, unique: true},
  answer: String
});

let Trivia = mongoose.model('Trivia', schemaTrivia);

module.exports = Trivia;