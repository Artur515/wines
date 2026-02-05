import { createAsyncThunk } from '@reduxjs/toolkit';
import baseURL from '../../api/api';

const fetchWines = createAsyncThunk(
  'wines/fetchWines',
  async (wineType, { signal, rejectWithValue }) => {
    try {
      const response = await fetch(`${baseURL}/${wineType}`, { signal });

      if (!response.ok) {
        return rejectWithValue(`Request failed: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message || 'Request failed');
    }
  },
);

export default fetchWines;
