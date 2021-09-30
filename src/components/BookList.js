import { v4 as uuidv4 } from 'uuid';
import BookItem from './BookItem';

const defaultListOfBooks = [
  { title: 'a', author: 'b', genre: 'c' },
  { title: 'a', author: 'b', genre: 'c' },
  { title: 'a', author: 'b', genre: 'c' },
];

const BookList = () => (
  <div className="booksContainer">
    {
      defaultListOfBooks.map((obj) => (
        <BookItem key={uuidv4()} author={obj.author} genre={obj.genre} title={obj.title} />
      ))
    }
  </div>
);

export default BookList;
