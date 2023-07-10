import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  status: "null",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    removeUserData: (state) => {
      localStorage.removeItem("token");
      state.status = "null";
      state.data = null;
    },
    login: (state, { payload }) => {
      state.status = "fullfilled";
      state.data = payload;
      localStorage.setItem("token", payload.token);
      console.log(payload);
      // localStorage.setItem("token", res.data.token);
    },
  },
  extraReducers(builder) {},
});

export const { removeUserData, login } = userSlice.actions;
export default userSlice.reducer;
