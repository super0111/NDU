import { Container, Box, Typography, Link } from '@mui/material'

import { OutlinedSearch } from '../../components'
import { palette } from '../../themes'

import {
  PersonalDataCollect,
  PersonalDataUse,
  Sharing,
  DataRetention,
  UpdateInformation,
  CaliforniaPrivacy,
  Children,
  Links,
  Security,
  Phishing,
  Choices,
  Changes,
  ContactUs,
} from '.'

export const PrivacyPolicy = () => {
  return (
    <Container>
      <Box
        display="flex"
        alignItems="center"
        py={6}
        sx={{
          position: 'relative',
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
          Privacy Policy
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
          Last Updated December 25, 2022
        </Typography>
        <Typography
          variant="body1"
          my={2}
          sx={{
            color: palette.common.black,
            fontSize: 16,
          }}
        >
          Welcome to the website (the “<strong>Site</strong>”) of
          Neurodivergent-U (“<strong>NDU</strong>,” “<strong>we</strong>,” or “
          <strong>us</strong>”). This Privacy Policy explains what Personal Data
          (defined below) we collect, how we use and share that data, and your
          choices concerning our data practices.
        </Typography>
        <Typography
          variant="body1"
          my={2}
          sx={{
            color: palette.common.black,
            fontSize: 16,
          }}
        >
          Before using the Site or submitting any Personal Data to NDU, please
          review this Privacy Policy carefully and
          <Link
            href="mailto:info@neurodivergentu.com"
            target="_blank"
            mx={1}
            sx={{
              color: '#F26101 !important',
              textDecoration: 'underline',
            }}
          >
            contact us
          </Link>
          if you have any questions. By using the Site, you agree to the
          practices described in this Privacy Policy. If you do not agree to
          this Privacy Policy, please do not access the Site.
        </Typography>
      </Box>
      <Box sx={{ width: { sm: '76%', xs: '100%' } }}>
        <PersonalDataCollect />
        <PersonalDataUse />
        <Sharing />
        <DataRetention />
        <UpdateInformation />
        <CaliforniaPrivacy />
        <Children />
        <Links />
        <Security />
        <Phishing />
        <Choices />
        <Changes />
        <ContactUs />
      </Box>
    </Container>
  )
}
