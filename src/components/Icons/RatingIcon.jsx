import './RatingIcon.css';
export const RatingIcon = (props) => {
  const { rating } = props;
  let ratingModificator = getRatingColor(rating);

  return <span className={`rating ${ratingModificator}`}>{rating}</span>;
};

const getRatingColor = (rating) => {
  if (rating >= 7) {
    return 'rating--green';
  }
  if (6 <= rating < 7) {
    return 'rating--orange';
  }
  return 'rating--red';
};
