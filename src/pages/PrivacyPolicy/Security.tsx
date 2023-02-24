import { Box, Typography } from '@mui/material'

import { palette } from '../../themes'

export const Security = () => {
  return (
    <Box mt={4}>
      <Typography
        variant="h4"
        sx={{
          color: palette.common.black,
        }}
      >
        9. SECURITY
      </Typography>
      <Typography
        variant="body1"
        mt={4}
        sx={{
          color: palette.common.black,
          fontSize: 16,
        }}
      >
        You use the Site at your own risk. We implement commercially reasonable
        technical, administrative, and organizational measures to protect
        Personal Data both online and offline from loss, misuse, and
        unauthorized access, disclosure, alteration, or destruction. However, no
        Internet or email transmission is ever fully secure or error free. In
        particular, email sent to or from us may not be secure. Therefore, you
        should take special care in deciding what information you send to us via
        the Site or email. Please keep this in mind when disclosing any Personal
        Data to us. In addition, we are not responsible for circumvention of any
        privacy settings or security measures contained on the Site or
        third-party websites.
      </Typography>
    </Box>
  )
}
