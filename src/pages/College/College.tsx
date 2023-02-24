import { Box, Button, Container, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { OutlinedSearch } from '../../components'
import { palette } from '../../themes'

import { CollegeRankingList } from './CollegeRankingList'

export const College = () => {
  const navigate = useNavigate()
  return (
    <Box
      pt={8}
      pb={{ sm: 10, xs: 8 }}
      sx={{
        background: '#FCFAF4',
      }}
    >
      <Container>
        <Typography
          variant="h1"
          sx={{
            color: palette.text.primary,
            fontFamily: 'Playfair Display',
            fontSize: { sm: 48, xs: 32 },
            lineHeight: '110%',
          }}
        >
          The Rankings
        </Typography>
        <Typography
          variant="body1"
          my={{ sm: 4, xs: 2 }}
          sx={{
            color: palette.text.primary,
            fontSize: { sm: 17, xs: 16 },
            fontWeight: 500,
          }}
        >
          This is an ongoing project. If you don’t see your school listed,
          please register to become a contributor.
        </Typography>

        <Box
          mt={{ sm: 8, xs: 5 }}
          sx={{
            width: { md: '75%', xs: '100%' },
          }}
        >
          <OutlinedSearch />
        </Box>

        <CollegeRankingList />

        <Box mt={1}>
          <Button
            onClick={() => navigate('/create-college')}
            sx={{
              '&:hover': {
                backgroundColor: '#94C804',
                color: 'white !important',
              },
              backgroundColor: 'transparent',
              border: '2px solid #94C804',
              borderRadius: '8px',
              color: '#94C804 !important',
              fontFamily: 'DM Sans',
              fontSize: 14,
              fontWeight: 700,
              lineHeight: '17px',
              padding: '12px 22px',
              textTransform: 'initial',
            }}
          >
            Create College
          </Button>
        </Box>
      </Container>
    </Box>
  )
}
