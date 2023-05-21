import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { List, ListItem, Button, Box, Divider, ListItemIcon } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon, Logout } from '@mui/icons-material';
import { Logo } from 'components/Logo/Logo';
import { AuthBar } from 'components/AuthBar/AuthBar';
import { useAuth } from 'hooks/useAuth';
import { navItemList, userMenuList } from 'refs/constants';
import { outlinedBtn } from 'shared/commonStyles';
import {
  navList,
  navItem,
  navBtn,
  menuWrapper,
  menuBtn,
  menuCloseBtn,
  menuContainer,
  menuList,
  menuItem,
} from './navigationStyles';

export const Navigation = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { isLoggedIn } = useAuth();

  const handleMenuClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <>
      <Box sx={menuWrapper}>
        <Button sx={menuBtn} onClick={handleMenuClick}>
          <MenuIcon fontSize="large" />
        </Button>
      </Box>

      {menuIsOpen && (
        <Box sx={menuContainer}>
          <Button sx={menuCloseBtn} onClick={handleMenuClick}>
            <CloseIcon fontSize="large" />
          </Button>

          <Logo onClick={handleMenuClick} sxColor={{ color: 'neutral.light' }} />

          {!isLoggedIn && (
            <AuthBar
              onClick={handleMenuClick}
              sxDisplay={{ display: 'flex' }}
              textColor={{ color: 'neutral.light' }}
            />
          )}

          <List sx={menuList}>
            {navItemList.map(({ name, path }) => {
              return (
                <ListItem key={name} sx={navItem}>
                  <Button component={NavLink} to={path} onClick={handleMenuClick} sx={menuItem}>
                    {name}
                  </Button>
                </ListItem>
              );
            })}
          </List>

          {isLoggedIn && (
            <>
              <Divider sx={{ bgcolor: 'primary.darker', width: '70%' }} />

              <List sx={menuList}>
                {userMenuList.map(({ name, path }) => {
                  return (
                    <ListItem key={name} sx={navItem}>
                      <Button component={NavLink} to={path} onClick={handleMenuClick} sx={menuItem}>
                        {name}
                      </Button>
                    </ListItem>
                  );
                })}
              </List>

              <Divider sx={{ bgcolor: 'primary.darker', width: '70%' }} />

              <Button component={NavLink} to={'/'} sx={{ ...outlinedBtn, color: 'neutral.light' }}>
                <ListItemIcon sx={{ minWidth: 'auto', mr: '8px', color: 'neutral.light' }}>
                  <Logout fontSize="medium" />
                </ListItemIcon>
                Logout
              </Button>
            </>
          )}
        </Box>
      )}

      <List sx={navList}>
        {navItemList.map(({ name, path }) => {
          return (
            <ListItem key={name} sx={navItem}>
              <Button component={NavLink} to={path} sx={navBtn}>
                {name}
              </Button>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};
