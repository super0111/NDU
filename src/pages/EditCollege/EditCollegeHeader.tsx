import { Box, Typography } from '@mui/material'

import { palette } from '../../themes'

export const EditCollegeHeader = () => {
  return (
    <Box
      display="flex"
      flexDirection={{ sm: 'row', xs: 'column' }}
      justifyContent="space-between"
      alignItems={{ sm: 'center', xs: 'flex-start' }}
      mt={8}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography
          variant="h4"
          sx={{
            alignItems: 'center',
            backgroundColor: '#CA9F02',
            borderRadius: '8px',
            color: `${palette.common.white} !important`,
            display: 'flex',
            flexShrink: 0,
            fontSize: 24,
            fontWeight: 700,
            height: { sm: '60px', xs: '50px' },
            justifyContent: 'center',
            width: { sm: '70px', xs: '60px' },
          }}
        >
          1
        </Typography>
        <Box display="flex" flexDirection="column" ml={8}>
          <Typography
            variant="h4"
            sx={{
              color: palette.common.black,
              fontFamily: 'Playfair Display',
              fontSize: { sm: 40, xs: 32 },
              textTransform: 'uppercase',
            }}
          >
            ABCOTT INSTITUTE
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: palette.text.primary,
              fontSize: { sm: 16, xs: 14 },
              fontWeight: 700,
              lineHeight: { sm: '160%', xs: '130%' },
            }}
          >
            Southfield, MI
          </Typography>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mt={{ sm: 0, xs: 4 }}
      >
        <Typography
          variant="h4"
          sx={{
            color: palette.common.black,
            fontSize: { sm: 28, xs: 24 },
          }}
        >
          Grade:
        </Typography>
        <Typography
          variant="h4"
          ml={4}
          sx={{
            alignItems: 'center',
            backgroundColor: '#94C804',
            borderRadius: '8px',
            color: `${palette.common.white} !important`,
            display: 'flex',
            fontSize: 24,
            fontWeight: 700,
            height: '60px',
            justifyContent: 'center',
            width: '70px',
          }}
        >
          B+
        </Typography>
      </Box>
    </Box>
  )
}
