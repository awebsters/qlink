export const LOGIN_USER = "LOGIN_USER";

export const updateLogin = (username, password, schedule_url) => ({
  type: LOGIN_USER,
  username: username,
  password: password,
  schedule_url: schedule_url,
});

const initialState = {
  username: "",
  password: "",
  schedule_url: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        username: action.username,
        password: action.password,
        schedule_url: action.schedule_url
      };
    default:
      return state;
  }
};
