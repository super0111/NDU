import { Container, Box, Typography } from '@mui/material'

import { Search } from '../../components/Search'
import { palette } from '../../themes'

const buttonText = 'Submit'
const placeholder1 = 'Enter your email account'
const placeholder2 = 'Enter email account'

const textStyle = {
  padding: { sm: '5px', xs: '0' },
}
const buttonStyle = {
  alignItems: 'center',
  background: '#CA9F02',
  borderRadius: '8px',
  color: '#FCFCFC !important',
  display: 'flex',
  fontFamily: 'DM Sans',
  fontSize: { sm: '18px', xs: '16px' },
  fontStyle: 'normal',
  fontWeight: 700,
  letterSpacing: '0.75px',
  lineHeight: '32px',
  padding: { sm: '9px 32px', xs: '6px 24px' },
  textAlign: 'center',
}

export const SendEmail = () => {
  return (
    <Box
      mt={14}
      mb={14}
      sx={{
        background: palette.primary.main,
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Box
          mb={14}
          sx={{
            alignItems: { sm: 'baseline', xs: 'center' },
            display: 'flex',
            flexDirection: { sm: 'row', xs: 'column' },
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="h1"
            mr={{ sm: 4, xs: 0 }}
            sx={{
              fontSize: '95px !important',
              letterSpacing: '-0.02em',
              lineHeight: '100%',
            }}
          >
            50
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: { sm: '62px !important', xs: '42px !important' },
            }}
          >
            Colleges rated
          </Typography>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          mb={8}
        >
          <Box
            mb={8}
            sx={{
              borderTop: '4px solid #FF6464',
              width: '40px',
            }}
          />
          <Typography
            variant="h2"
            mb={3}
            sx={{
              maxWidth: { sm: '100%', xs: '80%' },
              textAlign: 'center',
            }}
          >
            Get involved today
          </Typography>

          <Typography
            variant="body1"
            sx={{
              maxWidth: { md: '100%', sm: '95%', xs: '90%' },
              textAlign: 'center',
            }}
          >
            Register on this site to contribute or edit data for your college or
            university.
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center">
          <Box maxWidth={468} width="100%">
            <Search
              placeholder1={placeholder1}
              placeholder2={placeholder2}
              textStyle={textStyle}
              buttonText={buttonText}
              buttonStyle={buttonStyle}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
