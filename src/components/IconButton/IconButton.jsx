import './IconButton.css';

export const IconButton = (props) => {
  const { icon, className } = props;
  const classes = ['icon-button'];
  classes.push(className);
  return (
    <button className={classes.join(' ')}>
      {icon ? <div className="icon-button__icon">{icon}</div> : null}
    </button>
  );
};
