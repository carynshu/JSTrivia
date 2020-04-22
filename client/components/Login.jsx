import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

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
        {/* <form>
          <label>
            username:
            <input type='text' value={this.state.username} onChange={this.onChangeUsername} />
          </label>
          <label>
            password:
            <input type='text' value={this.state.password} onChange={this.onChangePassword} />
          </label>
        </form> */}
        <Form>
          <Form.Row>
            <Col>
              <Form.Control placeholder="Username" value={this.state.username} onChange={this.onChangeUsername}/>
            </Col>
            <Col>
              <Form.Control placeholder="Password" value={this.state.password} onChange={this.onChangePassword}/>
            </Col>
          </Form.Row>
        </Form>
        <p>Don't Have an Account?</p><Button variant="outline-success" onClick={() => this.props.handleClick('createAccount')}>Create Account</Button>
        <Button variant="outline-primary" onClick={() => this.props.handleClick('question')}>Use it as A Guest</Button>
      </div>
    )
  }
}

export default Login;