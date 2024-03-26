/* eslint-disable no-unused-vars */

import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import { categoryListSuccess } from "../features/auth/categorySlice";

const useCategoryCalls = () => {
  const dispatch = useDispatch();

  const { axiosWithToken, axiosPublic } = useAxios();

  const categoryList = async () => {
    try {
      const data = await axiosPublic.get(`/categories`);
      toastSuccessNotify("Blogs fetched  Successfully");
      dispatch(categoryListSuccess(data));
    } catch (error) {
      toastErrorNotify("Blogs fetched  Failed 😪😪😪");
    }
  };

  return { categoryList };
};

export default useCategoryCalls;
