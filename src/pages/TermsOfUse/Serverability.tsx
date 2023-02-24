import { Box, Typography } from '@mui/material'

import { palette } from '../../themes'

export const Serverability = () => {
  return (
    <Box mt={4}>
      <Typography
        variant="h4"
        sx={{
          color: palette.common.black,
        }}
      >
        17. SEVERABILITY
      </Typography>
      <Typography
        variant="body1"
        mt={4}
        sx={{
          color: palette.common.black,
          fontSize: 16,
        }}
      >
        If any provision of these Terms of Use shall be deemed unlawful, void or
        for any reason unenforceable, then that provision shall be deemed
        severable from these Terms of Use and shall not affect the validity and
        enforceability of any remaining provisions.
      </Typography>
    </Box>
  )
}
