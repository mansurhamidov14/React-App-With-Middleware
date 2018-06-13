import axios from 'axios';
const remoteUrl = 'http://studytogether.scienceontheweb.net/pdo.php';

const fetchUsersSuccess = payload => ({
  type: 'FETCH_USERS_SUCCESS',
  payload
})

const fetchUsersStart = () => ({
  type: 'FETCH_USERS'
})

const fetchUsers = () => {
  return dispatch => {
    dispatch(fetchUsersStart());
    axios.get(remoteUrl)
      .then (users => {
        dispatch(fetchUsersSuccess(users.data))
      })
  }
}

const addUser = payload => {
  var params = new URLSearchParams();
  params.append('add_user', true);
  params.append('name', payload.name);
  params.append('lastname', payload.lastname);
  axios.post(remoteUrl, params);
  return dispatch => {
    dispatch(fetchUsersStart());
    axios.get(remoteUrl)
      .then (users => {
        dispatch(fetchUsersSuccess(users.data))
      })
  }

}

export default {
  fetchUsersSuccess,
  fetchUsersStart,
  fetchUsers,
  addUser
}
