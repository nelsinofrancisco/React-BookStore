const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = [];

export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBook = (bookID) => ({
  type: REMOVE_BOOK,
  bookID,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK: {
      const { bookID } = action;
      return state.filter((book) => book.id !== bookID);
    }
    default:
      return state;
  }
};

export default reducer;
