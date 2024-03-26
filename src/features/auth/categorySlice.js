import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
};

export const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    categoryListSuccess: (state, action) => {
      state.categories = action.payload.data.Categories;
    },
  },
});

export const { categoryListSuccess } = categorySlice.actions;
export default categorySlice.reducer;
