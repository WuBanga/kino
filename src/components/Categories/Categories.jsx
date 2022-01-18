import './Categories.css';

export const Categories = (props) => {
  const classes = ['categories'];
  if (props.className) {
    classes.push(props.className);
  }
  return (
    <div className={classes.join(' ')}>
      <select className="categories__select">
        <option value="popular">Popular</option>
        <option value="top rated">Top rated</option>
        <option value="upcoming">Upcoming</option>
      </select>
    </div>
  );
};
