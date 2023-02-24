import { Box, Typography, Link } from '@mui/material'

import { palette } from '../../themes'

export const PrivacyPolicySection = () => {
  return (
    <Box mt={4}>
      <Typography
        variant="h4"
        sx={{
          color: palette.common.black,
        }}
      >
        3. PRIVACY POLICY
      </Typography>
      <Typography
        variant="body1"
        mt={4}
        sx={{
          color: palette.common.black,
          fontSize: 16,
        }}
      >
        Please refer to the NDU
        <Link
          href="/privacy-policy"
          target="_blank"
          mx={1}
          sx={{
            color: '#F26101 !important',
            textDecoration: 'underline',
          }}
        >
          Privacy Policy
        </Link>
        for information on how NDU collects, uses and discloses the information
        collected on the Site.
      </Typography>
    </Box>
  )
}
