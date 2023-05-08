import { NavLink } from 'react-router-dom';
import { List, ListItem, Button } from '@mui/material';
import { navList } from 'refs/constants';
import { navStyle, navItemStyle, navBtnStyle } from './navigationStyles';

export const Navigation = () => {
  return (
    <List sx={navStyle}>
      {navList.map(({ name, path }) => {
        return (
          <ListItem key={name} sx={navItemStyle}>
            <Button component={NavLink} to={path} sx={navBtnStyle}>
              {name}
            </Button>
          </ListItem>
        );
      })}
    </List>
  );
};
