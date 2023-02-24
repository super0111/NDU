import { Box, TextField, Button } from '@mui/material'

import { palette } from '../themes'

export const OutlinedSearch = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      sx={{
        position: 'relative',
        width: '100%',
      }}
    >
      <TextField
        id="search"
        size="small"
        placeholder="Start by searching a college"
        sx={{
          '& fieldset': {
            border: '2px solid #ced4da',
            borderBottomRightRadius: '0px !important',
            borderRadius: '8px',
            borderTopRightRadius: '0px !important',
          },
          '& input': {
            color: '#012A4A',
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: 1.5,
            padding: '12px 24px',
          },
          width: '100%',
        }}
      />

      <Button
        sx={{
          '&:hover': {
            background: '#CA9F02 !important',
            color: '#FFF !important',
          },
          backgroundColor: palette.common.white,
          border: '2px solid #CA9F02',
          borderBottomLeftRadius: '0px !important',
          borderRadius: '8px',
          borderTopLeftRadius: '0px !important',
          color: '#CA9F02 !important',
          fontFamily: 'DM Sans',
          fontSize: '.875rem',
          fontWeight: 700,
          letterSpacing: '0.75px',
          lineHeight: '1.5rem',
          marginTop: '-1px',
          padding: '8.4px 20px',
        }}
      >
        Search
      </Button>
    </Box>
  )
}
