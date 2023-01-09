import { createSlice } from "@reduxjs/toolkit";
import {fetchCourse, fetchCourses} from "./asyncActions";
const initialState = {
  data: [],
  course:{}
};

export const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourse(state, action) {
      state.data.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCourses.fulfilled, (state, action) => {
      state.data = action.payload.data;
    });
    builder.addCase(fetchCourse.fulfilled, (state, action) => {
      state.course = action.payload.data;
    });
  },
});

// Action creators are generated for each case reducer function
export const { setCourse } = coursesSlice.actions;

export default coursesSlice.reducer;
