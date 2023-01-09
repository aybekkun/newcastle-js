import { configureStore } from "@reduxjs/toolkit";
import courses from "./courses/slice";
import lessons from "./lessons/slice.js";
export const store = configureStore({
  reducer: {
    courses,
    lessons,
  },
});
