import { Box, Typography } from '@mui/material'

import { palette } from '../../themes'

export const Representations = () => {
  return (
    <Box mt={4}>
      <Typography
        variant="h4"
        sx={{
          color: palette.common.black,
        }}
      >
        10. REPRESENTATIONS; USER DATA; SECURITY
      </Typography>
      <Typography
        variant="body1"
        my={4}
        sx={{
          color: palette.common.black,
          fontSize: 16,
        }}
      >
        In consideration of your use of any of the Site and the Services, you
        represent and warrant that you are of legal age to form a binding
        contract. In consideration of your use of any of the Site and Services,
        you agree to:
      </Typography>

      <ul className="terms-of-use">
        <li>
          provide accurate, current and complete information about you as may be
          prompted by any form on the Site (“User Data“);
        </li>
        <li>
          maintain and be solely responsible for the security of your User Data;
          and
        </li>
        <li>
          accept all risks of unauthorized access to or use of your User Data
          and any other information you provide to NDU.
        </li>
      </ul>
    </Box>
  )
}
