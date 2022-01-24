import './Pagination.css';
import { RightIcon } from '../Icons/RightIcon';
import { LeftIcon } from '../Icons/LeftIcon';
import { IconButton } from '../IconButton/IconButton';

export const Pagination = () => {
  return (
    <section className="pagination">
      <IconButton className="pagination__button" icon={<LeftIcon />} />
      <IconButton
        className="pagination__button pagination__button--active"
        icon="1"
      />
      <IconButton className="pagination__button" icon="2" />
      <IconButton className="pagination__button" icon="3" />
      <IconButton className="pagination__button" icon={<RightIcon />} />
    </section>
  );
};
