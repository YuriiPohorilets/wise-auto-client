export const newsCard = {
  '&:hover': { bgcolor: 'neutral.accent' },

  maxWidth: '350px',
  height: '502px',

  border: '1px solid #78938A',
  borderRadius: '8px',
  boxShadow: 'none',
};

export const newsImg = {
  width: '350px',
  height: '190px',

  objectFit: 'cover',
};

export const newsTitle = {
  mb: '16px',
  display: '-webkit-box',

  fontSize: '24px',
  fontWeight: 600,
  color: 'primary.darker',

  overflow: 'hidden',
  WebkitLineClamp: '2',
  WebkitBoxOrient: 'vertical',
};

export const newsDescription = {
  mb: '24px',
  display: '-webkit-box',

  fontSize: '16px',
  fontWeight: 400,
  color: 'primary.main',

  overflow: 'hidden',
  WebkitLineClamp: '6',
  WebkitBoxOrient: 'vertical',
};

export const newsDate = {
  fontSize: '16px',
  fontWeight: 500,
  color: 'primary.main',
};
