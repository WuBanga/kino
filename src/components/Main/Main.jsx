import { Search } from '../Search/Search';
import { FilterBar } from '../FilterBar/FilterBar';
import { Movies } from '../Movies/Movies';

import { Menu } from '../Menu/Menu';
import './Main.css';

export const Main = () => {
  return (
    <div>
      <main className="main">
        <Search />
        <FilterBar />
        <h1>Popular movies</h1>
        <Movies />
      </main>
      <Menu />
    </div>
  );
};
