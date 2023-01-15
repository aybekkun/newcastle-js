import { createSlice } from "@reduxjs/toolkit";
import { fetchMaterials} from "./asyncActions";
const initialState = {
  blocks:[],
  lesson: {},
  isMaterialLoading:false,
};

export const coursesSlice = createSlice({
  name: "lessons",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchMaterials.fulfilled, (state, action) => {
      state.lesson = action.payload;
      state.blocks = action.payload.data;
      state.isMaterialLoading = false;
    });
    builder.addCase(fetchMaterials.pending, (state, action) => {
      state.isMaterialLoading = true;
    });
    builder.addCase(fetchMaterials.rejected, (state, action) => {
      state.isMaterialLoading = false;
      state.lesson = {};
      state.blocks = [];
    });
  },
});

// Action creators are generated for each case reducer function
export const { setCourse } = coursesSlice.actions;

export default coursesSlice.reducer;
