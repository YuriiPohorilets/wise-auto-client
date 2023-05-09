export const navListStyle = {
  p: 0,
  display: { xs: 'none', md: 'flex' },
  alignItems: 'center',
  gap: '8px',
};

export const navItemStyle = {
  p: 0,
  width: 'auto',
};

export const navBtnStyle = {
  '&:hover': { color: 'primary.accent' },
  '&.active': { color: 'primary.accent' },

  p: '8px 24px',

  fontWeight: 400,
  fontSize: '20px',
  lineHeight: 1.5,
  textTransform: 'none',
};

export const menuWrapperStyle = {
  display: { xs: 'block', md: 'none' },
};

export const menuBtnStyle = {
  '&:hover': { color: 'primary.accent' },

  color: 'primary.main',
};

export const menuCloseBtnStyle = {
  '&:hover': { color: 'primary.accent', bgcolor: 'neutral.accent' },

  position: 'absolute',
  top: '16px',
  right: '16px',

  color: 'neutral.light',
};

export const menuContainerStyle = {
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
};

export const menuListStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
};

export const menuItemStyle = {
  '&:hover': { color: 'primary.accent', bgcolor: 'neutral.accent' },
  '&.active': { color: 'primary.accent' },

  p: '8px 24px',

  fontWeight: 400,
  fontSize: '20px',
  lineHeight: 1.5,
  color: 'neutral.light',
  textTransform: 'none',
};
