import { Box, Typography } from '@mui/material'

import { palette } from '../../../../themes'

import { NoText } from './YesNoText'

const Pillar3OpenBox = () => {
  return (
    <Box mt={8}>
      <Box
        mt={4}
        p={{ sm: 6, xs: 4 }}
        display="flex"
        alignItems={{ sm: 'center', xs: 'stretch' }}
        sx={{
          background: '#FFFAEB',
          borderRadius: '8px',
        }}
      >
        <Box
          sx={{
            width: { ms: '80%', xs: '90%' },
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: palette.text.primary,
              fontSize: 16,
              fontWeight: 700,
            }}
          >
            Have you experienced ableism, discrimination, or witnessed
            stigmatizing language on campus or on the college website?
          </Typography>

          <Typography
            mt={4}
            variant="body1"
            sx={{
              color: palette.text.primary,
              fontSize: 14,
            }}
          >
            More information to be added here...
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="end"
          sx={{
            width: { md: '20%', xs: '20%' },
          }}
        >
          <NoText />
        </Box>
      </Box>

      <Box
        mt={4}
        p={{ sm: 6, xs: 4 }}
        display="flex"
        alignItems={{ sm: 'center', xs: 'stretch' }}
        sx={{
          background: '#FFFAEB',
          borderRadius: '8px',
        }}
      >
        <Box
          sx={{
            width: { ms: '80%', xs: '90%' },
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: palette.text.primary,
              fontSize: 16,
              fontWeight: 700,
            }}
          >
            Are police involved in responding to student mental health crises?
          </Typography>

          <Typography
            mt={4}
            variant="body1"
            sx={{
              color: palette.text.primary,
              fontSize: 14,
            }}
          >
            More information to be added here...
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="end"
          sx={{
            width: { md: '20%', xs: '20%' },
          }}
        >
          <NoText />
        </Box>
      </Box>

      <Box
        mt={4}
        p={{ sm: 6, xs: 4 }}
        display="flex"
        flexDirection={{ sm: 'row', xs: 'column' }}
        alignItems={{ sm: 'center', xs: 'start' }}
        sx={{
          background: '#FFFAEB',
          borderRadius: '8px',
        }}
      >
        <Box width="80%">
          <Typography
            variant="body1"
            sx={{
              color: palette.text.primary,
              fontSize: 16,
              fontWeight: 700,
            }}
          >
            Have you experienced ableism, discrimination, or seen/heard
            stigmatizing language on campus or the college website?
          </Typography>

          <Typography
            mt={4}
            variant="body1"
            sx={{
              color: palette.text.primary,
              fontSize: 14,
            }}
          >
            More information to be added here...
          </Typography>
        </Box>
        <Box
          mt={{ sm: 0, xs: 2 }}
          display="flex"
          justifyContent="end"
          width={{ lg: '20%', sm: '80%' }}
        >
          <Typography
            variant="body1"
            px={3}
            py={2}
            sx={{
              alignItems: 'center',
              background: '#94C804',
              borderRadius: '8px',
              color: palette.common.white,
              display: 'flex',
              fontSize: 14,
              fontWeight: 700,
              justifyContent: 'center',
              lineHeight: '110%',
            }}
          >
            YES
            <span
              style={{
                fontSize: 12,
                fontWeight: 400,
                marginLeft: '3px',
                marginTop: '3px',
              }}
            >
              Allows anonymous reporting
            </span>
          </Typography>
        </Box>
      </Box>

      <Box
        mt={4}
        p={{ sm: 6, xs: 4 }}
        display="flex"
        alignItems={{ sm: 'center', xs: 'stretch' }}
        sx={{
          background: '#FFFAEB',
          borderRadius: '8px',
        }}
      >
        <Box
          sx={{
            width: '80%',
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: palette.text.primary,
              fontSize: 16,
              fontWeight: 700,
            }}
          >
            Clery Report data: Number of sexual assaults reported on campus per
            thousand students.
          </Typography>

          <Typography
            mt={4}
            variant="body1"
            sx={{
              color: palette.text.primary,
              fontSize: 14,
            }}
          >
            More information to be added here...
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="end"
          sx={{
            width: '20%',
          }}
        >
          <Typography
            variant="body1"
            px={3}
            py={2}
            sx={{
              alignItems: 'center',
              background: '#94C804',
              borderRadius: '8px',
              color: palette.common.white,
              display: 'flex',
              fontSize: 12,
              fontWeight: 700,
              height: 'fit-content',
              justifyContent: 'center',
              lineHeight: '110%',
              width: 'fit-content',
            }}
          >
            004
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Pillar3OpenBox
