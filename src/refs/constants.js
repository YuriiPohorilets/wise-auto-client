import { TurnedIn, Article, Person } from '@mui/icons-material';

export const navItemList = [
  { name: 'News', path: '/news' },
  { name: 'Find car', path: '/notices' },
  { name: 'Services', path: '/services' },
];

export const userMenuList = [
  { name: 'Profile', path: '/profile', icon: <Person /> },
  { name: 'My posts', path: '/posts', icon: <Article /> },
  { name: 'Favorites', path: '/favorites', icon: <TurnedIn /> },
];
