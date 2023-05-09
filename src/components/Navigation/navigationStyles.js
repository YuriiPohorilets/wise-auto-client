export const navList = {
  p: 0,
  display: { xs: 'none', md: 'flex' },
  alignItems: 'center',
  gap: '8px',
};

export const navItem = {
  p: 0,
  width: 'auto',
};

export const navBtn = {
  '&:hover': { color: 'primary.accent' },
  '&.active': { color: 'primary.accent' },

  p: '8px 24px',

  fontWeight: 400,
  fontSize: '20px',
  lineHeight: 1.5,
  textTransform: 'none',
};

export const menuWrapper = {
  display: { xs: 'block', md: 'none' },
};

export const menuBtn = {
  '&:hover': { color: 'primary.accent' },

  color: 'primary.main',
};

export const menuCloseBtn = {
  '&:hover': { color: 'primary.accent', bgcolor: 'neutral.accent' },

  position: 'absolute',
  top: '16px',
  right: '16px',

  color: 'neutral.light',
};

export const menuContainer = {
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 10,

  p: '40px 24px',
  width: '100vw',
  height: '100vh',
  display: { xs: 'flex', md: 'none' },
  flexDirection: 'column',
  alignItems: 'center',
  gap: '24px',

  bgcolor: 'primary.main',

  overflowY: 'auto',
};

export const menuList = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
};

export const menuItem = {
  '&:hover': { color: 'primary.accent', bgcolor: 'neutral.accent' },
  '&.active': { color: 'primary.accent' },

  p: '8px 24px',

  fontWeight: 400,
  fontSize: '20px',
  lineHeight: 1.5,
  color: 'neutral.light',
  textTransform: 'none',
};
