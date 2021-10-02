/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/BhH7PTgwxKMMX5sEh2HF/books/';

const initialState = {
  status: 'idle',
  data: [],
  error: {},
};

const responseFormatHandler = (payload) => {
  const objArray = Object.values(payload);
  const keysArray = Object.keys(payload);
  const returnedArray = [];

  objArray.forEach((obj, index) => {
    const newObj = { ...obj[0], item_id: keysArray[index] };
    returnedArray.push(newObj);
  });

  return returnedArray;
};

export const getBooks = createAsyncThunk(
  'redux/books/getBooks',
  async () => {
    const response = await axios.get(URL).catch((error) => error);
    const data = responseFormatHandler(response.data);
    return data;
  },
);

export const addBook = createAsyncThunk(
  'redux/books/addBook',
  async (body) => {
    const addResponse = await axios.post(URL, body).catch((error) => error);
    if (addResponse.data === 'Created') {
      const response = await axios.get(URL).catch((error) => error);
      const data = responseFormatHandler(response.data);
      return data;
    }

    return addResponse;
  },
);

export const removeBook = createAsyncThunk(
  'redux/books/removeBook',
  async (id) => {
    await axios
      .delete(`${URL}${id}`).catch((err) => err);

    const response = await axios.get(URL).catch((error) => error);
    const data = responseFormatHandler(response.data);

    return data;
  },
);

const bookSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [getBooks.pending.type]: (state) => ({ ...state, status: 'loading', error: {} }),
    [getBooks.fulfilled.type]: (state, action) => (
      {
        ...state, status: 'idle', data: action.payload, error: {},
      }),
    [addBook.pending.type]: (state) => ({ ...state, status: 'loading', error: {} }),
    [addBook.fulfilled.type]: (state, action) => ({
      ...state, status: 'book_added', error: {}, data: action.payload,
    }),
    [removeBook.pending.type]: (state) => ({ ...state, status: 'loading', error: {} }),
    [removeBook.fulfilled.type]: (state, action) => ({
      ...state, status: 'book_removed', error: {}, data: action.payload,
    }),
  },
});

export default bookSlice.reducer;
