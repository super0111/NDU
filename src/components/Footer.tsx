import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import { Container, Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import { palette } from '../themes'

const links = [
  { text: 'Home', url: '/home' },
  { text: 'Colleges', url: '/colleges' },
  { text: 'About', url: '/about' },
  { text: 'Updates', url: '/updates' },
]

export const Footer = () => {
  const goToTop = () => {
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
    })
  }
  return (
    <Box
      sx={{
        background: '#F3F5F6',
        padding: '50px 0',
      }}
    >
      <Container>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems={{ sm: 'center', xs: 'end' }}
        >
          <Box>
            <Box
              sx={{
                alignItems: { sm: 'center', xs: 'flex-start' },
                display: 'flex',
                flexDirection: { sm: 'row', xs: 'column' },
              }}
            >
              {links.map((item, i) => (
                <Box key={i} display="flex" alignItems="center">
                  <Link to={item.url} className="text-underline">
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'black !important',
                        fontSize: '16px',
                      }}
                    >
                      {item.text}
                    </Typography>
                  </Link>
                  <Box
                    sx={{
                      borderRight: '2px solid #5d5c5c',
                      display: i === 3 ? 'none' : 'block',
                      height: '15px',
                      margin: '0 10px',
                    }}
                  ></Box>
                </Box>
              ))}
            </Box>
            <Box
              sx={{
                alignItems: { sm: 'center', xs: 'flex-start' },
                display: 'flex',
                flexDirection: { sm: 'row', xs: 'column' },
                gap: { sm: '24px', xs: '32px' },
                marginTop: { sm: '24px', xs: '32px' },
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: 'black !important',
                  fontSize: 14,
                  fontWeight: 700,
                }}
              >
                Copyright © 2022 Neurodivergent-U
              </Typography>

              <Link to="/terms-of-use" className="text-underline">
                <Typography
                  variant="body1"
                  sx={{
                    color: 'black !important',
                    fontSize: 14,
                    fontWeight: 700,
                  }}
                >
                  Terms of Use
                </Typography>
              </Link>
              <Link to="/privacy-policy" className="text-underline">
                <Typography
                  variant="body1"
                  sx={{
                    color: 'black !important',
                    fontSize: 14,
                    fontWeight: 700,
                  }}
                >
                  Privacy Policy
                </Typography>
              </Link>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            onClick={goToTop}
            sx={{
              '&:hover': {
                background: '#dbdada',
              },
              background: palette.common.white,
              borderRadius: '4px',
              cursor: 'pointer',
              height: '30px',
              width: '30px',
            }}
          >
            <ArrowUpwardIcon fontSize="small" />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
