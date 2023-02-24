import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Grid, Box, Typography } from '@mui/material'
import React from 'react'

import { palette } from '../../../../themes'

import Pillar1OpenBox from './Pillar1OpenBox'

const items = [
  { text: 'Time between classes', time: 15, unit: 'minutes' },
  { text: 'Wait time for counseling appointment', time: 1, unit: 'month' },
  {
    text: 'Number of counselors on staff per thousand students',
    time: 20,
    unit: '',
  },
]

const Pillar1 = () => {
  const [isPillar1sOpen, setIsPillar1sOpen] = React.useState(false)

  return (
    <Box mb={8} display="flex" flexDirection="column">
      <Grid
        container
        spacing={2}
        display="flex"
        flexDirection={{ lg: 'row', xs: 'column' }}
        alignItems={{ lg: 'center', xs: 'initial' }}
      >
        <Grid
          item
          lg={3}
          xs={12}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box
            display={{ lg: 'initial', xs: 'flex' }}
            flexDirection={{ sm: 'row', xs: 'column' }}
            alignItems={{ sm: 'center', xs: 'flex-start' }}
            mb={{ lg: 0, xs: 4 }}
          >
            <Typography
              variant="h2"
              sx={{
                color: palette.primary.light,
                fontSize: { sm: 48, xs: 32 },
              }}
            >
              Pillar I
            </Typography>
            <Typography
              variant="h3"
              ml={{ lg: 0, sm: 2, xs: 0 }}
              sx={{
                color: palette.text.primary,
                fontFamily: 'Playfair Display',
                fontSize: { sm: 32, xs: 24 },
                fontWeight: 700,
                maxWidth: { sm: '80%', xs: '70%' },
              }}
            >
              Accessibility and Support
            </Typography>
          </Box>
          <Box
            ml={4}
            mt={{ lg: 0, xs: 4 }}
            onClick={() => setIsPillar1sOpen(!isPillar1sOpen)}
            sx={{
              cursor: 'pointer',
              display: { lg: 'none', xs: 'block' },
            }}
          >
            {isPillar1sOpen === false ? <ExpandMoreIcon /> : <ExpandLessIcon />}
          </Box>
        </Grid>
        <Grid item lg={9} xs={12}>
          <Box display="flex" flexDirection="row" alignItems="center">
            <Box
              sx={{
                width: { lg: '95%', xs: '100%' },
              }}
            >
              <Grid
                container
                spacing={2}
                py={4}
                sx={{
                  background: '#FFFFFF',
                  borderRadius: '8px',
                  boxShadow: '0px 16px 44px rgba(0, 0, 0, 0.08)',
                }}
              >
                {items.map((item, i) => (
                  <Grid
                    key={i}
                    item
                    sm={4}
                    xs={12}
                    sx={{
                      borderBottom:
                        i === 2 ? '' : { sm: '', xs: '1px solid #E8EBED' },
                      borderRight:
                        i === 2 ? '' : { sm: '1px solid #E8EBED', xs: '' },
                    }}
                  >
                    <Box pl={2} pb={2}>
                      <Typography
                        variant="h2"
                        sx={{
                          color: palette.primary.light,
                          fontSize: { sm: 40, xs: 24 },
                        }}
                      >
                        {item.time}
                        <span
                          style={{
                            color: palette.primary.light,
                            fontSize: 14,
                            marginLeft: '5px',
                          }}
                        >
                          {item.unit}
                        </span>
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: palette.text.primary,
                          fontSize: 14,
                          maxWidth: { lg: '80%', xs: '100%' },
                        }}
                      >
                        {item.text}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>

            <Box
              ml={4}
              mt={{ lg: 0, xs: 4 }}
              onClick={() => setIsPillar1sOpen(!isPillar1sOpen)}
              sx={{
                cursor: 'pointer',
                display: { lg: 'block', xs: 'none' },
              }}
            >
              {isPillar1sOpen === false ? (
                <ExpandMoreIcon />
              ) : (
                <ExpandLessIcon />
              )}
            </Box>
          </Box>
        </Grid>
      </Grid>
      {isPillar1sOpen === true ? <Pillar1OpenBox /> : ''}
    </Box>
  )
}

export default Pillar1
