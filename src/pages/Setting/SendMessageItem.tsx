import ClearIcon from '@mui/icons-material/Clear'
import { Box, Button, styled } from '@mui/material'
import React from 'react'

import { palette } from '../../themes'
const Textarea = styled('textarea')(() => ({
  '&:focus': {
    border: `1px solid ${palette.primary.main}`,
    outline: 'none',
  },
  background: '#F3F5F6',
  border: '1px solid transparent',
  borderRadius: '12px',
  height: '112px',
  overflow: 'auto',
  padding: '20px',
  resize: 'none',
  width: '-webkit-fill-available',
}))

export const SendMessageItem = () => {
  const [messageValue, setMessageValue] = React.useState('')

  return (
    <Box mt={{ sm: 16, xs: 12 }}>
      <Textarea
        aria-label="textarea"
        placeholder="Write a message to administrator"
        onChange={(e) => setMessageValue(e.target.value)}
        value={messageValue}
      />
      <Box display="flex" justifyContent="flex-end" mt={4}>
        <Button
          type="submit"
          sx={{
            background: '#94C804',
            borderRadius: '8px',
            color: '#FCFCFC !important',
            fontFamily: 'DM Sans',
            fontSize: '13px',
            fontStyle: 'normal',
            fontWeight: 700,
            letterSpacing: '0.25px',
            lineHeight: '22px',
            padding: '9px 22px',
          }}
        >
          Send message
        </Button>
      </Box>
      <Box
        onClick={() => setMessageValue('')}
        sx={{
          cursor: 'pointer',
          position: 'absolute',
          right: '15px',
          top: '15px',
        }}
      >
        <ClearIcon
          sx={{
            color: '#97A3AF',
            fontSize: 18,
          }}
        />
      </Box>
    </Box>
  )
}
