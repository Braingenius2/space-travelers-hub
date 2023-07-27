import { createAsyncThunk } from '@reduxjs/toolkit';
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
