import { Box, Typography, Link } from '@mui/material'

import { palette } from '../../themes'

export const ContactUs = () => {
  return (
    <Box mt={4} mb={20}>
      <Typography
        variant="h4"
        sx={{
          color: palette.common.black,
        }}
      >
        CONTACT US
      </Typography>
      <Typography
        variant="body1"
        mt={4}
        sx={{
          color: palette.common.black,
          fontSize: 16,
        }}
      >
        If you have any questions about our Privacy Policy or information
        practices, please feel free to
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
      </Typography>
    </Box>
  )
}
