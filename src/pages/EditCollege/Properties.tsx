import { Box, Typography } from '@mui/material'

import {
  InputField,
  CollegeButton,
  SelectControl,
  ToggleControl,
} from '../../components'
import { palette } from '../../themes'

const buttonTitle = 'Save properties'

const items = [
  {
    selectItems: [],
    title: 'Undergraduate Students',
    type: 'input',
    validation: 'An integer number.',
  },
  {
    selectItems: [],
    title: 'Withdrawal Rate',
    type: 'input',
    validation: 'A floating point number.',
  },
  {
    selectItems: [],
    title: 'Annual Tuition',
    type: 'input',
    validation: 'An integer number.',
  },
  {
    selectItems: [],
    title: 'Diversity Index',
    type: 'input',
    validation: 'A floating point number.',
  },
  {
    selectItems: [],
    title: 'Score',
    type: 'input',
    validation: 'An integer number.',
  },
  {
    selectItems: ['Small', 'Medium', 'Large'],
    title: 'Campus Size',
    type: 'select',
    validation: '',
  },
  {
    selectItems: [],
    title: 'Campus Size Description',
    type: 'input',
    validation: '',
  },
  { selectItems: [], title: 'Is Public', type: 'boolean', validation: '' },
  {
    selectItems: [],
    title: 'Is Public Description',
    type: 'input',
    validation: '',
  },
  {
    selectItems: ['Northeast', 'South', 'West', 'Midwest'],
    title: 'Region',
    type: 'select',
    validation: '',
  },
]

export const Properties = () => {
  return (
    <Box mt={4}>
      {items.map((item, i) => (
        <Box
          key={i}
          display="flex"
          flexDirection={{ sm: 'row', xs: 'column' }}
          justifyContent="space-between"
          alignItems={{ sm: 'center', xs: 'flex-start' }}
          mb={{ sm: 10, xs: 6 }}
        >
          <Typography
            variant="body1"
            my={2}
            sx={{
              color: palette.common.black,
              fontSize: 16,
              fontWeight: 700,
            }}
          >
            {item.title}
          </Typography>
          <Box
            sx={{
              position: 'relative',
              width: { sm: '75%', xs: '100%' },
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

      <CollegeButton buttonTitle={buttonTitle} />
    </Box>
  )
}
