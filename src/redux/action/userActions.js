export const signUp = user => {
  return {
    type: "SIGN_UP",
    payload: user
  };
};

export const resetUserOnRefresh = user => {
  return {
    type: "GET_USER",
    payload: user
  };
};

export const loginUser = user => {
  return {
    type: "LOGIN",
    payload: user
  };
};

export const logoutUser = user => {
  return {
    type: "LOGOUT",
    payload: user
  };
};

export const editUserProfile = user => {
  return {
    type: "EDIT_USER",
    payload: user
  };
};

export const invalidCredentials = user => {
  return {
    type: "INVALID_CREDENTIALS",
    payload: {}
  };
};
