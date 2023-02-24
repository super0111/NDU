import { Box, Typography } from '@mui/material'

import { palette } from '../../themes'

export const Applicable = () => {
  return (
    <Box mt={4}>
      <Typography
        variant="h4"
        sx={{
          color: palette.common.black,
        }}
      >
        15. APPLICABLE LAW AND VENUE
      </Typography>
      <Typography
        variant="body1"
        mt={4}
        sx={{
          color: palette.common.black,
          fontSize: 16,
        }}
      >
        These Terms of Use and your use of the Site and the Services shall be
        governed by and construed in accordance with the laws of the State of
        New York, without resort to its conflict of law provisions. You agree
        that any action at law, contract or in equity arising out of or relating
        to these Terms of Use shall be filed only in the state and federal
        courts located in Buffalo, New York and you hereby irrevocably and
        unconditionally consent and submit to the exclusive jurisdiction of such
        courts over any suit, action or proceeding arising out of these Terms of
        Use.
      </Typography>
    </Box>
  )
}
