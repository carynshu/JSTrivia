import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Question from './components/Question.jsx';
import Answer from './components/Answer.jsx';
import Create from './components/Create.jsx';
import Login from './components/Login.jsx';
import CreateAccount from './components/CreateAccount.jsx';

import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'login',
      question: '',
      answer: ''
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/trivia`)
      .then(res => {
        const question = res.data.question;
        const answer = res.data.answer;
        this.setState({
          question: question,
          answer: answer
        })
      })
    // this.renderView();
  }

  changeView(view) {
    this.setState({
      view: view
    })
    if (view === 'question') {
      this.getNextQuestion();
    }
  }

  add(question, answer) {
    axios.post(`http://localhost:3000/trivia`, {
      question: question,
      answer: answer
    })
      .then(res => {
        alert('successfully saved new trivia!')
      })
      .catch(err => {
        console.log(err);
      })
  }

  addUser(username, password) {
    axios.post(`http://localhost:3000/user`, {
      username: username,
      password: password
    })
      .then(res => {
        alert('successfully created new user!');
        this.setState({
          view: 'login'
        })
      })
      .catch(err => {
        alert('please choose a different username');
      })
  }

  getNextQuestion() {
    axios.get(`http://localhost:3000/trivia`)
      .then(res => {
        const question = res.data.question;
        const answer = res.data.answer;
        this.setState({
          question: question,
          answer: answer
        })
      })
  }



  renderView() {
    if (this.state.view === 'question') {
      return <Question question={this.state.question} handleClick={(view) => this.changeView(view)}/>
    } else if (this.state.view === 'answer') {
      return <Answer answer={this.state.answer} handleClick={(view) => this.changeView(view)}/>
    } else if (this.state.view === 'create') {
      return <Create onAdd={this.add.bind(this)} handleClick={(view) => this.changeView(view)}/>
    } else if (this.state.view === 'login') {
      return <Login handleClick={(view) => this.changeView(view)}/>
    } else if (this.state.view === 'createAccount') {
      return <CreateAccount onAddUser={this.addUser.bind(this)} handleClick={(view) => this.changeView(view)}/>
    } else if (this.state.view === 'userQuestion') {
      return <UserQuestion handleClick={(view) => this.changeView(view)}/>
    }
  }

  render() {
    return (
      <div>
        <h1>Javascript Trivia</h1>
        <div className="post">
          <div className="card">
            <section className="main">
              {this.renderView()}
            </section>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));