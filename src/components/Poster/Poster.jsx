import { AgeIcon } from '../Icons/AgeIcon';
import { CheckedIcon } from '../Icons/CheckedIcon';
import { BookmarkIcon } from '../Icons/BookmarkIcon';
import { RatingIcon } from '../Icons/RatingIcon';
import { TrackerIcon } from '../Icons/TrackerIcon';
import './Poster.css';
export const Poster = (props) => {
  const { posterLink, adult, rating } = props;

  return (
    <div className="poster__wrapper">
      <img className="poster__image" src={posterLink} alt="" />
      <div className="poster__markers">
        <div className="left-markers">
          <RatingIcon rating={rating} />
          <TrackerIcon icon={<BookmarkIcon />} />
        </div>
        {adult ? <AgeIcon /> : null}
      </div>
    </div>
  );
};
