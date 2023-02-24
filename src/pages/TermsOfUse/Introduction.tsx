import { Box, Typography, Link } from '@mui/material'

import { palette } from '../../themes'

export const Introduction = () => {
  return (
    <Box mt={4}>
      <Typography
        variant="h4"
        sx={{
          color: palette.common.black,
        }}
      >
        1. INTRODUCTION
      </Typography>
      <Typography
        variant="body1"
        mt={4}
        sx={{
          color: palette.common.black,
          fontSize: 16,
        }}
      >
        Welcome to the Neurodivergent-U (“<strong>NDU</strong>,” “
        <strong>we</strong>,” or “us”) website (the “<strong>Site</strong>”).
      </Typography>

      <Typography
        variant="body1"
        mt={4}
        sx={{
          color: palette.common.black,
          fontSize: 16,
        }}
      >
        These Terms and Conditions (“<strong>Terms of Use</strong>”) apply to
        your access to and use of the Site, regardless of domain name or IP
        address and the features and applications, products and services
        accessible through the Site (collectively the “<strong>Services</strong>
        ”). These Terms of Use are in addition to the terms and conditions of
        any other agreement you may have with NDU for products, services or
        otherwise, including, without limitation, the terms and conditions of
        NDU’s
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
        , as it may be amended from time to time.
      </Typography>

      <Typography
        variant="body1"
        mt={4}
        sx={{
          color: palette.common.black,
          fontSize: 16,
        }}
      >
        PLEASE READ THESE TERMS OF USE CAREFULLY AS THEY CONTAIN IMPORTANT
        INFORMATION REGARDING YOUR LEGAL RIGHTS, REMEDIES AND OBLIGATIONS. BY
        ACCESSING OR USING THE SITE OR THE SERVICES, YOU ARE ENTERING INTO A
        LEGAL CONTRACT WITH NDU, THE TERMS OF WHICH GOVERN YOUR USE OF THE SITE.
        BY YOUR ACCESS OR USE OF THE SITE OR SERVICES YOU UNCONDITIONALLY AND
        IRREVOCABLY AGREE TO BE BOUND BY THE TERMS AND CONDITIONS DESCRIBED
        HEREIN AND ALL ADDITIONAL TERMS INCORPORATED BY REFERENCE. IF YOU DO NOT
        AGREE TO ALL OF THESE TERMS, DO NOT USE THE SITE OR THE SERVICES.
      </Typography>
    </Box>
  )
}
