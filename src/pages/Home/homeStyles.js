import { containedBtn } from 'shared/commonStyles';

export const wrapper = {
  display: 'flex',
  gap: '40px',
  flexWrap: 'wrap',
  justifyContent: { xs: 'center', md: 'space-between' },
};

export const contentWrapper = {
  flexBasis: { xs: '100%', md: '45%' },
  textAlign: { xs: 'center', md: 'left' },
};

export const title = {
  mb: '24px',
  fontWeight: 700,
  fontSize: { xs: '36px', md: '64px' },
  color: 'primary.accent',
};

export const subtitle = {
  mb: '48px',
  fontWeight: 300,
  fontSize: { xs: '24px', md: '32px' },
};

export const btn = {
  ...containedBtn,
  fontSize: { xs: '24px', md: '32px' },
  px: '64px',
};

export const imgWrapper = {
  flexBasis: '45%',
  width: '540px',
  minWidth: '300px',
  order: { xs: -1, md: 0 },
};
