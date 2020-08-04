import React from 'react';
import Button from 'react-bootstrap/Button';

class Question extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="block">

        <Button className="button" variant="outline-primary" onClick={() => this.props.handleClick('create')}>Add Question</Button>

        <p className="block">{this.props.question}</p>

        <Button className="button" variant="outline-primary" onClick={() => this.props.handleClick('answer')}>See Answer</Button>
        <Button className="button" variant="outline-danger" onClick={() => this.props.handleClick('login')}>Logout</Button>
      </div>
    )
  }
}

export default Question;