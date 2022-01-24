import './IconButton.css';

export const IconButton = (props) => {
  const { icon } = props;
  return (
    <button className="icon-button">
      {icon ? <i className="icon-button__icon">{icon}</i> : null}
    </button>
  );
};
