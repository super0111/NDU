import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Box, Typography } from '@mui/material'
import React from 'react'

import { palette } from '../../../../themes'

import Pillar3OpenBox from './Pillar3OpenBox'

const Pillar3 = () => {
  const [isPillar3Open, setIsPillar3Open] = React.useState(false)

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
            Pillar III
          </Typography>
          <Typography
            ml={4}
            variant="h3"
            sx={{
              color: palette.text.primary,
              fontFamily: 'Playfair Display',
              fontSize: { sm: 32, xs: 24 },
              fontWeight: 700,
              maxWidth: { sm: '80%', xs: '70%' },
            }}
          >
            Safety
          </Typography>
        </Box>
        <Box
          ml={4}
          onClick={() => setIsPillar3Open(!isPillar3Open)}
          sx={{
            cursor: 'pointer',
          }}
        >
          {isPillar3Open === false ? <ExpandMoreIcon /> : <ExpandLessIcon />}
        </Box>
      </Box>

      {isPillar3Open === true ? <Pillar3OpenBox /> : ''}
    </Box>
  )
}

export default Pillar3
