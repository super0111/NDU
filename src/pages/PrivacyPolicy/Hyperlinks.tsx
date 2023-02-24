import { Box, Typography } from '@mui/material'

import { palette } from '../../themes'

export const Hyperlinks = () => {
  return (
    <Box mt={4}>
      <Typography
        variant="h4"
        sx={{
          color: palette.common.black,
        }}
      >
        7. HYPERLINKS
      </Typography>
      <Typography
        variant="body1"
        mt={4}
        sx={{
          color: palette.common.black,
          fontSize: 16,
        }}
      >
        NDU makes no claim or representation regarding, and accepts no
        responsibility for, the quality, content, nature or reliability of
        third-party websites accessible by hyperlink from the Site, or websites
        linking to the Site. Such sites are not under the control of NDU and NDU
        is not responsible for the contents of any linked site or any link
        contained in a linked site, for any review of such sites, for the
        products or services available on or through such sites, or for changes
        or updates to such sites. NDU provides these links to you only as a
        convenience, and the inclusion of any link does not imply affiliation,
        endorsement or adoption by NDU of any site, the products or services
        available on or through any site, or any information contained therein.
        When you leave the Site, these Terms of Use will no longer govern your
        Internet browser session. Your use of any site to which you navigate
        from the Site will be subject to that site’s terms of use, if any, and
        its privacy and data gathering and usage policies. It shall be your sole
        responsibility to review the applicable terms and policies, including
        privacy and data gathering and usage practices, of any site to which you
        navigate from the Site.
      </Typography>
    </Box>
  )
}
