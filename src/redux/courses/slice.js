import { createSlice } from "@reduxjs/toolkit";
import { fetchCourse, fetchCourses } from "./asyncActions";
const initialState = {
  data: [],
  course: {},
  materials: [],
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
      state.materials = action.payload.data.lessons;
    });
    builder.addCase(fetchCourse.rejected, (state, action) => {
      state.course = {};
      state.materials = [];
    });
  },
});

// Action creators are generated for each case reducer function
export const { setCourse } = coursesSlice.actions;

export default coursesSlice.reducer;
