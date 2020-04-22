import React from 'react';

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
        <button type="submit" onClick={this.saveNewUser}>Create</button>
        <button onClick={() => this.props.handleClick('login')}>Cancel</button>
      </div>

    )
  }
}

export default CreateAccount;