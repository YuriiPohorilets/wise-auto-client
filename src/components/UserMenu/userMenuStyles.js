export const menuWrapper = {
  display: { xs: 'none', md: 'flex' },
  alignItems: 'center',
  textAlign: 'center',
};

export const menuName = {
  color: 'primary.main',
  fontSize: '20px',
  mr: '8px',
};

export const avatarWrapper = {
  borderRadius: '8px',
};

export const menuAvatar = {
  width: '32px',
  height: '32px',
  borderRadius: '8px',
};

export const menuList = {
  '& .MuiAvatar-root': { width: '32px', height: '32px', ml: -0.5, mr: 1 },
  '&:before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    top: 0,
    right: 14,
    width: 10,
    height: 10,
    bgcolor: 'background.paper',
    transform: 'translateY(-50%) rotate(45deg)',
    zIndex: 0,
  },

  color: 'primary.main',
  overflow: 'visible',
  width: '230px',
  boxShadow: 3,
  mt: 1.5,
};

export const menuItem = {
  '&:hover': { bgcolor: 'neutral.accent' },

  fontSize: '20px',
};
