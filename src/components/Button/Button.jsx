import './Button.css';

export const Button = props => {
  const [icon, className, children, ...buttonProps] = props;
  const classes = ['button'];
  if (className) {
    classes.push(className);
  }
  return (
    <button className={classes.join(' ')} {...buttonProps}>
      <p>{children}</p>
      {icon ? <i className="button__icon">{icon}</i> : null}
    </button>
  );
};
