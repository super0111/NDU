import { Box, Typography } from '@mui/material'

import { palette } from '../../themes'

export const Choices = () => {
  return (
    <Box mt={4}>
      <Typography
        variant="h4"
        sx={{
          color: palette.common.black,
        }}
      >
        11. YOUR CHOICES
      </Typography>
      <Typography
        variant="body1"
        mt={4}
        sx={{
          color: palette.common.black,
          fontSize: 16,
        }}
      >
        In certain circumstances providing Personal Data is optional. However,
        if you choose not to provide Personal Data that is needed to use some
        features of our Site, you may be unable to use those features. You can
        also contact us to ask us to update or correct your Personal Data.
      </Typography>
    </Box>
  )
}
