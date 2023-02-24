import { Box, Typography } from '@mui/material'

import icon4 from '../../../assets/images/4 years college.png'
import icon1 from '../../../assets/images/Large Campus.png'
import icon5 from '../../../assets/images/lcoation.png'
import icon2 from '../../../assets/images/Private Uni.png'
import icon3 from '../../../assets/images/Rural college.png'
import { palette } from '../../../themes'

const items = [
  { icon: icon1, text: 'Large Campus' },
  { icon: icon2, text: 'Private University' },
  { icon: icon3, text: 'Rural College' },
  { icon: icon4, text: '4 yesrs College' },
  { icon: icon5, text: 'Northeast Location' },
]

export const CollegeType = () => {
  return (
    <Box
      mt={{ sm: 16, xs: 6 }}
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexWrap: { sm: 'initial', xs: 'wrap' },
        justifyContent: { lg: 'initial', sm: 'space-between', xs: 'initial' },
      }}
    >
      {items.map((item, i) => (
        <Box
          key={i}
          my={{ sm: 0, xs: 2 }}
          sx={{
            alignItems: { sm: 'initial', xs: 'flex-start' },
            display: { sm: 'initial', xs: 'flex' },
            flexDirection: { sm: 'initial', xs: 'column' },
            paddingLeft: i === 0 ? '' : { lg: '20px', sm: '35px', xs: '10px' },
            width: { lg: '10%', sm: 'initial', xs: '31%' },
          }}
        >
          <Box component="img" src={item.icon} alt="icon" />
          <Typography
            variant="h4"
            sx={{
              color: palette.text.primary,
              fontFamily: 'Playfair Display',
              fontSize: { sm: 16, xs: 14 },
              textAlign: { sm: 'initial', xs: 'left' },
              width: { lg: '50%', sm: '70%', xs: '50%' },
            }}
          >
            {item.text}
          </Typography>
        </Box>
      ))}
    </Box>
  )
}
