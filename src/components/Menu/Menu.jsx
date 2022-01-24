import { IconButton } from '../IconButton/IconButton';
import { HomeIcon } from '../Icons/HomeIcon';
import { SearchIcon } from '../Icons/SearchIcon';
import { UserProfileIcon } from '../Icons/UserProfileIcon';
import { BookmarkIcon } from '../Icons/BookmarkIcon';
import './Menu.css';
export const Menu = () => {
  return (
    <div className="menu">
      <IconButton icon={<HomeIcon />} />
      <IconButton icon={<SearchIcon />} />
      <IconButton icon={<BookmarkIcon />} />
      <IconButton icon={<UserProfileIcon />} />
    </div>
  );
};
