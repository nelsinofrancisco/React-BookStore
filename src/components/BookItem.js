/* eslint-disable camelcase */
import { PropTypes } from 'prop-types';
import BookInfo from './BookInfo';
import ChapterProgress from './ChapterProgress';
import ChapterUpdateProgress from './ChapterUpdateProgress';

const BookItem = (props) => {
  const { category, item_id, title } = props;
  return (
    <div className="bookItemcontainer">
      <BookInfo category={category} item_id={item_id} title={title} />
      <ChapterProgress />
      <ChapterUpdateProgress />
    </div>
  );
};

BookItem.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  item_id: PropTypes.string.isRequired,
};

export default BookItem;
