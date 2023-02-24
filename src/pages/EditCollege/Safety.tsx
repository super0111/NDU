import { Box, Typography } from '@mui/material'

import { InputField, SelectControl, ToggleControl } from '../../components'
import { palette } from '../../themes'

const items = [
  {
    selectItems: [],
    title:
      'Have you experienced ableism, discrimination, or witnessed stigmatizing language?',
    type: 'boolean',
    validation: '',
  },
  {
    selectItems: [],
    title: 'Ableism experienced description',
    type: 'input',
    validation: '',
  },
  {
    selectItems: [],
    title: 'Are police involved in responding to student mental health crises?',
    type: 'boolean',
    validation: '',
  },
  {
    selectItems: [],
    title: 'Police involved description',
    type: 'input',
    validation: '',
  },
  {
    selectItems: [
      'NO',
      'Yes (Widthout anonymuos reporting)',
      'Yes (Allows anonymuos reporting)',
    ],
    title: 'Does your college have a Student of Concern reporting page?',
    type: 'select',
    validation: '',
  },
  {
    selectItems: [],
    title: 'Concern reporting description',
    type: 'input',
    validation: '',
  },
  {
    selectItems: [],
    title:
      'Clery Report data: Number of sexual assaults reported on campus per thousand students.',
    type: 'input',
    validation: 'An integer number.',
  },
  {
    selectItems: [],
    title: 'Assaults count description',
    type: 'input',
    validation: '',
  },
]

export const Safety = () => {
  return (
    <Box mt={4}>
      <Typography variant="h4" mb={{ sm: 4, xs: 0 }}>
        Safety
      </Typography>

      {items.map((item, i) => (
        <Box
          key={i}
          display="flex"
          flexDirection={{ sm: 'row', xs: 'column' }}
          justifyContent="space-between"
          alignItems={{ sm: 'center', xs: 'flex-start' }}
          mb={{ sm: 6, xs: 6 }}
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
