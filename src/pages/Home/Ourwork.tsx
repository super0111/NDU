import { Container, Grid, Box, Typography } from '@mui/material'

import ourWorkImage from '../../assets/images/our work.png'
import { palette } from '../../themes'

export const Ourwork = () => {
  return (
    <Box
      sx={{
        background: palette.common.white,
      }}
    >
      <Container sx={{ padding: '96px 16px' }}>
        <Grid container spacing={8}>
          <Grid
            item
            md={4}
            sm={6}
            xs={12}
            sx={{
              alignItems: 'center',
              display: 'flex',
            }}
          >
            <Box
              component="img"
              src={ourWorkImage}
              alt="ourWork"
              sx={{
                border: '1px solid #F3F5F6',
                borderRadius: '16px',
                width: '100%',
              }}
            />
          </Grid>

          <Grid
            item
            md={8}
            sm={6}
            xs={12}
            sx={{
              margin: { md: '48px 0', sm: '-40px 0 0 0' },
            }}
          >
            <Box
              mb={8}
              sx={{
                borderTop: '4px solid #FF6464',
                width: '40px',
              }}
            />
            <Typography variant="h2" sx={{ color: '#2E2E46' }}>
              Our work
            </Typography>

            <Typography mt={4} variant="body1">
              We believe that universities can do better in creating safer, more
              accessible, and more inclusive spaces for us. We identify and rank
              those schools that provide the safest campuses for students using
              clear, precisely defined metrics. We also promote critical
              thinking about academia, neurodivergence, and disability.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
