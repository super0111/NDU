import { Box, Typography } from '@mui/material'

import { palette } from '../../themes'

export const Modifications = () => {
  return (
    <Box mt={4}>
      <Typography
        variant="h4"
        sx={{
          color: palette.common.black,
        }}
      >
        2. MODIFICATIONS TO TERMS OF USE
      </Typography>
      <Typography
        variant="body1"
        mt={2}
        sx={{
          color: palette.common.black,
          fontSize: 16,
        }}
      >
        NDU may change, modify or remove any provision of this Terms of Use, at
        any time and in its sole discretion. If NDU changes or modifies these
        Terms of Use, it will post the changes on the then current version of
        these Terms of Use and will indicate at the top of this page the date
        these Terms of Use were last revised. Any changes or modifications will
        be effective immediately upon posting, and you waive any right you may
        have to receive specific notice of such changes or modifications. Your
        continued use of the Site or the Services following the posting of
        changes or modifications will constitute and confirm your agreement to
        and acceptance of the Terms of Use as so changed or modified. It is your
        responsibility to regularly check this Site to determine if there have
        been changes to these Terms of Use and to review such changes. If you do
        not agree to the amended terms, you must stop using the Site and the
        Services.
      </Typography>
    </Box>
  )
}
