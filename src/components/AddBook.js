/* eslint-disable arrow-body-style */
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import '../index.css';
import { addBook } from '../redux/books/books';

const bookGenres = [
  'Horror',
  'Fiction',
  'Thriller',
  'Dark',
  'Historical',
  'Romance',
  'Science Fiction',
  'Fantasy',
  'Dystopian',
  'Realist',
];

const AddBook = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.data);

  let id;
  let max = Number.MIN_VALUE;

  if (books.length === 0) {
    id = 1;
  } else {
    books.forEach((obj) => {
      const id = parseInt(obj.item_id, 10);
      if (id > max) {
        max = id;
      }
    });

    id = (max + 1).toString();
  }

  const submitBookToStore = async (element) => {
    const title = element.children[0].value;
    const category = element.children[1].value;

    const newBook = {
      item_id: id,
      title,
      category,
    };

    dispatch(addBook(newBook));
  };

  return (
    <div className="addBookContainer">
      <h2 className="fontStyle10 fontColor1 mb1">Add New Book</h2>
      <form
        className="formContainer"
        onSubmit={(e) => {
          e.preventDefault();
          submitBookToStore(e.target);
          e.target.children[0].value = '';
        }}
      >
        <input className="addBookTitle fontStyle9 fontColor4" type="text" placeholder="Book title" />
        <select className="addBookGenre fontStyle9 fontColor4">
          {
          bookGenres.map((genre) => (
            <option key={uuidv4()} value={genre}>{genre}</option>
          ))
        }
        </select>
        <button type="submit" className="addBookBtn appDefaultButton fontStyle4 fontColor5">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
