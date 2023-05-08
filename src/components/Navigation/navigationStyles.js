export const navStyle = {
  p: 0,

  display: 'flex',
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
  p: '4px 24px',

  fontWeight: 400,
  fontSize: '20px',
  textTransform: 'none',
};
