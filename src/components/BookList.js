import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import BookItem from './BookItem';

const BookList = () => {
  const books = useSelector((state) => state.books);

  return (
    <div className="booksContainer">
      {
        books.map((obj) => (
          <BookItem key={uuidv4()} id={obj.id} categories={obj.categories} title={obj.title} />
        ))
      }
    </div>
  );
};

export default BookList;
