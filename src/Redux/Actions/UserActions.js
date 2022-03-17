import axios from "axios";
import {
  ACCESSTOKEN,
  DOMAIN,
  USER_LOGIN,
  USER_REGISTER,
} from "../../Utils/setting";

//Login
export const Login = (userLogin) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `${DOMAIN}api/auth/sign-in`,
        method: "POST",
        data: userLogin,
      });
      //   console.log("results", result);
      await dispatch({
        type: "SUCCESSFULLY_LOGIN",
        userLogin: result.data.user.username,
      });
      localStorage.setItem(USER_LOGIN, JSON.stringify(result.data.user));
      localStorage.setItem(ACCESSTOKEN, result.data.user.token);

      //   alert("Dang nhap thanh cong");
    } catch (errors) {
      // console.log(errors);
      //   if (errors.reponse?.data === undefined) {
      //     alert("Something wrong!");
      //   }
      console.log("errors", errors.reponse?.data);
    }
  };
};

//Register
export const Register = (userRegister) => {
  const fullUser = {
    username: userRegister.username,
    password: userRegister.password,
    email: userRegister.email,
    phone: userRegister.phone,
  };
  //   console.log(fullUser);
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `${DOMAIN}api/user`,
        method: "POST",
        data: fullUser,
      });
      //   console.log(result);
      dispatch({
        type: "SUCCESSFULLY_REGISTER",
        userName: result.data.username,
      });
      localStorage.setItem(USER_REGISTER, JSON.stringify(result.data));
      // localStorage.setItem(ACCESSTOKEN, result.data);

      //   alert("Dang ky thanh cong");
    } catch (errors) {
      console.log(errors.reponse?.data);
    }
  };
};

//Order
export const order = (param) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `${DOMAIN}api/order`,
        method: "POST",
        data: param,
        //Put Authorization in Headers,
        headers: {
          Authorization: "Bearer " + localStorage.getItem(ACCESSTOKEN),
        },
      });

      console.log(result.data);
    } catch (errors) {
      console.log(errors.response?.data);
    }
  };
};
