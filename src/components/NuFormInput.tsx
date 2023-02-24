import {
  FormControl,
  InputLabel,
  FilledInput,
  InputAdornment,
  IconButton,
} from '@mui/material'

import { palette } from '../themes'

export const NuFormInput = ({
  label,
  adornment,
  shrink,
  inputProps,
  sx,
}: {
  label?: string
  adornment: React.ReactNode
  shrink?: boolean
  inputProps?: object
  sx?: object
}) => {
  return (
    <FormControl
      sx={{
        m: 1,
        width: '100%',
      }}
      variant="filled"
      hiddenLabel
    >
      {label && (
        <InputLabel
          sx={{ fontSize: 15 }}
          htmlFor="outlined-adornment-password"
          shrink={shrink}
        >
          {label}
        </InputLabel>
      )}
      <FilledInput
        id="outlined-adornment-password"
        type={'text'}
        inputProps={{
          style: {
            fontSize: 15,
            paddingTop: label ? 24 : 18,
          },
          ...inputProps,
        }}
        sx={{
          '& input::placeholder': {
            fontSize: 15,
            // color: 'red',
          },
          '&.Mui-focused': {
            border: `1px solid ${palette.primary.main}`,
          },
          '&:before, &:after, &:hover:not(.Mui-disabled, .Mui-error):before': {
            border: 'none !important',
            borderBottom: 'none',
          },
          border: '1px solid transparent',
          borderRadius: '8px',
          fontSize: 15,
          ...sx,
        }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton aria-label="toggle password visibility" edge="end">
              {adornment}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  )
}
