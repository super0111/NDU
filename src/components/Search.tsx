import {
  Button,
  FormHelperText,
  OutlinedInput,
  FormControl,
  useMediaQuery,
} from '@mui/material'

import { palette } from '../themes'

export const Search = ({
  textStyle,
  buttonText,
  buttonStyle,
  placeholder1,
  placeholder2,
}: {
  placeholder1?: string
  placeholder2?: string
  textStyle?: Object
  buttonText?: string
  buttonStyle?: Object
}) => {
  const placeholderMatches = useMediaQuery('(max-width:426px)')

  return (
    <FormControl
      variant="outlined"
      sx={{
        width: '100%',
      }}
    >
      <OutlinedInput
        aria-describedby="outlined-weight-helper-text"
        placeholder={placeholderMatches ? placeholder2 : placeholder1}
        sx={{
          '& fieldset': { border: 'none' },
          background: palette.common.white,
          border: 'none !important',
          borderRadius: '16px',
          boxShadow: '0px 32px 44px rgba(0, 0, 0, 0.14)',
          color: palette.text.secondary,
          fontFamily: 'DM Sans',
          fontSize: '18px',
          lineHeight: '150%',
          padding: { sm: '12px', xs: '0' },
          ...textStyle,
        }}
      />
      <FormHelperText>
        <Button
          sx={{
            background: palette.primary.main,
            borderRadius: '8px',
            color: palette.primary.dark,
            fontFamily: 'DM Sans',
            fontSize: '18px',
            fontStyle: 'normal',
            fontWeight: 700,
            letterSpacing: '0.75px',
            lineHeight: '32px',
            padding: { sm: '15px 95px', xs: '5px 23px' },
            position: 'absolute',
            right: '10px',
            textTransform: 'none',
            top: { sm: '10px', xs: '8px' },
            ...buttonStyle,
          }}
        >
          {buttonText}
        </Button>
      </FormHelperText>
    </FormControl>
  )
}
