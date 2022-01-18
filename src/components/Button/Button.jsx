import './Button.css';

export const Button = (props) => {
  const { icon, className, children, ...buttonProps } = props;
  const classes = ['button'];
  if (className) {
    classes.push(className);
  }
  return (
    <button {...buttonProps} className={classes.join(' ')}>
      <p>{children}</p>
      {icon ? <i className="button__icon">{icon}</i> : null}
    </button>
  );
};
