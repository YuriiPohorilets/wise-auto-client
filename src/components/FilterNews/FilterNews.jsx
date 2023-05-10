import { Box, FormControl, InputLabel, OutlinedInput, InputAdornment } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export const FilterNews = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: '32px' }}>
      <FormControl sx={{ width: '700px', mx: 'auto' }} variant="outlined">
        <InputLabel>Find news</InputLabel>

        <OutlinedInput
          type="text"
          sx={{ pr: '24px', borderRadius: '8px' }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="Find news" edge="end" sx={{ borderRadius: '8px' }}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
          label="Find news"
        />
      </FormControl>
    </Box>
  );
};
