import { createSlice } from '@reduxjs/toolkit';
import fetchWines from './thunks/wineThunk';

const initialState = {
  list: [],
  isLoading: false,
  errors: null,
  currentPage: 1,
};

const winesSlice = createSlice({
  name: 'wines',
  initialState,
  reducers: {
    setCurrentPage: (state, action) => ({
      ...state,
      currentPage: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWines.pending, (state) => ({
        ...state,
        isLoading: true,
        errors: null,
        currentPage: 1,
      }))
      .addCase(fetchWines.fulfilled, (state, action) => ({
        ...state,
        list: action.payload,
        isLoading: false,
        errors: null,
      }))
      .addCase(fetchWines.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        errors: action.payload || action.error.message || 'Request failed',
      }));
  },
});

export const { setCurrentPage } = winesSlice.actions;

export default winesSlice.reducer;
