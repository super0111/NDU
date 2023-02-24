import {
  Box,
  Button,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Divider,
} from '@mui/material'
import React from 'react'

import { InputField, CollegeButton } from '../../components'
import { palette } from '../../themes'

const buttonTitle = 'Save'

export const EditMeta = () => {
  const [isEditMeta, setIsEditMeta] = React.useState(false)
  return (
    <Box>
      <Box display="flex" justifyContent="end" mt={4} mb={1}>
        <Button
          onClick={() => setIsEditMeta(!isEditMeta)}
          sx={{
            '&:hover': {
              backgroundColor: '#ced4da',
              border: '2px solid #ced4da',
              color: `${palette.common.white} !important`,
            },
            backgroundColor: palette.common.white,
            border: '2px solid #919aa1',
            borderRadius: '8px',
            color: '#919aa1 !important',
            fontSize: 14,
            fontWeight: 700,
            lineHeight: 1.5,
            padding: '10px 20px',
            textTransform: 'initial',
          }}
        >
          Edit Meta
        </Button>
      </Box>
      {isEditMeta ? (
        <Card
          sx={{
            border: '1px solid rgba(0,0,0,0.125)',
          }}
        >
          <CardHeader
            title={
              <Typography
                variant="body1"
                sx={{
                  color: palette.common.black,
                  fontSize: 16,
                }}
              >
                Edit College Metadata
              </Typography>
            }
            sx={{
              backgroundColor: 'rgba(0,0,0,0.03)',
            }}
          />
          <Divider />
          <CardContent>
            <Box>
              <Typography
                variant="body1"
                my={2}
                sx={{
                  color: palette.common.black,
                  fontSize: 16,
                  fontWeight: 700,
                }}
              >
                Name
              </Typography>
              <InputField />
            </Box>
            <Box mt={4}>
              <Typography
                variant="body1"
                my={2}
                sx={{
                  color: palette.common.black,
                  fontSize: 16,
                  fontWeight: 700,
                }}
              >
                City
              </Typography>
              <InputField />
            </Box>
            <Box my={4}>
              <Typography
                variant="body1"
                my={2}
                sx={{
                  color: palette.common.black,
                  fontSize: 16,
                  fontWeight: 700,
                }}
              >
                State
              </Typography>
              <InputField />
            </Box>

            <CollegeButton buttonTitle={buttonTitle} />
          </CardContent>
        </Card>
      ) : (
        ''
      )}
    </Box>
  )
}
