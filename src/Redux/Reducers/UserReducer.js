let nameLogin = null;
if (localStorage.getItem("userLogin")) {
  // console.log(localStorage.getItem("userLogin"));
  let userLogin = JSON.parse(localStorage.getItem("userLogin"));
  nameLogin = userLogin.username;
}

const stateDefault = {
  userLogin: nameLogin,
  reDirect: false,
};

export const UserReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "SUCCESSFULLY_LOGIN": {
      state.userLogin = action.userLogin;
      state.reDirect = true;
      return { ...state };
    }

    case "SET_REDIRECT": {
      state.reDirect = false;
      return { ...state };
    }

    default: {
      return { ...state };
    }
  }
};
