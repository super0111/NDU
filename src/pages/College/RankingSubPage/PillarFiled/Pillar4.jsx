import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Box, Typography } from '@mui/material'
import React from 'react'

import { palette } from '../../../../themes'

import Pillar4OpenBox from './Pillar4OpenBox'

const Pillar4 = () => {
  const [isPillar4Open, setIsPillar4Open] = React.useState(false)

  return (
    <Box my={8}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" alignItems="end">
          <Typography
            variant="h2"
            sx={{
              color: palette.primary.light,
              fontSize: { sm: 48, xs: 32 },
              lineHeight: { sm: '46px', xs: '29px' },
            }}
          >
            Pillar IV
          </Typography>
          <Typography
            ml={{ sm: 4, xs: 2 }}
            variant="h3"
            sx={{
              color: palette.text.primary,
              fontFamily: 'Playfair Display',
              fontSize: { sm: 32, xs: 24 },
              fontWeight: 700,
              maxWidth: { sm: '80%', xs: '100%' },
            }}
          >
            Critical Pedagogy
          </Typography>
        </Box>
        <Box
          ml={4}
          onClick={() => setIsPillar4Open(!isPillar4Open)}
          sx={{
            cursor: 'pointer',
          }}
        >
          {isPillar4Open === false ? <ExpandMoreIcon /> : <ExpandLessIcon />}
        </Box>
      </Box>

      {isPillar4Open === true ? <Pillar4OpenBox /> : ''}
    </Box>
  )
}

export default Pillar4
