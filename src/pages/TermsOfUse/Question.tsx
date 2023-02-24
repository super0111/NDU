import { Box, Typography, Link } from '@mui/material'

import { palette } from '../../themes'

export const Question = () => {
  return (
    <Box mt={4} mb={20}>
      <Typography
        variant="h4"
        sx={{
          color: palette.common.black,
        }}
      >
        18. QUESTIONS & CONTACT INFORMATION
      </Typography>
      <Typography
        variant="body1"
        mt={4}
        sx={{
          color: palette.common.black,
          fontSize: 16,
        }}
      >
        Questions or comments about the Site may be directed to us
        <Link
          href="mailto:info@neurodivergentu.com"
          target="_blank"
          mx={1}
          sx={{
            color: '#F26101 !important',
            textDecoration: 'underline',
          }}
        >
          by email.
        </Link>
      </Typography>
    </Box>
  )
}
