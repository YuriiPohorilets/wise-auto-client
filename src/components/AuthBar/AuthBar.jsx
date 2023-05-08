import { NavLink } from 'react-router-dom';
import { List, ListItem, Button } from '@mui/material';
import { authListStyle, authItemStyle } from './authBarStyles';
import { outlinedBtnStyle, containedBtnStyle } from 'shared/commonStyles';

export const AuthBar = () => {
  return (
    <List sx={authListStyle}>
      <ListItem sx={authItemStyle}>
        <Button component={NavLink} to={'/login'} sx={containedBtnStyle}>
          Sign in
        </Button>
      </ListItem>

      <ListItem sx={authItemStyle}>
        <Button component={NavLink} to={'/register'} sx={outlinedBtnStyle}>
          Sign up
        </Button>
      </ListItem>
    </List>
  );
};
