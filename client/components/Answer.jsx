import React from 'react';
import Button from 'react-bootstrap/Button';

class Answer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="block">
        <p className="answer">{this.props.answer}</p>
        <Button className="button" variant="outline-primary" onClick={() => this.props.handleClick('question')}>Next Question</Button>
        <Button className="button" variant="outline-danger" onClick={() => this.props.handleClick('login')}>Logout</Button>
      </div>
    )
  }
}

export default Answer;