import apiClient from '@/api/apiClient'
import initialPosts from '@/data/initialPosts'
import { createAsyncThunk } from '@reduxjs/toolkit'

const postsApi = apiClient('posts', 500, initialPosts)

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async ({ pageNumber, itemsPerPage }, { rejectWithValue }) => {
    try {
      const response = await postsApi.getPaginated(pageNumber, itemsPerPage)
      return response
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const fetchDeletePosts = createAsyncThunk(
  "posts/fetchDeletePosts",
  async (id , { rejectWithValue }) => {
    try {
      const response = await postsApi.delete(id);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCreatePosts = createAsyncThunk(
  "posts/fetchCreatePosts",
  async (item, { rejectWithValue }) => {
    try {
      const response = await postsApi.create(item);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


