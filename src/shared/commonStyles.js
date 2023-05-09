// ======================================================================
// BUTTONS STYLES
// ======================================================================
export const baseBtn = {
  p: '8px 24px',

  fontWeight: 400,
  fontSize: '20px',
  lineHeight: 1.5,
  textTransform: 'none',

  boxShadow: 'none',
  border: 'none',
  borderRadius: '8px',
};

export const outlinedBtn = {
  ...baseBtn,
  '&:hover, &.active': { bgcolor: 'neutral.accent', boxShadow: 3 },
  color: 'primary.main',
  bgcolor: 'transparent',
  border: '1px solid #92BA92',
};

export const containedBtn = {
  ...baseBtn,
  '&:hover, &.active': { bgcolor: 'primary.darker', boxShadow: 3 },
  color: 'neutral.light',
  bgcolor: 'primary.accent',
};
