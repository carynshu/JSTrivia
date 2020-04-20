import React from 'react';

class Answer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>{this.props.answer}</p>
        <button onClick={() => this.props.handleClick('question')}>Next Question</button>
      </div>
    )
  }
}

export default Answer;