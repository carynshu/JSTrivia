import React from 'react';

class Question extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button onClick={() => this.props.handleClick('create')}>Add Question</button>
        <p>{this.props.question}</p>
        <button onClick={() => this.props.handleClick('answer')}>See Answer</button>
      </div>
    )
  }
}

export default Question;