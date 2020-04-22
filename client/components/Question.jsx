import React from 'react';
import Button from 'react-bootstrap/Button';

class Question extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>

        <Button variant="outline-primary" onClick={() => this.props.handleClick('create')}>Add Question</Button>

        <p>{this.props.question}</p>

        <Button variant="outline-primary" onClick={() => this.props.handleClick('answer')}>See Answer</Button>
      </div>
    )
  }
}

export default Question;