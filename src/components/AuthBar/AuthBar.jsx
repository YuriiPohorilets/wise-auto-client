import { NavLink } from 'react-router-dom';
import { List, ListItem, Button } from '@mui/material';
import { authListStyle, authItemStyle } from './authBarStyles';
import { outlinedBtnStyle, containedBtnStyle } from 'shared/commonStyles';

export const AuthBar = ({ sxDisplay, textColor, onClick }) => {
  return (
    <List sx={{ ...authListStyle, ...sxDisplay }}>
      <ListItem sx={authItemStyle}>
        <Button
          component={NavLink}
          to={'/login'}
          onClick={onClick}
          sx={{ ...containedBtnStyle, ...textColor }}
        >
          Sign in
        </Button>
      </ListItem>

      <ListItem sx={authItemStyle}>
        <Button
          component={NavLink}
          to={'/register'}
          onClick={onClick}
          sx={{ ...outlinedBtnStyle, ...textColor }}
        >
          Sign up
        </Button>
      </ListItem>
    </List>
  );
};
