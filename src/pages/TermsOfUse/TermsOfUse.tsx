import { Container, Box, Typography } from '@mui/material'

import { OutlinedSearch } from '../../components'
import { palette } from '../../themes'

import {
  Introduction,
  Modifications,
  PrivacyPolicySection,
  CopyRight,
  DigitalMillennium,
  Trademarks,
  Hyperlinks,
  ThirdPartyContent,
  UserContent,
  Representations,
  Submissions,
  Indemnification,
  Disclaimer,
  Limitation,
  Applicable,
  Termination,
  Serverability,
  Question,
} from './'

export const TermsOfUse = () => {
  return (
    <Container>
      <Box
        py={6}
        sx={{
          width: { md: '70%', sm: '100%', xs: '100%' },
        }}
      >
        <OutlinedSearch />
      </Box>
      <Box sx={{ width: { sm: '76%', xs: '100%' } }}>
        <Typography
          variant="h2"
          sx={{
            color: palette.common.black,
            fontSize: { sm: '42px', xs: '36px' },
          }}
        >
          Terms and Conditions
        </Typography>
        <Typography
          variant="body1"
          my={2}
          sx={{
            color: palette.common.black,
            fontSize: 16,
            fontWeight: 700,
          }}
        >
          Last Revised: December 25, 2022
        </Typography>
      </Box>
      <Box sx={{ width: { sm: '76%', xs: '100%' } }}>
        <Introduction />
        <Modifications />
        <PrivacyPolicySection />
        <CopyRight />
        <DigitalMillennium />
        <Trademarks />
        <Hyperlinks />
        <ThirdPartyContent />
        <UserContent />
        <Representations />
        <Submissions />
        <Indemnification />
        <Disclaimer />
        <Limitation />
        <Applicable />
        <Termination />
        <Serverability />
        <Question />
      </Box>
    </Container>
  )
}
