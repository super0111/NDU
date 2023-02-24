import { Box, Typography } from '@mui/material'

import { palette } from '../../themes'

export const Changes = () => {
  return (
    <Box mt={4}>
      <Typography
        variant="h4"
        sx={{
          color: palette.common.black,
        }}
      >
        12. CHANGES TO THE PRIVACY POLICY
      </Typography>
      <Typography
        variant="body1"
        mt={4}
        sx={{
          color: palette.common.black,
          fontSize: 16,
        }}
      >
        The Site, and our business, may change from time to time. As a result,
        we may change this Privacy Policy at any time. When we do, we will post
        an updated version on this page, unless another type of notice is
        required by the applicable law. By continuing to use our Site or
        providing us with Personal Data after we have posted an updated Privacy
        Policy, or notified you by other means if applicable, you consent to the
        revised Privacy Policy and practices described in it.
      </Typography>
    </Box>
  )
}
