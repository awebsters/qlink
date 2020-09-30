export const LOGIN_USER = "LOGIN_USER";

export const updateLogin = (username, password) => ({
  type: LOGIN_USER,
  username: username,
  password: password,
});

const initialState = {
  username: "",
  password: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        username: action.username,
        password: action.password,
      };
    default:
      return state;
  }
};
