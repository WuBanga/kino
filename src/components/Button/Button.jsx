import './Button.css';

export const Button = props => {
  const classes = ['button'];
  if (props.className) {
    classes.push(props.className);
  }
  return (
    <button className={classes.join(' ')}>
      <p>{props.children}</p>
      {props.icon ? <i className="button__icon">{props.icon}</i> : null}
    </button>
  );
};
