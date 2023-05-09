import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { List, ListItem, Button, Box } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { Logo } from 'components/Logo/Logo';
import { AuthBar } from 'components/AuthBar/AuthBar';
import { navItemList } from 'refs/constants';
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

          <AuthBar
            onClick={handleMenuClick}
            sxDisplay={{ display: 'flex' }}
            textColor={{ color: 'neutral.light' }}
          />

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
