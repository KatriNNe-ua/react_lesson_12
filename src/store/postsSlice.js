import { createSlice } from '@reduxjs/toolkit'
import {
  fetchPostsExtraReducers,
  fetchDeletePostsExtraReducers,
  fetchCreatePostsExtraReducers,
} from "./extraReducers";

const initialState = {
  postsList: [],
  currentPageNumber: 1,
  postsNumberPerPage: 5,
  totalPagesNumber: 1,
  status: 'idle',
  error: null,
}

export const postsSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPageNumber = action.payload;
    },
    setPostsNumberPerPage:(state, action)=>{
		state.postsNumberPerPage = action.payload
	}
  },
  extraReducers: (builder) => {
    fetchPostsExtraReducers(builder);
    fetchDeletePostsExtraReducers(builder);
    fetchCreatePostsExtraReducers(builder);
  },
});

// Action creators are generated for each case reducer function
export const { setCurrentPage, setPostsNumberPerPage } = postsSlice.actions;

export default postsSlice.reducer
