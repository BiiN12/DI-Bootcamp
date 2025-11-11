import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const USER_URL = "https://jsonplaceholder.typicode.com/users/";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get(USER_URL);
  return response.data;
  //   throw new Error();
  //   const res = await fetch(POST_URL);
  //   const data = await res.json();
  //   return data;
});

const initialState = {
  users: [],
  //   status: "", // loading, success, error
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      // state.status = "success";
      // console.log("action =>" + action);

      state.users = action.payload;
    });
  },
});

export const {} = usersSlice.actions;
export default usersSlice.reducer;
