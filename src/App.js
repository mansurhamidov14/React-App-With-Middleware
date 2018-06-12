import React, {Component} from 'react';
import { connect } from 'react-redux';
import actions from './actions/index';

class App extends Component {
  componentWillMount () {
    this.props.fetchUsers();
  }

  render () {
    let { users } = this.props;
    if (users.is_fetching === true) {
      return <div>Loading</div>
    } else {
      let {usersList} = users;
      return <div>
        <ul>
          {usersList.map (user => <li key={user.id}>{user.name} {user.lastname}</li>)}
        </ul>
      </div>
    }
  }
}

const mapStateToProps = state => ({
  users: state.users
})

export default connect (
  mapStateToProps, actions
)(App);
