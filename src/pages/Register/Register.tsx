import { Typography, Container, Box, Button, styled } from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import React from 'react'

import { NuFormControl } from '../../components/NuFormControl'
import { palette } from '../../themes'

const Textarea = styled('textarea')(() => ({
  '&:focus': {
    border: `1px solid ${palette.primary.main}`,
    outline: 'none',
  },
  background: 'none',
  border: '1px solid #b6b6b6',
  borderRadius: '16px',
  height: '112px',
  overflow: 'auto',
  padding: '20px',
  resize: 'none',
  width: '-webkit-fill-available',
}))

export const Register = () => {
  const [messageValue, setMessageValue] = React.useState('')

  const top100Films = [
    { label: 'college1' },
    { label: 'college2' },
    { label: 'college3' },
    { label: 'college4' },
  ]

  return (
    <Container>
      <Box
        py={16}
        sx={{ '& > *': { width: '100%' }, margin: 'auto', maxWidth: 770 }}
      >
        <Typography variant="h2" mb={2}>
          Register
        </Typography>
        <Typography
          variant="body1"
          mt={4}
          mb={2}
          sx={{
            color: 'black',
            fontSize: 16,
          }}
        >
          You may register with any email account, but we recommend that you use
          your .edu address for faster verification. An email will be sent to
          the addres you provide to complete verification.
        </Typography>
        <Box>
          <NuFormControl label="Email" />
        </Box>
        <Box>
          <NuFormControl label="Username" />
        </Box>
        <Box width="100%" mb={4}>
          <Typography
            variant="h4"
            sx={{
              color: palette.text.primary,
              fontSize: 16,
              fontWeight: 'bold',
            }}
            mb={1}
          >
            College
          </Typography>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{
              '& input': {
                color: palette.text.primary,
                fontSize: 16,
              },
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </Box>
        <Box>
          <NuFormControl label="Password" />
        </Box>
        <Box>
          <NuFormControl label="Confirm password" />
        </Box>
        <Typography
          variant="body1"
          mt={2}
          mb={4}
          sx={{
            color: 'black',
            fontSize: 16,
          }}
        >
          Registering on this site allows you to submit and edit data about your
          college. Please tell us a little about why you want to register on the
          site.
        </Typography>
        <Textarea
          aria-label="textarea"
          onChange={(e) => setMessageValue(e.target.value)}
          value={messageValue}
        />
        <Box mt={6} mb={4}>
          <Button variant="contained">Register</Button>
        </Box>
      </Box>
    </Container>
  )
}
