import { Typography, Container, Box, Button } from '@mui/material'

import { NuFormControl } from '../../components/NuFormControl'
import { palette } from '../../themes'

const textFieldStyle = {
  '& fieldset': { borderRadius: '8px' },
  '& input': { padding: '10px !important' },
}

export const CreatCollege = () => {
  return (
    <Container>
      <Box py={6} sx={{ width: { sm: '70%', xs: '100%' } }}>
        <Typography
          variant="h2"
          mb={4}
          sx={{
            color: palette.common.black,
            fontSize: { sm: 40, xs: 32 },
          }}
        >
          Create New College/University
        </Typography>
        <Box my={1}>
          <NuFormControl label="Name" textFieldStyle={textFieldStyle} />
        </Box>
        <Box my={1}>
          <NuFormControl label="City" textFieldStyle={textFieldStyle} />
        </Box>
        <Box my={1}>
          <NuFormControl label="State" textFieldStyle={textFieldStyle} />
        </Box>
        <Box mb={4}>
          <Button
            variant="contained"
            sx={{
              textTransform: 'initial',
            }}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Container>
  )
}
