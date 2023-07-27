import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API = 'https://api.spacexdata.com/v3/rockets';

const getRockets = createAsyncThunk('rockets/getRockets', async () => {
  try {
    const response = await axios.get(API);
    return response.data;
  } catch (error) {
    throw new Error("Couldn't get Rockets data");
  }
});

const initialState = {
  rockets: [],
  status: 'idle',
  error: '',
};

const RocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getRockets.fulfilled, (state, action) => {
        state.status = 'succeed';
        state.rockets = action.payload;
      })
      .addCase(getRockets.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getRockets.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error.message;
      });
  },
});

export default RocketsSlice.reducer;
