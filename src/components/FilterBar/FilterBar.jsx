import { Button } from '../Button/Button';
import { FiltersIcon } from '../Icons/FiltersIcon';
import { Categories } from '../Categories/Categories';
import './FilterBar.css';
export const FilterBar = () => {
  return (
    <section className="filter-bar">
      <Categories />
      <Button icon={<FiltersIcon />}>Filters</Button>
    </section>
  );
};
