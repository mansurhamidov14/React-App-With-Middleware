const initialState = {
  is_fetching: false,
  usersList: []
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USERS':
      return {is_fetching: true, usersList: []};
    case 'FETCH_USERS_SUCCESS':
      return {is_fetching: false, usersList: action.payload};
    default: return initialState;
  }
}

export default users;
