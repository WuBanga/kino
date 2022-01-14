import { SearchIcon } from '../Icons/SearchIcon';
import './Search.css';

export const Search = () => {
  return (
    <form action="" className="search">
      <i className="search__icon">
        <SearchIcon />
      </i>
      <input className="search__input" type="search" placeholder="Search..." />
    </form>
  );
};
