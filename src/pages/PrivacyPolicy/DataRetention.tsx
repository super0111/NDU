import { Box, Typography } from '@mui/material'

import { palette } from '../../themes'

export const DataRetention = () => {
  return (
    <Box mt={4}>
      <Typography
        variant="h4"
        sx={{
          color: palette.common.black,
        }}
      >
        4. DATA RETENTION
      </Typography>
      <Typography
        variant="body1"
        mt={4}
        sx={{
          color: palette.common.black,
          fontSize: 16,
        }}
      >
        We keep Personal Data for as long as reasonably necessary for the
        purposes described in this Privacy Policy, while we have a business need
        to do so, or as required by law (e.g., for tax, legal, accounting, or
        other purposes), whichever is longer.
      </Typography>
    </Box>
  )
}
