import { Box, Typography } from '@mui/material'

import { InputField, SelectControl, ToggleControl } from '../../components'
import { palette } from '../../themes'

const items = [
  {
    selectItems: [],
    title: 'Time between classes',
    type: 'input',
    validation: 'A duration in ISO 8601 format.',
  },
  {
    selectItems: [],
    title: 'Wait time for counseling appointment',
    type: 'input',
    validation: 'A duration in ISO 8601 format.',
  },
  {
    selectItems: [],
    title: 'Number of counselors on staff per thousand students',
    type: 'input',
    validation: 'An integer number.',
  },
  {
    selectItems: [],
    title:
      'Are all campus buildings physically accessible to students who use wheelchairs or other mobility aids?',
    type: 'boolean',
    validation: '',
  },
  {
    selectItems: [],
    title: 'Physical accessibility description',
    type: 'input',
    validation: '',
  },
  {
    selectItems: [],
    title:
      'Are class session recordings readily available for lecture courses?',
    type: 'boolean',
    validation: '',
  },
  {
    selectItems: [],
    title: 'Digital accessibility description',
    type: 'input',
    validation: '',
  },
  {
    selectItems: ['Northeast', 'South', 'West', 'Midwest'],
    title:
      'Are students required to provide documentation of disability to qualify for receiving initial accommodations?',
    type: 'boolean',
    validation: '',
  },
  {
    selectItems: ['Northeast', 'South', 'West', 'Midwest'],
    title: 'Disability doc required description',
    type: 'input',
    validation: '',
  },
]

export const Accessibility = () => {
  return (
    <Box mt={8}>
      <Typography variant="h4" mb={4}>
        Accessibility and Support
      </Typography>

      {items.map((item, i) => (
        <Box
          key={i}
          display="flex"
          flexDirection={{ sm: 'row', xs: 'column' }}
          justifyContent="space-between"
          alignItems={{ sm: 'center', xs: 'flex-start' }}
          mb={8}
        >
          <Typography
            variant="body1"
            my={{ sm: 2, xs: 0 }}
            sx={{
              color: palette.common.black,
              fontSize: 16,
              fontWeight: 700,
              width: {
                sm: item.type === 'boolean' ? '80%' : '18%',
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
            ) : item.type === 'select' ? (
              <SelectControl item={item.selectItems} />
            ) : item.type === 'boolean' ? (
              <Box display="flex" justifyContent="end">
                <ToggleControl />
              </Box>
            ) : (
              ''
            )}
            <Typography
              variant="body1"
              mt={1}
              sx={{
                bottom: '-25px',
                color: '#919aa1 !important',
                fontSize: 14,
                left: 0,
                position: 'absolute',
              }}
            >
              {item.validation}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  )
}
