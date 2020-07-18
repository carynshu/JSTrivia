import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import Col from 'react-bootstrap/Col';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.checkUserInfo = this.checkUserInfo.bind(this);
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

  checkUserInfo() {
    let username = this.state.username;
    let password = this.state.password;
    this.props.checkUserInfo(username, password);
  }
  render() {
    return (
      <div>
        <header>Please Login</header>
        <Form>
          <div className="wrapper">
          <Form.Row >
              <Form.Control className="loginInfo" placeholder="Username" value={this.state.username} onChange={this.onChangeUsername}/>
              <Form.Control className="loginInfo" placeholder="Password" value={this.state.password} onChange={this.onChangePassword}/>
              <Button className="loginInfoButton" variant="outline-success" onClick={this.checkUserInfo}>Login</Button>
          </Form.Row>
          </div>
        </Form>

        <p>Don't Have an Account?</p>
        <Button variant="outline-success" className="button" onClick={() => this.props.handleClick('createAccount')}>Create Account</Button>
        <Button variant="outline-primary" className="button" onClick={() => this.props.handleClick('question')}>Use it as A Guest</Button>
      </div>
    )
  }
}

export default Login;