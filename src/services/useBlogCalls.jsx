/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import {
  blogGetSuccess,
  blogListSuccess,
  createBlogSuccess,
  myBlogsSuccess,
} from "../features/auth/blogSlice";

const useBlogCalls = () => {
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
  const getMyBlogs = async (id) => {
    try {
      const data = await axiosWithToken.get(`/blogs/myblogs/${id}`);
      toastSuccessNotify("My Blogs fetched  successfully");
      dispatch(myBlogsSuccess(data));
    } catch (error) {
      toastErrorNotify("Blogs fetched  Failed 😪😪😪");
    }
  };
  const createBlog = async (blogInfo) => {
    try {
      const data = await axiosWithToken.post("/blogs", blogInfo);

      toastSuccessNotify("Blog created  successfully");
      dispatch(createBlogSuccess(data));
    } catch (error) {
      toastErrorNotify("Blog created  Failed 😪😪😪");
    }
  };
  const deleteBlog = async (id) => {
    try {
      await axiosWithToken.delete(`/blogs/${id}`);
      toastSuccessNotify("Blog deleted  Successfully");
    } catch (error) {
      toastErrorNotify("Blogs fetched  Failed 😪😪😪");
    }
  };

  return { blogsList, blogOneGet, getMyBlogs, createBlog, deleteBlog };
};

export default useBlogCalls;
