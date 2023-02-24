import { Box, Typography } from '@mui/material'

import { palette } from '../../themes'

export const Termination = () => {
  return (
    <Box mt={4}>
      <Typography
        variant="h4"
        sx={{
          color: palette.common.black,
        }}
      >
        16. TERMINATION
      </Typography>
      <Typography
        variant="body1"
        mt={4}
        sx={{
          color: palette.common.black,
          fontSize: 16,
        }}
      >
        Notwithstanding any provision of these Terms of Use, NDU reserves the
        right, without notice and in its sole discretion, to terminate your
        license to use the Site, the Services, the Site Materials or any portion
        of any of the foregoing, and to block or prevent your future access to
        and use of the Site or any of the Services or Site Materials.
      </Typography>
    </Box>
  )
}
