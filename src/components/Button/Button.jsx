import './Button.css';

export const Button = props => {
  return (
    <button className="button">
      <p>{props.children}</p>
      {props.icon ? <i className="button__icon">{props.icon}</i> : null}
    </button>
  );
};
