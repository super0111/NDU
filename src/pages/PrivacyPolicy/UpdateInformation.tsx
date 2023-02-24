import { Box, Typography, Link } from '@mui/material'

import { palette } from '../../themes'

export const UpdateInformation = () => {
  return (
    <Box mt={4}>
      <Typography
        variant="h4"
        sx={{
          color: palette.common.black,
        }}
      >
        5. UPDATE YOUR INFORMATION
      </Typography>
      <Typography
        variant="body1"
        mt={4}
        sx={{
          color: palette.common.black,
          fontSize: 16,
        }}
      >
        Please
        <Link
          href="mailto:info@neurodivergentu.com"
          target="_blank"
          mx={1}
          sx={{
            color: '#F26101 !important',
            textDecoration: 'underline',
          }}
        >
          contact us.
        </Link>
        if you need to change or correct your Personal Data.
      </Typography>
    </Box>
  )
}
