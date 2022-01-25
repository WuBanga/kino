import { RightIcon } from '../Icons/RightIcon';
import { LeftIcon } from '../Icons/LeftIcon';
import { IconButton } from '../IconButton/IconButton';
import { PageButton } from './PageButton';
import './Pagination.css';

const getShownPages = (page) => {
  if (page === 1 || page === 2) {
    return [1, 2, 3];
  }
  if (page === 500) {
    return [1, page - 1, page];
  }
  return [1, page - 1, page, page + 1];
};

export const Pagination = (props) => {
  const { page, totalPages, onPageChange } = props;
  const canNextPage = page !== totalPages;
  const canPrevPage = page > 1;
  const currentPages = getShownPages(page);

  const goToPage = (pageNumber) => {
    onPageChange(pageNumber);
  };

  const goToPrevPage = () => {
    if (canPrevPage) goToPage(page - 1);
  };

  const goToNextPage = () => {
    if (canNextPage) goToPage(page + 1);
  };

  return (
    <section className="pagination">
      <IconButton
        disabled={!canPrevPage}
        className="pagination__button"
        icon={<LeftIcon />}
        onClick={goToPrevPage}
      />
      {currentPages.map((number) => (
        <PageButton
          isActive={page === number}
          key={number}
          pageNumber={number}
          onClick={(e) => goToPage(number)}
        />
      ))}
      <IconButton
        disabled={!canNextPage}
        className="pagination__button"
        icon={<RightIcon />}
        onClick={goToNextPage}
      />
    </section>
  );
};
