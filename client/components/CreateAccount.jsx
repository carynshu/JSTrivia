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
        <h3>Create An Account</h3>
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
        <Button variant="outline-success" onClick={this.saveNewUser}>Create</Button>
        <Button variant="outline-danger" onClick={() => this.props.handleClick('login')}>Cancel</Button>
      </div>

    )
  }
}

export default CreateAccount;