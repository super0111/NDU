import { Box, Typography } from '@mui/material'

import { palette } from '../../themes'

export const Indemnification = () => {
  return (
    <Box mt={4}>
      <Typography
        variant="h4"
        sx={{
          color: palette.common.black,
        }}
      >
        12. INDEMNIFICATION
      </Typography>
      <Typography
        variant="body1"
        mt={4}
        sx={{
          color: palette.common.black,
          fontSize: 16,
        }}
      >
        You agree to defend, indemnify and hold harmless NDU, its affiliated
        entities, clients, customers, independent contractors, service providers
        and consultants, and their respective directors, employees,
        shareholders, members and agents (together, “
        <strong>Indemnified Parties</strong>”), from and against any claims,
        damages, costs, liabilities and expenses (including, but not limited to,
        reasonable attorneys’ fees) arising out of or related to your use of the
        Site, the Services, the Site Materials, and any User Content you post,
        store or otherwise transmit on or through the Site, the Services or your
        use of the Interactive Areas, including without limitation, any actual
        or threatened suit, demand or claim made against the Indemnified
        Parties, or any of them, arising out of or relating to the User Content,
        your conduct, your violation of these Terms of Use or the NDU Privacy
        Policy, as each may be amended from time to time, or your violation of
        any laws, regulations or third party rights.
      </Typography>
    </Box>
  )
}
