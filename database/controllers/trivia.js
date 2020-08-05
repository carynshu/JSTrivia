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
}

let saveNewUser = (username, password, cb) => {
  var newUser = {
    username: username,
    hashedPassword: password,
    questions: []
  };
  User.create(newUser, cb);
}

let getHashedPassword = (username, cb) => {
  User.findOne({username : username}).exec(cb)
}

let saveUserTrivia = (question, answer, username, cb) => {
  var newTrivia = {
    question: question,
    answer: answer
  };
  User.findOneAndUpdate({username:username}, {$push: {questions: newTrivia}}).exec(cb);
}

let getUserTrivia = (username, cb) => {
  User.find({username: username}, 'questions').exec(cb);
}

let func = {
  getTrivia : getTrivia,
  saveNewTrivia : saveNewTrivia,
  saveNewUser : saveNewUser,
  getHashedPassword : getHashedPassword,
  saveUserTrivia : saveUserTrivia,
  getUserTrivia : getUserTrivia
};

module.exports = func;