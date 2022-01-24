import './TrackerIcon.css';
export const TrackerIcon = (props) => {
  const { icon } = props;
  return (
    <div className="tracker">
      {icon ? <i className="tracker__icon">{icon}</i> : null}
    </div>
  );
};
