import { Box, FormControl, InputLabel, OutlinedInput, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { formWrapper, formControl, input } from './filterNewsStyles';

export const FilterNews = ({ onChange, value }) => {
  return (
    <Box component="form" sx={formWrapper}>
      <FormControl sx={formControl} variant="outlined">
        <InputLabel>Find news</InputLabel>

        <OutlinedInput
          onChange={onChange}
          value={value}
          type="text"
          sx={input}
          endAdornment={
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          }
          label="Find news"
        />
      </FormControl>
    </Box>
  );
};
