import { Box, Typography } from '@mui/material'

import { palette } from '../../../../themes'

import { NoText } from './YesNoText'

const Pillar2OpenBox = () => {
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
            width: { lg: '90%', xs: '80%' },
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
            Is there required diversity and inclusivity training for
            faculty/staff/and students, and does training include recognition of
            neurodivergence and disability?
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
            width: { lg: '10%', xs: '20%' },
          }}
        >
          <NoText />
        </Box>
      </Box>

      <Box
        mt={4}
        p={{ sm: 6, xs: 4 }}
        display="flex"
        alignItems="center"
        sx={{
          background: '#FFFAEB',
          borderRadius: '8px',
        }}
      >
        <Box
          sx={{
            width: '90%',
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
            Student-run peer support groups on campus?
          </Typography>
          <Box mt={2} display="flex" alignItems="center">
            <Typography
              mr={2}
              variant="body1"
              sx={{
                color: palette.text.primary,
                fontSize: 14,
              }}
            >
              Disability Cultural Center
            </Typography>
            <NoText />
          </Box>
          <Box mt={2} display="flex" alignItems="center">
            <Typography
              mr={2}
              variant="body1"
              sx={{
                color: palette.text.primary,
                fontSize: 14,
              }}
            >
              Mutual Aid Networks
            </Typography>
            <NoText />
          </Box>
          <Box mt={2} display="flex" alignItems="center">
            <Typography
              mr={2}
              variant="body1"
              sx={{
                color: palette.text.primary,
                fontSize: 14,
              }}
            >
              Peer Support Groups
            </Typography>
            <NoText />
          </Box>
          <Typography
            mt={2}
            variant="body1"
            sx={{
              color: palette.text.primary,
              fontSize: 14,
            }}
          >
            More information to be added here...
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Pillar2OpenBox
