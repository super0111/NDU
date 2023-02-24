import { Box, Grid, Button } from '@mui/material'

import icon2 from '../../assets/images/Setting/Icons2.png'
import icon3 from '../../assets/images/Setting/Icons3.png'
import icon1 from '../../assets/images/Setting/lock.png'
import { NuFormInput } from '../../components/NuFormInput'

export const SaveInfoItem = () => {
  return (
    <Box>
      <Grid container spacing={7}>
        <Grid item sm={6} xs={12}>
          <NuFormInput
            inputProps={{
              placeholder: 'John Apple Seed',
            }}
            adornment={
              <Box
                component="img"
                src={icon1}
                alt="icon"
                sx={{
                  height: '20px',
                  width: '20px',
                }}
              />
            }
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <NuFormInput
            inputProps={{
              placeholder: 'Harvard University',
            }}
            adornment={
              <Box
                component="img"
                src={icon2}
                alt="icon"
                sx={{
                  height: '20px',
                  width: '20px',
                }}
              />
            }
          />
        </Grid>

        <Grid item sm={6} xs={12} mt={{ sm: 16, xs: 1 }}>
          <NuFormInput
            label="email"
            adornment={
              <Box
                component="img"
                src={icon3}
                alt="icon"
                sx={{
                  height: '20px',
                  width: '20px',
                }}
              />
            }
            inputProps={{
              placeholder: 'johnappleseed@mail.com',
            }}
            shrink
          />
        </Grid>

        <Grid item sm={6} xs={12} mt={{ sm: 16, xs: 1 }}>
          <NuFormInput
            label="Input field"
            adornment={
              <Box
                component="img"
                src={icon3}
                alt="icon"
                sx={{
                  height: '20px',
                  width: '20px',
                }}
              />
            }
            inputProps={{
              placeholder: 'Another editable input field',
            }}
            shrink
          />
        </Grid>
      </Grid>

      <Box display="flex" justifyContent="flex-end" mt={8}>
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
          Save changes
        </Button>
      </Box>
    </Box>
  )
}
