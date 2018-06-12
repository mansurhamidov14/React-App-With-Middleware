import axios from 'axios';
const remoteUrl = 'http://recursion.loc';

const fetchUsersSuccess = payload => ({
  type: 'FETCH_USERS_SUCCESS',
  payload
})

const fetchUsersStart = () => ({
  type: 'FETCH_USERS'
})

const fetchUsers = () => {
  return dispatch => {
    dispatch(fetchUsersStart);
    axios.get(remoteUrl)
      .then (users => {
        dispatch(fetchUsersSuccess(users.data))
      })
  }
}

export default {
  fetchUsersSuccess,
  fetchUsersStart,
  fetchUsers
}
