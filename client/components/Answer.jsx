import React from 'react';
import Button from 'react-bootstrap/Button';

class Answer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>{this.props.answer}</p>
        <Button variant="outline-primary" onClick={() => this.props.handleClick('question')}>Next Question</Button>
      </div>
    )
  }
}

export default Answer;