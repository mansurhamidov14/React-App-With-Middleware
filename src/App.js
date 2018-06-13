import React, {Component} from 'react';
import { connect } from 'react-redux';
import actions from './actions/index';

class App extends Component {
  componentWillMount () {
    this.props.fetchUsers();
  }

  addNewUser () {
    this.props.addUser({name:this.name.value, lastname:this.lastname.value});
    this.name.value = null;
    this.lastname.value = null;
  }

  render () {
    let { users } = this.props;
    if (users.is_fetching === true) {
      return(
        <div>
          Loading...
          <div>
            <input type="text" placeholder="Name" ref={node => this.name = node}/><br/>
            <input type="text" placeholder="Lastname" ref={node => this.lastname = node}/><br/>
            <button type="button" onClick={this.addNewUser.bind(this)}>Add user</button>
          </div>
        </div>
      );
    } else {
      let {usersList} = users;
      return (
        <div>
          <ul>
            {usersList.map (user => <li key={user.id}>{user.name} {user.lastname}</li>)}
          </ul>
          <div>
            <input type="text" placeholder="Name" ref={node => this.name = node}/><br/>
            <input type="text" placeholder="Lastname" ref={node => this.lastname = node}/><br/>
            <button type="button" onClick={this.addNewUser.bind(this)}>Add user</button>
          </div>
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  users: state.users
})

export default connect (
  mapStateToProps, actions
)(App);
