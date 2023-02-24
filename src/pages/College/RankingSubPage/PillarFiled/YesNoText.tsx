import { Button } from '@mui/material'

import { palette } from '../../../../themes'

const YesText = () => {
  return (
    <Button
      sx={{
        alignItems: 'center',
        background: '#94C804',
        borderRadius: '8px',
        color: `${palette.common.white} !important`,
        display: 'flex',
        fontFamily: 'DM Sans',
        fontSize: 12,
        fontWeight: 700,
        height: 'fit-content',
        justifyContent: 'center',
        lineHeight: '110%',
        minWidth: 'initial',
        padding: '8px 10px 7px 10px',
        width: 'fit-content',
      }}
    >
      YES
    </Button>
  )
}

const NoText = () => {
  return (
    <Button
      sx={{
        alignItems: 'center',
        background: palette.common.white,
        borderRadius: '8px',
        color: `${palette.common.black} !important`,
        display: 'flex',
        fontFamily: 'DM Sans',
        fontSize: 12,
        fontWeight: 700,
        height: 'fit-content',
        justifyContent: 'center',
        lineHeight: '110%',
        marginLeft: '4px',
        minWidth: 'initial',
        padding: '8px 10px 7px 10px',
        width: 'fit-content',
      }}
    >
      NO
    </Button>
  )
}
export { YesText, NoText }
