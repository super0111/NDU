import { Box, TextField, Typography } from '@mui/material'

import { palette } from '../themes'

export const NuFormControl = ({
  label,
  textFieldStyle,
}: {
  label: string
  textFieldStyle?: any
}) => {
  return (
    <Box width="100%" mb={4}>
      <Typography
        variant="h4"
        sx={{ color: palette.text.primary, fontSize: 16, fontWeight: 'bold' }}
        mb={1}
      >
        {label}
      </Typography>
      <TextField sx={{ width: '100%', ...textFieldStyle }} />
    </Box>
  )
}
