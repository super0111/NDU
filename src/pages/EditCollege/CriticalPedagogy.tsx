import { Box, Typography } from '@mui/material'

import { InputField, ToggleControl, CollegeButton } from '../../components'
import { palette } from '../../themes'

const items = [
  {
    title: 'Support for Black Lives Matter',
    type: 'boolean',
  },
  {
    title: 'Support for Land Back',
    type: 'boolean',
  },
  {
    title: 'Statements description',
    type: 'input',
  },
  {
    title: 'Does your college offer a Disability Studies curriculum?',
    type: 'boolean',
  },
  {
    title:
      'Does your college offer a Disability Studies curriculum? description',
    type: 'input',
  },
  {
    title: 'Does your college offer a course on Critical Theory?',
    type: 'boolean',
  },
  {
    title: 'Does your college offer a course on Critical Theory? description',
    type: 'input',
  },
  {
    title: 'Animal Experimentation',
    type: 'boolean',
  },
  {
    title: 'Cure Autism',
    type: 'boolean',
  },
  {
    title: 'Facial/Gait Recognition',
    type: 'boolean',
  },
  {
    title: 'Suicide/threat detection Al',
    type: 'boolean',
  },
  {
    title: 'Questionable research description',
    type: 'input',
  },
]

const buttonTitle = 'Save pillars'

export const CriticalPedagogy = () => {
  return (
    <Box mt={{ sm: 8, xs: 4 }}>
      <Typography variant="h4" mb={{ sm: 4, xs: 0 }}>
        Critical Pedagogy
      </Typography>

      {items.map((item, i) => (
        <Box
          key={i}
          display="flex"
          flexDirection={{ sm: 'row', xs: 'column' }}
          justifyContent="space-between"
          alignItems={{ sm: 'center', xs: 'flex-start' }}
          mb={{ sm: 8, xs: 4 }}
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
      <CollegeButton buttonTitle={buttonTitle} />
    </Box>
  )
}
