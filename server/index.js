const express = require('express');
let app = express();
const bcrypt = require('bcrypt');
const db = require('../database/index.js')
const {getTrivia, saveNewTrivia, saveNewUser} = require('../database/controllers/trivia.js')

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
      res.send(result)
      //save this question to the user database
    }
  })
})

app.post('/user', async (req, res) => {
  try {
    var username = req.body.username;
    var salt = await bcrypt.genSalt();
    var hashedPassword = await bcrypt.hash(req.body.password, salt);
    // console.log(hashedPassword)
    saveNewUser(username, hashedPassword, (err, result) => {
      if (err) {
        console.error(err)
      } else {
        res.send('successfully saved the new user')
      }
    })
  } catch {
    res.status(500).send();
  }
});

app.get('/user', async (req, res) => {
  try {
    var username = req.body.username;
    var password = req.body.password;
    var hashedPassword = await getHashedPassword(username, (err, result) => {
      if (err) {
        console.error(err)
      } else {
        hashedPassword = result;
      }
    })
    var match = await bcrypt.compare(password, hashedPassword);
    if (match) {
      res.send(200)
    } else {
      res.send('incorrect password')
    }
  } catch {
    res.status(500).send()
  }
})

let port = 3000;
app.listen(port, () => console.log(`listening on port ${port}`));