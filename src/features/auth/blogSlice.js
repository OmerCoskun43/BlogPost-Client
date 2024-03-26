import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [],
  blog: {},
  myBlogs: [],
};

export const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    blogListSuccess: (state, action) => {
      state.blogs = action.payload.data.Blogs;
    },
    blogGetSuccess: (state, action) => {
      state.blog = action.payload.data.blog;
    },
    myBlogsSuccess: (state, action) => {
      state.myBlogs = action.payload.data.blogs;
    },
    createBlogSuccess: (state, action) => {
      state.blogs = [...state.blogs, action.payload.data.blog];
    },
  },
});

export const {
  blogListSuccess,
  blogGetSuccess,
  myBlogsSuccess,
  createBlogSuccess,
} = blogSlice.actions;
export default blogSlice.reducer;
