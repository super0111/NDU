import { Box, Typography, Link } from '@mui/material'

import { palette } from '../../themes'

export const Phishing = () => {
  return (
    <Box mt={4}>
      <Typography
        variant="h4"
        sx={{
          color: palette.common.black,
        }}
      >
        10. PHISHING
      </Typography>
      <Typography
        variant="body1"
        mt={4}
        sx={{
          color: palette.common.black,
          fontSize: 16,
        }}
      >
        Phishing websites imitate legitimate websites in order to obtain
        personal or financial information. Identity theft and the practice
        currently known as “phishing” are of great concern to Neurodivergent-U.
        For more information about phishing, visit the website of the Federal
        Trade Commission at
        <Link
          href="https://www.consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams"
          target="_blank"
          mx={1}
          sx={{
            color: '#F26101 !important',
            textDecoration: 'underline',
            wordBreak: 'break-all',
          }}
        >
          https://www.consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams
        </Link>
        . In addition, if you believe you have received an email or had a
        similar interaction with a third party pretending to be NDU, please
        report it
        <Link
          href="mailto:info@neurodivergentu.com"
          target="_blank"
          mx={1}
          sx={{
            color: '#F26101 !important',
            textDecoration: 'underline',
          }}
        >
          to us.
        </Link>
      </Typography>
    </Box>
  )
}
