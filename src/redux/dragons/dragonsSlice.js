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
    return 'Some error';
  }
});

export const dragonsSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers: {
    reserveDragon(state, action) {
      const dragonID = action.payload;
      const existingDragon = state.dragons.find(
        (dragon) => dragon.id === dragonID,
      );
      if (existingDragon) {
        existingDragon.reserved = true;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchDragons.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDragons.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.dragons = action.payload;
      })
      .addCase(fetchDragons.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { reserveDragon } = dragonsSlice.actions;

export default dragonsSlice.reducer;
