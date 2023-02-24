import { Container, Box, Button, Typography } from '@mui/material'

import { NuFormControl } from '../../components/NuFormControl'
import { palette } from '../../themes'
import { LoginLink } from '../Login'

export const Reset = () => {
  return (
    <Container>
      <Box py={16}>
        <Typography variant="h2" mb={2}>
          Forgot Your Password
        </Typography>
        <Box>
          <NuFormControl label="Username or email"></NuFormControl>
        </Box>
        <Box mb={4}>
          <Button variant="contained">Submit</Button>
        </Box>
        <Box mb={4}>
          <Typography
            variant="body2"
            sx={{
              color: palette.text.primary,
              fontSize: 16,
              textDecoration: 'none',
            }}
          >
            Enter your username or email address and we will send you
            instructions on how to create a new password.
          </Typography>
        </Box>
        <Box>
          <LoginLink to="/login">Back to Login</LoginLink>
        </Box>
      </Box>
    </Container>
  )
}
