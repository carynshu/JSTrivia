import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

class CreateAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.saveNewUser = this.saveNewUser.bind(this);
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

  saveNewUser() {
    if (this.state.username && this.state.password) {
      this.props.onAddUser(this.state.username, this.state.password)
    } else {
      alert('please fill in all boxes!')
    }
  }

  render() {
    return (
      <div>
        <p>Create An Account</p>
        <Form>
          <Form.Row className="wrapper">
              <Form.Control className="loginInfo" placeholder="Username" value={this.state.username} onChange={this.onChangeUsername}/>
              <Form.Control className="loginInfo" placeholder="Password" value={this.state.password} onChange={this.onChangePassword}/>
              <Button className="button" variant="outline-success" onClick={this.saveNewUser}>Create</Button>
              <Button className="button" variant="outline-danger" onClick={() => this.props.handleClick('login')}>Cancel</Button>
          </Form.Row>
        </Form>
      </div>
    )
  }
}

export default CreateAccount;