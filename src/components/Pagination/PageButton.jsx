import { IconButton } from '../IconButton/IconButton';
export const PageButton = (props) => {
  const { pageNumber, isActive, ...iconButtonProps } = props;
  const classes = ['pagination__button'];
  if (isActive) {
    classes.push('pagination__button--active');
  }
  return (
    <IconButton
      {...iconButtonProps}
      className={classes.join(' ')}
      icon={pageNumber}
    />
  );
};
