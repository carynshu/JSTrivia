import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }
  render() {
    return (
      <div>
        <h3>Please Login</h3>
        <form>
          <label>
            username:
            <input type='text' value={this.state.username} onChange={this.onChangeUsername} />
          </label>
          <label>
            password:
            <input type='text' value={this.state.password} onChange={this.onChangePassword} />
          </label>
        </form>
        <p>Don't Have an Account?</p><button type="submit" onClick={() => this.props.handleClick('createAccount')}>Create Account</button>
        <button onClick={() => this.props.handleClick('question')}>Use it as Guest</button>
      </div>
    )
  }
}

export default Login;