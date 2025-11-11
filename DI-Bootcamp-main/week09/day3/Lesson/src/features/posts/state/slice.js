import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const POST_URL = "https://jsonplaceholder.typicode.com/posts/";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  //   const response = await axios.get(POST_URL);
  //   return response.data;
  //   throw new Error();
  const res = await fetch(POST_URL);
  const data = await res.json();
  return data;
});

const initialState = {
  posts: [],
  status: "", // loading, success, error
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "success";
        // console.log("action =>" + action);

        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.status = "error";
      });
  },
});

export const {} = postsSlice.actions;
export default postsSlice.reducer;
