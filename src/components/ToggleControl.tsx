import { Box, Button } from '@mui/material'
import React from 'react'

export const ToggleControl = () => {
  const [isPublic, setIsPublic] = React.useState(false)

  return (
    <Box
      sx={{
        alignItems: 'center',
        border: '2px solid #CA9F02',
        borderRadius: '10px',
        display: 'flex',
      }}
    >
      <Button
        onClick={() => setIsPublic(true)}
        sx={{
          backgroundColor: isPublic === true ? '#CA9F02' : 'white',
          borderBottomRightRadius: '0px !important',
          borderRadius: '8px',
          borderTopRightRadius: '0px !important',
          color: isPublic === true ? '#CA9F02' : 'white',
          fontFamily: 'DM Sans',
          fontSize: 14,
          fontWeight: 700,
          lineHeight: '17px',
          padding: '12px 16px',
          textTransform: 'inherit',
        }}
      >
        Yes
      </Button>
      <Button
        onClick={() => setIsPublic(false)}
        sx={{
          backgroundColor: isPublic === false ? '#CA9F02' : 'white',
          borderBottomLeftRadius: '0px !important',
          borderRadius: '8px',
          borderTopLeftRadius: '0px !important',
          color: isPublic === false ? 'white' : '#CA9F02',
          fontFamily: 'DM Sans',
          fontSize: 14,
          fontWeight: 700,
          lineHeight: '17px',
          padding: '12px 16px',
          textTransform: 'inherit',
        }}
      >
        No
      </Button>
    </Box>

    // <ToggleButtonGroup
    //   value={alignment}
    //   exclusive
    //   onChange={handleAlignment}
    //   aria-label="text alignment"
    //   sx={{
    //     border: '2px solid #CA9F02',
    //     borderRadius: '8px',
    //   }}
    // >
    //   <ToggleButton
    //     value="yes"
    //     aria-label="left aligned"
    //     sx={{
    //       '&.Mui-selected, &.Mui-selected:hover': {
    //         backgroundColor: '#CA9F02',
    //         color: 'white',
    //       },
    //       color: '#CA9F02',
    //       fontFamily: 'DM Sans',
    //       fontSize: 14,
    //       fontWeight: 700,
    //       lineHeight: '17px',
    //       padding: '12px 16px',
    //       textTransform: 'inherit',
    //     }}
    //   >
    //     Yes
    //   </ToggleButton>
    //   <ToggleButton
    //     value="no"
    //     aria-label="right aligned"
    //     sx={{
    //       '&.Mui-selected, &.Mui-selected:hover': {
    //         backgroundColor: '#CA9F02',
    //         color: 'white',
    //       },
    //       color: '#CA9F02',
    //       fontFamily: 'DM Sans',
    //       fontSize: 14,
    //       fontWeight: 700,
    //       lineHeight: '17px',
    //       padding: '12px 16px',
    //       textTransform: 'inherit',
    //     }}
    //   >
    //     No
    //   </ToggleButton>
    // </ToggleButtonGroup>
  )
}
