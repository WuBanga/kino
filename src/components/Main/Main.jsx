import { Search } from '../Search/Search';
import { FilterBar } from '../FilterBar/FilterBar';
import './Main.css';

export const Main = () => {
  return (
    <main className="main">
      <Search />
      <FilterBar />
    </main>
  );
};
