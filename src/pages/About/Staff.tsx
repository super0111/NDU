import { Box, Grid, Typography } from '@mui/material'

import StaffImage from '../../assets/images/About/bowen-headshot.jpeg'
import { palette } from '../../themes'

export const Staff = () => {
  return (
    <Box
      p={6}
      sx={{
        background: '#F3F5F6',
        borderRadius: '16px',
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: palette.text.primary,
          fontSize: { sm: '62px', xs: '42px' },
        }}
      >
        Staff
      </Typography>

      <Grid container spacing={2} pt={6}>
        <Grid
          item
          xs={12}
          mb={6}
          sx={{
            display: { sm: 'none', xs: 'block' },
          }}
        >
          <Typography variant="h4">Bowen Cho</Typography>
          <Typography variant="h4" my={2}>
            Project Leader
          </Typography>
        </Grid>
        <Grid item md={3} sm={4} xs={12}>
          <Box
            component="img"
            src={StaffImage}
            alt="fameImage"
            sx={{ width: '100%' }}
          />
          <Box
            p={4}
            my={3}
            sx={{
              background: '#E8EBED',
              borderRadius: '4px',
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: palette.text.secondary,
                fontSize: '12px',
              }}
            >
              Image description: Bowen is an Asian person standing in front of
              an ancient, stone facade in Petra, Jordan. They are wearing a dark
              brown jacket over a grey linen shirt. They have black hair, which
              is cropped and faded at the sides.
            </Typography>
          </Box>
        </Grid>
        <Grid item md={8} sm={6} xs={12}>
          <Box
            p={4}
            sx={{
              background: '#FDFDFD',
              borderRadius: '4px',
              height: '92.4%',
            }}
          >
            <Box
              sx={{
                display: { sm: 'block', xs: 'none' },
              }}
            >
              <Typography variant="h4">Bowen Cho</Typography>
              <Typography variant="h4" my={2}>
                Project Leader
              </Typography>
            </Box>
            <Typography
              variant="body1"
              my={4}
              sx={{
                color: palette.common.black,
              }}
            >
              Bowen (pronouns: they/them) is currently a student at University
              at Buffalo, pursuing a second BA in Bioinformatics and
              Computational Biology. They identify as queer, neurodivergent, and
              disabled. Bowen received a BA from Columbia University. They also
              studied political and evolutionary psychology at SUNY Stony Brook,
              where they finished an MA. Bowen is the cofounder of NDU.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
