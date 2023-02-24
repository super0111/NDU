import { Container, Box, Typography } from '@mui/material'
import React from 'react'

import { palette } from '../../themes'

import { SaveInfoItem } from './SaveInfoItem'
import { SendMessageItem } from './SendMessageItem'

export const Setting = () => {
  return (
    <Box mt={{ sm: 13, xs: 8 }} mb={{ sm: 22, xs: 12 }}>
      <Container>
        <Box
          sx={{
            margin: 'auto',
            width: { md: '730px', xs: '100%' },
          }}
        >
          <Typography
            variant="h3"
            mt={2}
            sx={{
              color: palette.text.primary,
              fontSize: { sm: 32, xs: 28 },
              fontWeight: 700,
              lineHeight: '120%',
            }}
          >
            Hello John Doe
          </Typography>
          <Box
            mt={4}
            mb={6}
            sx={{
              background: '#94C804',
              borderRadius: '6px',
              padding: '6px 10px',
              width: 'fit-content',
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: palette.common.white,
                fontSize: 12,
                lineHeight: '120%',
              }}
            >
              <span style={{ fontWeight: 700, marginRight: '8px' }}>
                VERIFIED
              </span>
              You may add/edit data for your college
            </Typography>
          </Box>

          <SaveInfoItem />
          <SendMessageItem />
        </Box>
      </Container>
    </Box>
  )
}
