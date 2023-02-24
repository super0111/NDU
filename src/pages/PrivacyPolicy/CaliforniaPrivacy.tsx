import { Box, Typography, Link } from '@mui/material'

import { palette } from '../../themes'

export const CaliforniaPrivacy = () => {
  return (
    <Box mt={4}>
      <Typography
        variant="h4"
        sx={{
          color: palette.common.black,
        }}
      >
        6. CALIFORNIA PRIVACY RIGHTS DISCLOSURES
      </Typography>
      <Typography
        variant="body1"
        mt={4}
        sx={{
          color: palette.common.black,
          fontSize: 16,
        }}
      >
        <strong>Third Party Marketing</strong>: If you are a California
        resident, you may have rights under the California Consumer Privacy Act
        (<em>Cal. Civ. Code §1798.100 et seq</em>.). If you are a California
        resident and wish to opt out of sharing your Personal Data with third
        parties for their direct marketing purposes, please
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
        and clearly state your request, including your name, mailing address,
        email address, and phone number. Please see the “Your Choices” section
        of this Privacy Policy for additional information.
      </Typography>
    </Box>
  )
}
