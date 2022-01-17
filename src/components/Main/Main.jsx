import { Search } from '../Search/Search';
import { FilterBar } from '../FilterBar/FilterBar';
import { MovieList } from '../MovieList/MovieList';
import './Main.css';

export const Main = () => {
  return (
    <main className="main">
      <Search />
      <FilterBar />
      <h1>Popular movies</h1>
      <MovieList />
    </main>
  );
};
