import { PropTypes } from 'prop-types';
import BookInfo from './BookInfo';
import ChapterProgress from './ChapterProgress';
import ChapterUpdateProgress from './ChapterUpdateProgress';

const BookItem = (props) => {
  const { genre, author, title } = props;
  return (
    <div className="bookItemcontainer">
      <BookInfo genre={genre} author={author} title={title} />
      <ChapterProgress />
      <ChapterUpdateProgress />
    </div>
  );
};

BookItem.propTypes = {
  genre: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BookItem;
