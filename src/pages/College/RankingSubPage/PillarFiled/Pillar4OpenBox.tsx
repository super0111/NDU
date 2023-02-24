import { Box, Typography } from '@mui/material'

import pillarImage1 from '../../../../assets/images/pillar1.png'
import pillarImage2 from '../../../../assets/images/pillar2.png'
import { palette } from '../../../../themes'

import { YesText, NoText } from './YesNoText'

const Pillar4OpenBox = () => {
  return (
    <Box mt={8}>
      <Box
        mt={4}
        p={{ sm: 6, xs: 4 }}
        display="flex"
        justifyContent="space-between"
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
            This school has issued an official statement in support of social
            and racial justice movements
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="end"
          alignItems={{ sm: 'initial', xs: 'flex-start' }}
        >
          <Box
            display="flex"
            flexDirection={{ sm: 'row', xs: 'column' }}
            alignItems={{ sm: 'initial', xs: 'end' }}
            justifyContent="end"
            width={{ lg: '20%', sm: '40%' }}
          >
            <Box
              component="img"
              src={pillarImage1}
              alt="img"
              sx={{
                width: '30px',
              }}
            />
            <Box
              ml={1}
              mt={{ sm: 0, xs: 1 }}
              component="img"
              src={pillarImage2}
              alt="img"
              sx={{
                width: '65px',
              }}
            />
          </Box>
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
            Does your college offer a Disability Studies curriculum?
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="end"
          sx={{
            width: { md: '20%', xs: '20%' },
          }}
        >
          <YesText />
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
            Does your college offer a course on Critical Theory?
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="end"
          sx={{
            width: { md: '20%', xs: '20%' },
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
            width: '90%',
          }}
        >
          <Typography
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
            Questionable research
          </Typography>

          <Box mt={4} display="flex" alignItems="center">
            <Typography
              mr={2}
              variant="body1"
              sx={{
                color: palette.text.primary,
                fontSize: 14,
              }}
            >
              Animal Experimentation
            </Typography>
            <YesText />
          </Box>
          <Box mt={4} display="flex" alignItems="center">
            <Typography
              mr={2}
              variant="body1"
              sx={{
                color: palette.text.primary,
                fontSize: 14,
              }}
            >
              Cure Autism
            </Typography>
            <YesText />
          </Box>
          <Box mt={4} display="flex" alignItems="center">
            <Typography
              mr={2}
              variant="body1"
              sx={{
                color: palette.text.primary,
                fontSize: 14,
              }}
            >
              Facial/Gait Recognition
            </Typography>
            <NoText />
          </Box>
          <Box mt={4} display="flex" alignItems="center">
            <Typography
              mr={2}
              variant="body1"
              sx={{
                color: palette.text.primary,
                fontSize: 14,
              }}
            >
              Suicide/threat detection Al
            </Typography>
            <YesText />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Pillar4OpenBox
