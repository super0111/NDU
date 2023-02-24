import { Box, Typography } from '@mui/material'

import { palette } from '../../../../themes'

import { NoText, YesText } from './YesNoText'

const Pillar1OpenBox = () => {
  return (
    <Box mt={{ sm: 8, xs: 4 }}>
      <Box
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
              maxWidth: '85%',
            }}
          >
            Are all campus buildings physically accessible to students who use
            wheelchairs or other mobility aids?
          </Typography>
          <Typography
            mt={2}
            variant="body1"
            sx={{
              color: palette.text.primary,
              fontSize: 14,
              maxWidth: { lg: 'initial', sm: '100%', xs: '80%' },
            }}
          >
            (Note to Lesley: I'm thinking maybe we can use more graphics in the
            following sections to represent the presence or a absence of a
            metric, instead of using "Yes" "No")
          </Typography>
          <Typography
            mt={2}
            variant="body1"
            sx={{
              color: palette.text.primary,
              fontSize: 14,
              maxWidth: { lg: 'initial', xs: '90%' },
            }}
          >
            More information to be added here...
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="end"
          sx={{
            width: { md: '20%', xs: '10%' },
          }}
        >
          <YesText />
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
            width: { ms: '80%', xs: '90%' },
          }}
        >
          <Box
            display="flex"
            flexDirection={{ lg: 'row', xs: 'column' }}
            alignItems={{ lg: 'center', xs: 'initial' }}
          >
            <Typography
              mb={{ lg: 0, xs: 2 }}
              variant="body1"
              sx={{
                background: '#FFFFFF',
                borderRadius: '8px',
                color: palette.text.primary,
                fontSize: 16,
                fontWeight: 700,
                marginRight: '10px',
                padding: '8px 12px',
                width: 'fit-content',
              }}
            >
              Digital accessibility:{' '}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: palette.text.primary,
                fontSize: 16,
                fontWeight: 700,
              }}
            >
              Are class session recordings readily available for lecture
              courses?
            </Typography>
          </Box>

          <Typography
            mt={4}
            variant="body1"
            sx={{
              color: palette.text.primary,
              fontSize: 14,
              maxWidth: { lg: 'initial', xs: '90%' },
            }}
          >
            More information to be added here...
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="end"
          sx={{
            width: { md: '20%', xs: '10%' },
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
              maxWidth: '85%',
            }}
          >
            Are students required to provide documentation of disability to
            qualify for receiving initial accommodations?
          </Typography>
          <Typography
            mt={2}
            variant="body1"
            sx={{
              color: palette.text.primary,
              fontSize: 14,
              maxWidth: { lg: 'initial', xs: '100%' },
            }}
          >
            More information to be added here...
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="end"
          sx={{
            width: { md: '20%', xs: '10%' },
          }}
        >
          <YesText />
        </Box>
      </Box>
    </Box>
  )
}

export default Pillar1OpenBox
