/* eslint-disable camelcase */
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import BookInfoStyle from '../styles/BookInfo.module.css';
import { removeBook } from '../redux/books/books';

const BookInfo = (props) => {
  const dispatch = useDispatch();
  const { category, title, item_id } = props;

  return (
    <div className={BookInfoStyle.BookInfoContainer}>
      <p className="fontStyle5 fontColor1">{category}</p>
      <p className="fontStyle1 fontColor1">{title}</p>
      <p className="fontStyle2 fontColor2 mb1">{`Book Id: ${item_id}`}</p>
      <div className={BookInfoStyle.bookInfoActionsContainer}>
        <button className={BookInfoStyle.BIActionsButton} type="button">Comments</button>
        <button className={BookInfoStyle.BIActionsButton} type="button" onClick={() => dispatch(removeBook(item_id))}>Remove</button>
        <button className={BookInfoStyle.BIActionsButton} type="button">Edit</button>
      </div>
    </div>
  );
};

BookInfo.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  item_id: PropTypes.string.isRequired,
};

export default BookInfo;
