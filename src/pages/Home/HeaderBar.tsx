import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
  useMediaQuery,
} from '@mui/material'

import studentAvatar from '../../assets/images/student-avatar.png'
import { NuLink } from '../../components'
import { palette } from '../../themes'

export const HeaderBar = () => {
  const buttonMatches = useMediaQuery('(max-width:768px)')

  return (
    <Box
      sx={{
        paddingTop: { lg: '48px', sm: '40px', xs: '0px' },
      }}
    >
      <Container sx={{ padding: '0 16px' }}>
        <Grid
          container
          spacing={2}
          sx={{
            height: { lg: '630px', sm: '550px', xs: 'initial' },
            position: 'relative',
          }}
        >
          <Grid
            item
            sm={7}
            xs={12}
            sx={{
              padding: {
                lg: '100px 16px',
                sm: '16px 16px',
                xs: '4px 0px',
              },
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { lg: 62, md: 55, sm: 42, xs: 31 },
              }}
            >
              A college resource for neurondivergent and disabled students
            </Typography>
            <Typography variant="body1" mt={8}>
              We are a social and disability justice organization dedicated to
              advocating for disabled and neurodivergent students in higher
              education. We promote change across four pillars of accessibility,
              inclusion, safety, and critical pedagogy.
            </Typography>
            <Button
              sx={{
                background: '#8D6F01 !important',
                borderRadius: '8px',
                boxShadow: '0px 32px 44px rgba(0, 0, 0, 0.14)',
                color: palette.common.white,
                fontFamily: 'DM Sans',
                fontSize: { sm: 18, xs: 16 },
                fontStyle: 'normal',
                fontWeight: 700,
                letterSpacing: '0.75px',
                lineHeight: '32px',
                marginTop: '32px',
                padding: { sm: '8px 32px', xs: '8px 12px' },
                width: { sm: 'initial', xs: '100%' },
              }}
            >
              <NuLink
                to="/login"
                sx={{
                  color: 'white',
                  textTransform: 'capitalize',
                }}
              >
                {buttonMatches
                  ? 'Join the ND-U community'
                  : 'Join the NDU community now'}
              </NuLink>
              <ArrowForwardIosIcon
                sx={{
                  color: palette.common.white,
                  fontSize: '16px',
                  fontWeight: 700,
                  marginLeft: '16px',
                }}
              />
            </Button>
          </Grid>

          <Grid
            item
            sm={5}
            xs={12}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              paddingTop: { sm: 0, xs: '24px !important' },
            }}
          >
            <Box
              component="img"
              src={studentAvatar}
              alt="student avatar"
              sx={{
                bottom: 0,
                position: { sm: 'absolute', xs: 'initial' },
                right: 0,
                width: { sm: '40%', xs: '50%' },
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
