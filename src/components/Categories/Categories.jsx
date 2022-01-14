import './Categories.css';

export const Categories = () => {
  return (
    <div class="categories">
      <select className="categories__select">
        <option value="popular">Popular</option>
        <option value="top rated">Top rated</option>
        <option value="upcoming">Upcoming</option>
      </select>
    </div>
  );
};
