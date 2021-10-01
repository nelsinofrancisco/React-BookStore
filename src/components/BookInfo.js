/* eslint-disable import/extensions */
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import BookInfoStyle from '../styles/BookInfo.module.css';
import { removeBook } from '../redux/books/books.js';

const BookInfo = (props) => {
  const dispatch = useDispatch();
  const { categories, title, id } = props;

  const removeBookFromStore = (ID) => {
    dispatch(removeBook(ID));
  };

  return (
    <div className={BookInfoStyle.BookInfoContainer}>
      <p className="fontStyle5 fontColor1">{categories}</p>
      <p className="fontStyle1 fontColor1">{title}</p>
      <p className="fontStyle2 fontColor2 mb1">{`Book Id: ${id}`}</p>
      <div className={BookInfoStyle.bookInfoActionsContainer}>
        <button className={BookInfoStyle.BIActionsButton} type="button">Comments</button>
        <button className={BookInfoStyle.BIActionsButton} type="button" onClick={() => removeBookFromStore(id)}>Remove</button>
        <button className={BookInfoStyle.BIActionsButton} type="button">Edit</button>
      </div>
    </div>
  );
};

BookInfo.propTypes = {
  categories: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default BookInfo;
