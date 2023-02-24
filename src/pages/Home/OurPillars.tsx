import { Container, Grid, Box, Typography, Button } from '@mui/material'

import vector1 from '../../assets/images/Vector1.png'
import vector2 from '../../assets/images/Vector2.png'
import vector3 from '../../assets/images/Vector3.png'
import vector4 from '../../assets/images/Vector4.png'
import { palette } from '../../themes'

const ourPillars = [
  {
    bg: '#FEE486',
    icon: vector1,
    text: 'We work to remove gatekeeping and institutional barriers to disabled students.',
    title: '1. Support & Accessibility',
  },
  {
    bg: '#DDFD87',
    icon: vector2,
    text: 'We support increased visibility of neurodivergent and disabled cultures on college campuses.',
    title: '2. Inclusion',
  },
  {
    bg: '#FEB485',
    icon: vector3,
    text: 'We stand against stigmatization, discrimination, surveillance, and policing of neurodivergent students.',
    title: '3. Safety',
  },
  {
    bg: '#86CCFE',
    icon: vector4,
    text: 'We believe that education should be empowering and must be de-corporatized.',
    title: '4. Critical Pedagogy',
  },
]

export const OurPillars = () => {
  return (
    <Box
      sx={{
        background: palette.common.white,
      }}
    >
      <Container
        sx={{
          padding: '110px 16px 95px 16px',
        }}
      >
        <Typography variant="h2" sx={{ textAlign: 'center' }}>
          Our Pillars
        </Typography>
        <Grid container spacing={6} mt={8}>
          {ourPillars.map((item, i) => (
            <Grid key={i} item lg={3} md={3} sm={6} xs={12}>
              <Box
                sx={{
                  '&:hover': {
                    boxShadow: '0px 14px 20px rgba(0, 0, 0, 0.24)',
                  },
                  background: '#FFFFFF',
                  border: '1px solid #F3F5F6',
                  borderRadius: '16px',
                  height: {
                    lg: '320px',
                    md: '350px',
                    sm: '270px',
                    xs: 'initial',
                  },
                  padding: '24px 28px',
                  position: 'relative',
                }}
              >
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  mb={4}
                  sx={{
                    background: item.bg,
                    borderRadius: '8px',
                    height: '60px',
                    width: '60px',
                  }}
                >
                  <Box
                    component="img"
                    src={item.icon}
                    alt="icon"
                    sx={{ height: '24px', width: '24px' }}
                  />
                </Box>
                <Typography
                  variant="body1"
                  mb={2}
                  sx={{
                    color: '#3E4751',
                    fontWeight: 700,
                    maxWidth: '90%',
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#596673',
                  }}
                >
                  {item.text}
                </Typography>

                <Button
                  variant="contained"
                  sx={{
                    borderRadius: '8px',
                    bottom: '24px',
                    fontSize: '13px !important',
                    letterSpacing: '0.25px',
                    lineHeight: '22px',
                    marginTop: { xs: '35px' },
                    padding: '9px 22px',
                    position: { sm: 'absolute', xs: 'initial' },
                  }}
                >
                  Learn more
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
