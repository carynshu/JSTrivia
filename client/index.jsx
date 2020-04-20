import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Question from './components/Question.jsx';
import Answer from './components/Answer.jsx';
import Create from './components/Create.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'question',
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
  }

  changeView(view) {
    this.setState({
      view: view
    })
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



  renderView() {
    if (this.state.view === 'question') {
      return <Question question={this.state.question} handleClick={(view) => this.changeView(view)}/>
    } else if (this.state.view === 'answer') {
      return <Answer answer={this.state.answer} handleClick={(view) => this.changeView(view)}/>
    } else if (this.state.view === 'create') {
      return <Create onAdd={this.add.bind(this)} handleClick={(view) => this.changeView(view)}/>
    }
  }

  render() {
    return (
      <div>
        <h1>Javascript Trivia</h1>
        <div className="container">
          <div className="card">
            <div className="main">
              {this.renderView()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));