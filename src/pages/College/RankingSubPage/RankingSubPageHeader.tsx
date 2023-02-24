import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { Container, Box, Typography, Breadcrumbs } from '@mui/material'

import HeaderBg from '../../../assets/images/Harvard Uni.png'
import { palette } from '../../../themes'

export const RankingSubPageHeader = ({ data }: { data: any }) => {
  const breadcrumbs = [
    <Typography
      key="1"
      variant="body1"
      sx={{
        color: '#F3F5F6',
        fontSize: 12,
        lineHeight: 'inherit',
      }}
    >
      Home
    </Typography>,
    <Typography
      key="2"
      variant="body1"
      sx={{
        color: '#F3F5F6',
        fontSize: 12,
      }}
    >
      Colleges
    </Typography>,
    <Typography
      key="2"
      variant="body1"
      sx={{
        color: '#CA9F02',
        fontSize: 12,
        textDecorationLine: 'underline !important',
      }}
    >
      {data?.name}
    </Typography>,
  ]

  return (
    <Box
      pt={{ lg: 44, md: 32, sm: 20, xs: 4 }}
      pb={6}
      px={{ lg: 0, sm: 20, xs: 2 }}
      sx={{
        backgroundImage: `url("${HeaderBg}")`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: { lg: '210px', md: '180px', sm: '160px', xs: '160px' },
      }}
    >
      <Container>
        <Typography
          variant="h1"
          mb={{ sm: 4, xs: 2 }}
          sx={{
            color: palette.common.white,
            fontFamily: 'Playfair Display',
            fontSize: { sm: 62, xs: 32 },
          }}
        >
          {data?.name}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: palette.common.white,
            fontSize: { sm: 18, xs: 12 },
            fontWeight: { sm: 700, xs: 400 },
          }}
        >
          Cambridge, State Super Long Name placeholder
        </Typography>

        <Box mt={{ sm: 2, xs: 0 }}>
          <Breadcrumbs
            separator={
              <NavigateNextIcon
                fontSize="small"
                sx={{ color: palette.common.white }}
              />
            }
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
        </Box>
      </Container>
    </Box>
  )
}
