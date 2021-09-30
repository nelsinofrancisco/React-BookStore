import { PropTypes } from 'prop-types';
import BookInfoStyle from '../styles/BookInfo.module.css';

const BookInfo = (props) => {
  const { genre, title, author } = props;
  return (
    <div className={BookInfoStyle.BookInfoContainer}>
      <p className="fontStyle5 fontColor1">{genre}</p>
      <p className="fontStyle1 fontColor1">{title}</p>
      <p className="fontStyle2 fontColor2 mb1">{author}</p>
      <div className={BookInfoStyle.bookInfoActionsContainer}>
        <button className={BookInfoStyle.BIActionsButton} type="button">Comments</button>
        <button className={BookInfoStyle.BIActionsButton} type="button">Remove</button>
        <button className={BookInfoStyle.BIActionsButton} type="button">Edit</button>
      </div>
    </div>
  );
};

BookInfo.propTypes = {
  genre: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BookInfo;
