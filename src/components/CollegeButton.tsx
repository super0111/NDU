import { Button } from '@mui/material'

import { palette } from '../themes'

export const CollegeButton = ({
  buttonTitle,
  buttonStyle,
  handleTooltipOpen,
}: {
  buttonTitle?: string
  buttonStyle?: Object
  handleTooltipOpen?: AnyFunction
}) => {
  return (
    <Button
      onClick={handleTooltipOpen}
      sx={{
        '&:hover': {
          backgroundColor: '#a48102',
        },
        backgroundColor: '#CA9F02',
        borderRadius: '8px',
        color: `${palette.common.white} !important`,
        fontFamily: 'DM Sans',
        fontSize: 14,
        fontWeight: 700,
        lineHeight: '17px',
        padding: '14px 20px',
        textTransform: 'initial',
        ...buttonStyle,
      }}
    >
      {buttonTitle}
    </Button>
  )
}
