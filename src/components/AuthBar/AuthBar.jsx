import { NavLink } from 'react-router-dom';
import { List, ListItem, Button } from '@mui/material';
import { authList, authItem } from './authBarStyles';
import { outlinedBtn, containedBtn } from 'shared/commonStyles';

export const AuthBar = ({ sxDisplay, textColor, onClick }) => {
  return (
    <List sx={{ ...authList, ...sxDisplay }}>
      <ListItem sx={authItem}>
        <Button
          component={NavLink}
          to={'/login'}
          onClick={onClick}
          sx={{ ...containedBtn, ...textColor }}
        >
          Sign in
        </Button>
      </ListItem>

      <ListItem sx={authItem}>
        <Button
          component={NavLink}
          to={'/register'}
          onClick={onClick}
          sx={{ ...outlinedBtn, ...textColor }}
        >
          Sign up
        </Button>
      </ListItem>
    </List>
  );
};
