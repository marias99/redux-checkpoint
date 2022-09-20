import { configureStore, createSlice } from '@reduxjs/toolkit';

export const fetchBalloonsAsync = () => {}; //replace () => {} with your code

export const addBalloonAsync = () => {}; //replace () => {} with your code

export const balloonsSlice = createSlice({
  name: 'balloons',
  initialState: {
    balloons: [],
    error: null,
  },
  // create reducers
});

export const store = configureStore({
  reducer: {
    balloons: balloonsSlice.reducer,
  },
});
