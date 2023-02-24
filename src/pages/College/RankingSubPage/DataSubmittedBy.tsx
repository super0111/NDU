import { Box, Typography } from '@mui/material'

import avatar from '../../../assets/images/Avatar.png'
import { palette } from '../../../themes'

export const DataSubmittedBy = () => {
  return (
    <Box
      py={1}
      pl={6}
      pr={1}
      display="flex"
      alignItems="center"
      sx={{
        backgroundColor: '#F3F5F6',
        borderRadius: '999px',
        width: 'fit-content',
      }}
    >
      <Typography
        variant="body1"
        sx={{
          color: palette.common.black,
          fontSize: { sm: 14, xs: 12 },
          wordBreak: { sm: '', xs: 'break-all' },
        }}
      >
        Data submitted by:
      </Typography>
      <Box
        display="flex"
        alignItems="center"
        py={1}
        pl={1}
        pr={2}
        ml={4}
        sx={{
          background: palette.common.white,
          borderRadius: '999px',
        }}
      >
        <Box
          component="img"
          src={avatar}
          alt="avatar"
          sx={{
            height: '30px',
            width: '30px',
          }}
        />
        <Typography
          variant="body1"
          ml={2}
          sx={{
            color: palette.common.black,
            fontSize: { sm: 14, xs: 12 },
          }}
        >
          Harvard_student02 smartypants
        </Typography>
      </Box>
    </Box>
  )
}
