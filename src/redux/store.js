import { configureStore } from "@reduxjs/toolkit";
import courses from "./courses/slice";

export const store = configureStore({
  reducer: {
    courses,
  },
});
