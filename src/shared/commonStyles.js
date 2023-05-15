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

// ======================================================================
// FORMS STYLES
// ======================================================================

export const formWrapper = {
  m: '0 auto',
  p: { xs: '24px 24px', md: '24px 72px' },
  maxWidth: '750px',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  bgcolor: 'neutral.accent',
  border: '1px solid #78938A',
  borderRadius: '16px',
};

export const formTitle = {
  fontSize: '32px',
  mb: '24px',
};

export const inputWrapper = {
  mb: '40px',
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  gap: '36px',
};

export const formControl = {
  width: '100%',

  color: 'primary.main',
};

export const inputLabel = {
  color: 'primary.main',
};

export const inputText = {
  color: 'primary.main',

  bgcolor: 'neutral.accent',
  borderRadius: '8px',
};

export const btnFormWrapper = {
  display: 'flex',
  gap: '16px',
};

export const footerLink = {
  '&:hover': { color: 'primary.darker' },

  color: 'primary.accent',
};
