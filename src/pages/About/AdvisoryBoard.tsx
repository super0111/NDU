import { Box, Grid, Typography } from '@mui/material'

import { palette } from '../../themes'

import { data as items } from './AdvisoryData'

export const AdvisoryBoard = () => {
  return (
    <Box>
      <Typography
        variant="h1"
        sx={{
          color: palette.text.primary,
          fontSize: { sm: '62px', xs: '42px' },
        }}
      >
        Advisory Board
      </Typography>

      <Box mt={{ sm: 14, xs: 8 }}>
        {items.map((item, i) => (
          <Grid
            key={i}
            container
            spacing={{ md: 6, sm: 4 }}
            direction={i % 2 !== 0 ? 'row-reverse' : 'row'}
            my={{ sm: 8, xs: 4 }}
          >
            <Grid
              item
              xs={12}
              mb={6}
              sx={{
                display: { sm: 'none', xs: 'block' },
              }}
            >
              <Typography variant="h4">{item.mainTitle}</Typography>
              <Typography variant="h4" mt={2}>
                {item.mainTitle}
              </Typography>
            </Grid>
            <Grid
              item
              md={3}
              sm={4}
              xs={12}
              sx={{ paddingTop: '0px !important' }}
            >
              <Box
                component="img"
                src={item.image}
                alt="AdvisoryBoardImage"
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
                  {item.imageDescription}
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              md={9}
              sm={8}
              xs={12}
              sx={{ paddingTop: '0px !important' }}
            >
              <Box p={4}>
                <Box
                  sx={{
                    display: { sm: 'block', xs: 'none' },
                  }}
                >
                  <Typography variant="h4" sx={{}}>
                    {item.mainTitle}
                  </Typography>
                  <Typography variant="h4" mt={2}>
                    {item.mainTitle}
                  </Typography>
                </Box>
                <Typography
                  variant="body1"
                  mt={{ sm: 4, xs: 0 }}
                  sx={{
                    color: palette.common.black,
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Box>
    </Box>
  )
}
