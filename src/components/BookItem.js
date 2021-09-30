import { PropTypes } from 'prop-types';
import BookInfo from './BookInfo';
import ChapterProgress from './ChapterProgress';
import ChapterUpdateProgress from './ChapterUpdateProgress';

const BookItem = (props) => {
  const { categories, id, title } = props;
  return (
    <div className="bookItemcontainer">
      <BookInfo categories={categories} id={id} title={title} />
      <ChapterProgress />
      <ChapterUpdateProgress />
    </div>
  );
};

BookItem.propTypes = {
  categories: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default BookItem;
