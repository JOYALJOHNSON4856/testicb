// features/photos/photosSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const sepfetchPhotos = createAsyncThunk('sepData/sepfetchPhotos', async (id) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`);
    return response.data;
  });

// Define the initial state
const initialState = {
  selectedPhoto:[],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// Create the slice
const sepData = createSlice({
  name: 'sepData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(sepfetchPhotos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(sepfetchPhotos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.selectedPhoto = action.payload;
      })
      .addCase(sepfetchPhotos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});


export const sepDataReducer=sepData.reducer;
