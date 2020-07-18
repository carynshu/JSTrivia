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
  let query = User.findOne({"username": username})
  query.select('questions').count().exec((err, count) => {
    let random = Math.floor(Math.random() * count);
    if (random < 2) {
      query.select('questions').findOne().exec(cb);
    } else {
      queryy.select('questions').findOne().skip(random).exec(cb);
    }
  })
}


module.exports.getTrivia = getTrivia;
module.exports.saveNewTrivia = saveNewTrivia;
module.exports.saveNewUser = saveNewUser;
module.exports.getHashedPassword = getHashedPassword;
module.exports.saveUserTrivia = saveUserTrivia;
module.exports.getUserTrivia = getUserTrivia;