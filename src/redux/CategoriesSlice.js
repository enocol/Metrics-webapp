import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiEndpoint = 'https://www.balldontlie.io/api/v1/games/';

export const fetchcategories = createAsyncThunk(
  'category/fetchcategories',
  async () => {
    const { data } = await axios.get(`${apiEndpoint}`);

    return data;
  },
);

const initialState = {
  category: [],
  status: 'idle',
  error: null,
};
export const CategoriesSlice = createSlice({
  initialState,
  name: 'category',
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchcategories.pending, (state) => {
        state.status = 'pending';
      })

      .addCase(fetchcategories.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.category = action.payload;
      })
      .addCase(fetchcategories.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error.message;
      });
  },
});

export default CategoriesSlice.reducer;
