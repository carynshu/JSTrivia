const Trivia = require('../models/Trivia.js');
const User = require('../models/User.js');
const db = require('../index.js')

let getTrivia = (cb) => {
  Trivia.count().exec((err, count) => {
    var random = Math.floor(Math.random() * count);

    Trivia.findOne().skip(random).exec(cb);
  })
}

let saveNewTrivia = (question, answer, cb) => {
  var newTrivia = {
    question: question,
    answer: answer
  };
  Trivia.create(newTrivia, cb);
  // newTrivia.save(cb);
}

let saveNewUser = (username, password, cb) => {
  var newUser = {
    username: username,
    hashedPassword: password,
    trivia: []
  };
  User.create(newUser, cb);
}

let getHashedPassword = (username, cb) => {
  User.findOne({username : username}).exec(cb)
}

// let getUser = ()
module.exports.getTrivia = getTrivia;
module.exports.saveNewTrivia = saveNewTrivia;
module.exports.saveNewUser = saveNewUser;
module.exports.getHashedPassword = getHashedPassword;