import { TextField } from '@mui/material'

export const InputField = () => {
  return (
    <TextField
      id="textField"
      size="small"
      sx={{
        '& fieldset': {
          border: '2px solid #ced4da',
          borderRadius: '8px',
        },
        '& input': {
          color: '#012A4A',
          fontSize: '14px',
          fontWeight: 400,
          lineHeight: 1.5,
          padding: '12px 24px',
        },
        width: '100%',
      }}
    />
  )
}
