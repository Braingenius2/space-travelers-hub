import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  missions: [],
  isLoading: false,
  error: null,
}

const fetchMissions = createAsyncThunk('missions/fetchMissions', async(_, { rejectWithValue }) => {
  try {
    const url = 'https://api.spacexdata.com/v3/missions';
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return rejectWithValue('There was an error fetching the missions', error);
  }
});

const missionsSlice = createSlice({
  name:'missions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMissions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.missions = action.payload.map((mission) => ({
          mission_id: mission.mission_id,
          mission_name: mission.mission_name,
          description: mission.description,
        }));
      })
      .addCase(fetchMissions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  }
});

export { fetchMissions };
export default missionsSlice.reducer;
