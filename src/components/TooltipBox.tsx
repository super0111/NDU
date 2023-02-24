import { Box, Typography, Button } from '@mui/material'
import React from 'react'

import { palette } from '../themes'

export const TooltipBox = ({ tooltipText }: { tooltipText: string }) => {
  return (
    <Box sx={{}}>
      <Typography
        variant="body1"
        sx={{
          backgroundColor: '#f7f7f7',
          borderTopLeftRadius: '16px',
          borderTopRightRadius: '16px',
          color: palette.common.black,
          fontSize: 16,
          fontWeight: 700,
          padding: '8px',
        }}
      >
        {tooltipText}
      </Typography>

      <Box display="flex" justifyContent="center" alignItems="center" my={2}>
        <Button
          sx={{
            backgroundColor: '#CA9F02',
            borderBottomRightRadius: '0px',
            borderRadius: '5px',
            borderTopRightRadius: '0px',
            color: `${palette.common.white} !important`,
            fontFamily: 'DM Sans',
            fontSize: 14,
            fontWeight: 700,
            minWidth: '45px',
            padding: '4px 2px',
            textTransform: 'initial',
          }}
        >
          Yes
        </Button>
        <Button
          sx={{
            backgroundColor: '#91BED4',
            borderBottomLeftRadius: '0px',
            borderRadius: '5px',
            borderTopLeftRadius: '0px',
            color: `${palette.common.white} !important`,
            fontFamily: 'DM Sans',
            fontSize: 14,
            fontWeight: 700,
            minWidth: '45px',
            padding: '4px 2px',
            textTransform: 'initial',
          }}
        >
          No
        </Button>
      </Box>
    </Box>
  )
}
