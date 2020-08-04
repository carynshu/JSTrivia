import React from 'react';
import Button from 'react-bootstrap/Button';

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
      <div className="block">
        <form>
          <textarea className="create-body-textarea" type="text" value={this.state.question} onChange={this.onChangeQuestion} placeholder="Post a Question"></textarea>
          <textarea className="create-body-textarea" type="text" value={this.state.answer} onChange={this.onChangeAnswer} placeholder="Answer to the Question"></textarea>
        </form>
        <Button className="button" variant="outline-success" onClick={this.saveNewTrivia}>Save Question And Answer</Button>
        <Button className="button" variant="outline-danger" onClick={() => this.props.handleClick('question')}>Cancel</Button>
      </div>
    )
  }
}

export default Create;