import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  dragons: [],
  isLoading: 'load',
  error: '',
};

export const fetchDragons = createAsyncThunk('dragons/fetchDragons', async () => {
  try {
    const response = await axios.get('https://api.spacexdata.com/v3/dragons');
    return response.data || [];
  } catch (err) {
    return 'Some error'
  }
});

export const dragonsSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
     .addCase(fetchDragons.pending, (state) => {
      state.status = 'loading';
     })
     .addCase(fetchDragons.fulfilled, (state) => {
      state.status = 'succeeded';
      state.dragons = action.payload;
     })
     .addCase(fetchDragons.rejected, (state) => {
      state.status = 'failed';
      state.error = action.error.message;
     });
  }
});

export default dragonsSlice.reducer;