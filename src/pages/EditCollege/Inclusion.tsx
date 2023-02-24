import { Box, Typography } from '@mui/material'

import { InputField, ToggleControl } from '../../components'
import { palette } from '../../themes'

const items = [
  {
    title:
      'Is there required diversity and inclusivity training for faculty/staff/and students, and does training include recognition of neurodivergence and disability?',
    type: 'boolean',
  },
  {
    title: 'Diversity training description',
    type: 'input',
  },
  {
    title: 'Disability Cultural Center',
    type: 'boolean',
  },
  {
    title: 'Mutual Aid Networks',
    type: 'boolean',
  },
  {
    title: 'Peer Support Groups',
    type: 'boolean',
  },
  {
    title: 'Peer support groups description',
    type: 'input',
  },
]

export const Inclusion = () => {
  return (
    <Box mt={{ sm: 8, xs: 4 }}>
      <Typography variant="h4" mb={{ sm: 4, xs: 0 }}>
        Inclusion
      </Typography>

      {items.map((item, i) => (
        <Box
          key={i}
          display="flex"
          flexDirection={{ sm: 'row', xs: 'column' }}
          justifyContent="space-between"
          alignItems={{ sm: 'center', xs: 'flex-start' }}
          mb={{ sm: 8, xs: 2 }}
        >
          <Typography
            variant="body1"
            my={2}
            sx={{
              color: palette.common.black,
              fontSize: 16,
              fontWeight: 700,
              width: {
                sm: item.type === 'boolean' ? '75%' : '25%',
                xs: '100%',
              },
            }}
          >
            {item.title}
          </Typography>
          <Box
            sx={{
              position: 'relative',
              width: {
                sm: item.type === 'boolean' ? '25%' : '75%',
                xs: '100%',
              },
            }}
          >
            {item.type === 'input' ? (
              <InputField />
            ) : item.type === 'boolean' ? (
              <Box display="flex" justifyContent="end">
                <ToggleControl />
              </Box>
            ) : (
              ''
            )}
          </Box>
        </Box>
      ))}
    </Box>
  )
}
