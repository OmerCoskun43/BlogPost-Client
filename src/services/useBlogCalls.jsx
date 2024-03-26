/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import { blogGetSuccess, blogListSuccess } from "../features/auth/blogSlice";

const useBlogCalls = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { axiosWithToken, axiosPublic } = useAxios();

  const blogsList = async () => {
    try {
      const data = await axiosPublic.get(`/blogs`);
      toastSuccessNotify("Blogs fetched  Successfully");
      dispatch(blogListSuccess(data));
    } catch (error) {
      toastErrorNotify("Blogs fetched  Failed 😪😪😪");
    }
  };
  const blogOneGet = async (id) => {
    try {
      const data = await axiosWithToken.get(`/blogs/${id}`);
      toastSuccessNotify("Blog One fetched  Successfully");
      dispatch(blogGetSuccess(data));
    } catch (error) {
      toastErrorNotify("Blogs fetched  Failed 😪😪😪");
    }
  };

  return { blogsList, blogOneGet };
};

export default useBlogCalls;
