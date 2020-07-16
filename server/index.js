const express = require('express');
let app = express();
const bcrypt = require('bcrypt');
const db = require('../database/index.js');
// const Trivia = require('../database/models/Trivia.js');
const User = require('../database/models/User.js');
const {getTrivia, saveNewTrivia, saveNewUser, getHashedPassword} = require('../database/controllers/trivia.js')

app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));

app.get('/trivia', (req, res) => {
  getTrivia((err, question) => {
    if (err) {
      console.log('fail to get question!')
    } else {
      res.json(question);
    }
  });

  // db.Trivia.find({})
  //   .then((dbTrivia) => res.json(dbTrivia))
  //   .catch((err) => res.json(err));
});

app.post('/trivia', (req, res) => {
  var question = req.body.question;
  var answer = req.body.answer;

  saveNewTrivia(question, answer, (err, result) => {
    if (err) {
      console.error(err)
    } else {
      res.send('successfully saved the question and answer!')
    }
  })
})

app.post('/user', async (req, res) => {
  try {
    var username = req.body.username;
    var salt = await bcrypt.genSalt();
    var hashedPassword = await bcrypt.hash(req.body.password, salt);

    saveNewUser(username, hashedPassword, (err, result) => {
      if (err) {
        res.send('please use a different username')
      } else {
        res.send('successfully saved the new user')
      }
    })
  } catch {
    res.status(500).send();
  }
});

app.post('/user/login', (req, res) => {
  var username = req.body.username;
  var hashedPassword;
  getHashedPassword(username, (err, result) => {
    if (err) {
      console.error(err)
    } else {
      hashedPassword = result.hashedPassword;
      if (hashedPassword == null) {
        return res.status(400).send('Cannot find the username')
      }
      if (bcrypt.compare(req.body.password, hashedPassword)) {
        res.send('success');
        db.User.find({})
        .then((trivia) => res.json(trivia))
      } else {
        res.send('not allowed')
      }
    }
  });


})

let port = 3000;
app.listen(port, () => console.log(`listening on port ${port}`));