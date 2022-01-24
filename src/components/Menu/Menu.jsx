import { Button } from '../Button/Button';
import { HomeIcon } from '../Icons/HomeIcon';
import { SearchIcon } from '../Icons/SearchIcon';
import { UserProfileIcon } from '../Icons/UserProfileIcon';
import { BookmarkIcon } from '../Icons/BookmarkIcon';
import { CollectionIcon } from '../Icons/CollectionIcon';
import './Menu.css';
export const Menu = () => {
  return (
    <div className="menu">
      <Button className="menu__link" icon={<HomeIcon />} />
      <Button className="menu__link" icon={<SearchIcon />} />
      <Button className="menu__link" icon={<BookmarkIcon />} />
      <Button className="menu__link" icon={<UserProfileIcon />} />
    </div>
  );
};
