import { createAsyncThunk } from "@reduxjs/toolkit";
import { $host } from "../../axios";

export const fetchCourses = createAsyncThunk("users/fetchCourses", async (_, thunkAPI) => {
  try {
    const response = await $host.get("courses");
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Не удалось создать курсов");
  }
});
