import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { List, ListItem, Button, Box } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { Logo } from 'components/Logo/Logo';
import { AuthBar } from 'components/AuthBar/AuthBar';
import { navList } from 'refs/constants';
import {
  navListStyle,
  navItemStyle,
  navBtnStyle,
  menuWrapperStyle,
  menuBtnStyle,
  menuCloseBtnStyle,
  menuContainerStyle,
  menuListStyle,
  menuItemStyle,
} from './navigationStyles';

export const Navigation = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <>
      <Box sx={menuWrapperStyle}>
        <Button sx={menuBtnStyle} onClick={handleMenuClick}>
          <MenuIcon fontSize="large" />
        </Button>
      </Box>

      {menuIsOpen && (
        <Box sx={menuContainerStyle}>
          <Button sx={menuCloseBtnStyle} onClick={handleMenuClick}>
            <CloseIcon fontSize="large" />
          </Button>

          <Logo onClick={handleMenuClick} sxColor={{ color: 'neutral.light' }} />

          <AuthBar
            onClick={handleMenuClick}
            sxDisplay={{ display: 'flex' }}
            textColor={{ color: 'neutral.light' }}
          />

          <List sx={menuListStyle}>
            {navList.map(({ name, path }) => {
              return (
                <ListItem key={name} sx={navItemStyle}>
                  <Button
                    component={NavLink}
                    to={path}
                    onClick={handleMenuClick}
                    sx={menuItemStyle}
                  >
                    {name}
                  </Button>
                </ListItem>
              );
            })}
          </List>
        </Box>
      )}

      <List sx={navListStyle}>
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
    </>
  );
};
