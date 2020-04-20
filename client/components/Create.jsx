import React from 'react';

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: ''
    }
    this.onChangeQuestion = this.onChangeQuestion.bind(this);
    this.onChangeAnswer = this.onChangeAnswer.bind(this);
    this.saveNewTrivia = this.saveNewTrivia.bind(this);
  }

  saveNewTrivia() {
    if (this.state.question && this.state.answer) {
      this.props.onAdd(this.state.question, this.state.answer);
      this.setState({
        question: '',
        answer: ''
      })
    } else {
      alert('please post a question and answer')
    }
  }

  onChangeQuestion(e) {
    this.setState({
      question: e.target.value
    })
  }

  onChangeAnswer(e) {
    this.setState({
      answer: e.target.value
    })
  }

  render() {
    return (
      <div>
        <form>
          <textarea type="text" value={this.state.question} onChange={this.onChangeQuestion} placeholder="Post a Question"></textarea>
          <textarea type="text" value={this.state.answer} onChange={this.onChangeAnswer} placeholder="Answer to the Question"></textarea>
        </form>
        <button type="submit" onClick={this.saveNewTrivia}>Save Question And Answer</button>
        <button type="submit" onClick={() => this.props.handleClick('question')}>Cancel</button>
      </div>
    )
  }
}

export default Create;