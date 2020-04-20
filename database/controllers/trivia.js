const Trivia = require('../models/trivia.js');
const User = require('../models/trivia.js');

let getTrivia = (cb) => {
  Trivia.count().exec((err, count) => {
    var random = Math.floor(Math.random() * count);

    Trivia.findOne().skip(random).exec(cb);
  })
}

let saveNewTrivia = (question, answer, cb) => {
  var newTrivia = new Trivia({
    question: question,
    answer: answer
  });
  newTrivia.save(cb);
}

let saveNewUser = (username, password, cb) => {
  var newUser = new User({
    username: username,
    hashedPassword: password,
    trivia: []
  });
  newUser.save(cb);
}

// let getUser = ()
module.exports.getTrivia = getTrivia;
module.exports.saveNewTrivia = saveNewTrivia;
module.exports.saveNewUser = saveNewUser;