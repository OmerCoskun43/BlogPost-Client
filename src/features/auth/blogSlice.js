import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [],
  blog: {},
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
  },
});

export const { blogListSuccess, blogGetSuccess } = blogSlice.actions;
export default blogSlice.reducer;
