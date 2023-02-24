import { Container, Box, Grid, Typography } from '@mui/material'

import { palette } from '../../../themes'

const items = [
  { text: 'Undergraduate students', value: 6099 },
  { text: 'Withdrawal rate', value: 1 },
  { text: 'Annual tuition', value: 55473 },
  { text: 'Diversity Index', value: 0.36 },
]

export const UniversityDetails = () => {
  return (
    <Container>
      <Box
        mt={6}
        px={{ lg: 0, sm: 20, xs: 1 }}
        sx={{
          marginTop: { lg: '-64px', md: '-30px', sm: '-20px', xs: '-80px' },
        }}
      >
        <Grid
          container
          spacing={0}
          direction={{ lg: 'row', xs: 'column-reverse' }}
          p={{ lg: 0, sm: 5, xs: 2 }}
          sx={{
            background: { lg: 'none', xs: palette.common.white },
            borderRadius: { lg: 0, xs: '8px' },
            boxShadow: { lg: 'none', xs: '0px 8px 20px rgba(0, 0, 0, 0.08)' },
            margin: '0px !important',
          }}
        >
          <Grid item lg={10} xs={12} sx={{}}>
            <Box
              px={{ lg: 5, xs: 2 }}
              pt={{ lg: 5, xs: 2 }}
              pb={{ lg: 5, xs: 0 }}
              sx={{
                backgroundColor: palette.common.white,
                borderRadius: '8px',
                boxShadow: {
                  lg: '0 0.5rem 1rem rgb(0 0 0 / 15%) !important',
                  xs: '',
                },
              }}
            >
              <Grid container spacing={2}>
                {items.map((item, i) => (
                  <Grid
                    key={i}
                    item
                    lg={3}
                    xs={12}
                    sx={{
                      margin: '0px !important',
                      padding: { lg: '10px !important', xs: '8px !important' },
                    }}
                  >
                    <Box
                      py={{ sm: 0, xs: 2 }}
                      sx={{
                        alignItems: {
                          lg: 'initial',
                          sm: 'center',
                          xs: 'initial',
                        },
                        borderBottom:
                          i === 3
                            ? ''
                            : { sm: '', xs: '1px solid #eceeef !important' },
                        borderRight:
                          i === 3
                            ? ''
                            : { lg: '1px solid #eceeef !important', xs: '' },
                        display: 'flex',
                        flexDirection: {
                          lg: 'column',
                          sm: 'row',
                          xs: 'column',
                        },
                        paddingBottom: {
                          lg: '0px !important',
                          xs: '8px !important',
                        },
                        width: { lg: '90%', xs: '100%' },
                      }}
                    >
                      <Typography
                        variant="h2"
                        mb={{ lg: 1, xs: 0 }}
                        mr={{ lg: 0, xs: 4 }}
                        sx={{
                          color: '#CA9F02 !important',
                          fontSize: { lg: 42, sm: 32, xs: 22 },
                        }}
                      >
                        {i === 2 ? '$' : ''}
                        {i === 3
                          ? new Intl.NumberFormat(navigator.language, {
                              minimumFractionDigits: 1,
                            }).format(item.value)
                          : new Intl.NumberFormat().format(item.value)}
                        {i === 1 ? '%' : ''}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: palette.common.black,
                          fontSize: 14,
                        }}
                      >
                        {item.text}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>

          <Grid
            item
            lg={2}
            xs={12}
            pl={{ lg: 8, sm: 4, xs: 0 }}
            mt={{ sm: 0 }}
            sx={{
              paddingLeft: { lg: '16px !important', xs: '0px !important' },
            }}
          >
            <Box
              p={{ lg: 5, xs: 2 }}
              sx={{
                alignItems: { lg: 'initial', xs: 'center' },
                backgroundColor: { lg: palette.common.white, xs: '#F3F5F6' },
                borderRadius: { lg: '8px', xs: '8px' },
                boxShadow: {
                  lg: '0 0.5rem 1rem rgb(0 0 0 / 15%) !important',
                  xs: '',
                },
                display: 'flex',
                flexDirection: { lg: 'column', xs: 'flex' },
              }}
            >
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                mr={{ lg: 0, xs: 2 }}
                sx={{
                  backgroundColor: '#EEB902 !important',
                  borderRadius: '50%',
                  flexShrink: 0,
                  height: { lg: '56px', sm: '40px', xs: '32px' },
                  width: { lg: '56px', sm: '40px', xs: '32px' },
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: palette.common.black,
                    fontSize: { lg: 28, sm: 22, xs: 18 },
                  }}
                >
                  C-
                </Typography>
              </Box>

              <Typography
                variant="body1"
                sx={{
                  color: palette.common.black,
                  fontFamily: 'Raleway',
                  fontSize: { sm: 14, xs: 12 },
                  marginTop: { lg: '10px', xs: 0 },
                }}
              >
                Score: <strong>900/1000</strong>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}
