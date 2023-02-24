import { Typography, Container, Box, Button, styled } from '@mui/material'
import { Link } from 'react-router-dom'

import { NuFormControl } from '../../components/NuFormControl'
import { palette } from '../../themes'

export const LoginLink = styled(Link)(() => ({
  color: '#c95101',
  fontFamily: 'DM Sans',
  fontSize: '1rem',
  fontWeight: 200,
  lineHeight: 1.5,
  textDecoration: 'underline',
}))
export const Login = () => {
  return (
    <Container>
      <Box
        py={16}
        sx={{ '& > *': { width: '100%' }, margin: 'auto', maxWidth: 770 }}
      >
        <Typography variant="h2" mb={2}>
          Login
        </Typography>
        <Box>
          <NuFormControl label="Username or email" />
        </Box>
        <Box>
          <NuFormControl label="Password" />
        </Box>
        <Box display="flex" gap={2} mb={4}>
          <input type="checkbox" />
          <Typography
            variant="h4"
            sx={{
              color: palette.text.primary,
              fontSize: 16,
              fontWeight: 'bold',
            }}
          >
            Remember me
          </Typography>
        </Box>
        <Box mb={4}>
          <Button variant="contained">Sign In</Button>
        </Box>
        <Box display="flex" gap={4}>
          <LoginLink to="/reset">Forgot password? </LoginLink>|
          <LoginLink to="/register">Don't have an account</LoginLink>
        </Box>
      </Box>
    </Container>
  )
}
