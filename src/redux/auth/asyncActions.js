import { createAsyncThunk } from "@reduxjs/toolkit";
import { $host } from "../../axios";

export const userAuth = createAsyncThunk("auth/userAuth", async (params, thunkAPI) => {
  try {
    const response = await $host.post(`auth/login`, params);
    return response.data;
  } catch (error) {
    alert("Неверный пароль или логин!");
    return thunkAPI.rejectWithValue("Не удалось удалить курсов");
  }
});

export const userCheck = createAsyncThunk("auth/userCheck", async (params, thunkAPI) => {
  try {
    const response = await $host.post(`auth/login`);
    return response.data;
  } catch (error) {
    alert("Неверный пароль или логин!");
    return thunkAPI.rejectWithValue("Не удалось удалить курсов");
  }
});
