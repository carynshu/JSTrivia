const express = require('express');
let app = express();
const bcrypt = require('bcrypt');
const db = require('../database/index.js');
const {getTrivia, saveNewTrivia, saveNewUser, getHashedPassword, saveUserTrivia, getUserTrivia} = require('../database/controllers/trivia.js')

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
      bcrypt.compare(req.body.password, hashedPassword, function (err, result) {
        if (err) {
          res.send('something went wrong')
        } else if (result === true) {
          res.send('success')
        } else if (result === false) {
          res.status(401).send('not allowed')
        }
      })
    }
  });
});

app.post('/user/trivia', (req, res) => {
  var question = req.body.question;
  var answer = req.body.answer;
  var username = req.body.username;
  saveUserTrivia(question, answer, username, (err, result) => {
    if (err) {
      console.error(err)
    } else {
      res.status(200).send('successfully saved the question and answer!')
    }
  })
})

app.get('/user/trivia', (req, res) => {
  var username = req.query.username;

  getUserTrivia(username, (err, question) => {
    if (err) {
      res.status(404).send('fail to get question!')
    } else {
      res.json(question);
    }
  });
});

let port = 3000;
app.listen(port, () => console.log(`listening on port ${port}`));