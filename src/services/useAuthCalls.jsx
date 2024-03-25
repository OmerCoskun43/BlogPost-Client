import { useNavigate } from "react-router-dom";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import {
  registerSuccess,
  loginSuccess,
  logoutSuccess,
} from "../features/auth/authSlice";
import { useDispatch } from "react-redux";
import useAxios from "./useAxios";

const useAuthCalls = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { axiosWithToken, axiosPublic } = useAxios();

  const register = async (userInfo) => {
    try {
      const data = await axiosPublic.post(`/auth/register`, userInfo);
      navigate("/");
      toastSuccessNotify("Register Successful");
      dispatch(registerSuccess(data));
      // console.log(data);
    } catch (error) {
      toastErrorNotify("Register Failed 😪😪😪");
    }
  };
  const login = async (userInfo) => {
    try {
      const data = await axiosPublic.post(`/auth/login`, userInfo);

      navigate("/");
      toastSuccessNotify("Login Successful 😁😁😁 ");
      dispatch(loginSuccess(data));
    } catch (error) {
      toastErrorNotify("Login Failed XXXXX 😪😪😪");
    }
  };
  const logout = async () => {
    try {
      await axiosWithToken("auth/logout");
      dispatch(logoutSuccess());
      navigate("/");
      toastSuccessNotify("Logout Successful");
    } catch (error) {
      toastErrorNotify("Logout Failed 😪😪😪");
    }
  };

  return { login, register, logout };
};

export default useAuthCalls;
