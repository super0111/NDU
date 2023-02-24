import { Box, Typography } from '@mui/material'

import { palette } from '../../themes'

export const Links = () => {
  return (
    <Box mt={4}>
      <Typography
        variant="h4"
        sx={{
          color: palette.common.black,
        }}
      >
        8. LINKS TO OTHER WEBSITES
      </Typography>
      <Typography
        variant="body1"
        mt={4}
        sx={{
          color: palette.common.black,
          fontSize: 16,
        }}
      >
        The Site may contain links to other websites not operated or controlled
        by NDU, including Social Media Sites (“
        <strong>Third-Party Sites</strong>”). The information that you share
        with Third-Party Sites will be governed by the specific privacy policies
        and terms of service of the Third-Party Sites and not by this Privacy
        Policy. By providing these links we do not imply that we endorse or have
        reviewed these sites. Please contact the Third-Party Sites directly for
        information on their privacy practices and policies.
      </Typography>
    </Box>
  )
}
