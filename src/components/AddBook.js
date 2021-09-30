import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/Books/Books';
import '../index.css';

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
  const books = useSelector((state) => state.books);
  let id;
  let max = Number.MIN_VALUE;

  if (books.length === 0) {
    id = 1;
  } else {
    books.forEach((obj) => {
      if (obj.id > max) {
        max = obj.id;
      }
    });

    id = max + 1;
  }

  const submitBookToStore = (element) => {
    const title = element.children[0].value;
    const categories = element.children[1].value;

    const newBook = {
      id,
      title,
      categories,
    };

    // dispatch an action and pass it the newBook object (your action's payload)
    dispatch(addBook(newBook));
  };

  return (
    <div className="addBookContainer">
      <h2 className="fontStyle10 fontColor1 mb1">Add New Book</h2>
      <form
        className="formContainer"
        onSubmit={(e) => {
          submitBookToStore(e.target);
          e.preventDefault();
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
