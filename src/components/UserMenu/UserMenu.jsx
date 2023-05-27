import { useState } from 'react';
import {
  Box,
  Typography,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  Tooltip,
  IconButton,
  ListItemIcon,
} from '@mui/material';
import { Logout } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { logout } from 'redux/auth/operations';
import { userMenuList } from 'refs/constants';
import {
  menuWrapper,
  menuName,
  avatarWrapper,
  menuAvatar,
  menuList,
  menuItem,
} from './userMenuStyles';

export const UserMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const { user } = useAuth();
  const open = !!anchorEl;

  const handleClick = e => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={menuWrapper}>
        <Typography sx={menuName}>{user.name}</Typography>

        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="medium"
            sx={avatarWrapper}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar alt="Remy Sharp" src={user.avatarUrl} sx={menuAvatar}></Avatar>
          </IconButton>
        </Tooltip>
      </Box>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: menuList,
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {userMenuList.map(({ name, path, icon }) => {
          return (
            <MenuItem key={name} component={NavLink} to={path} onClick={handleClose} sx={menuItem}>
              <ListItemIcon>{icon}</ListItemIcon>
              {name}
            </MenuItem>
          );
        })}

        <Divider />

        <MenuItem
          onClick={() => {
            dispatch(logout());
          }}
          sx={{ ...menuItem, '&:hover': { bgcolor: 'neutral.error' } }}
        >
          <ListItemIcon>
            <Logout fontSize="medium" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};
