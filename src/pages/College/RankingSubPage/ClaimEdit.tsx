import {
  Box,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Divider,
  Button,
  Tooltip,
} from '@mui/material'
import React from 'react'

import { ClaimButton, TooltipBox } from '../../../components'
import { palette } from '../../../themes'

// const buttonTitle1 = 'Claim This College'
const tooltipText1 =
  'If you claim this college then currently claimed will be unclaimed.'
const buttonTitle2 = 'Edit College'
const buttonTitle3 = 'Delete'
// const tooltipText3 = 'Are you sure?'
const buttonStyle3 = {
  '&:hover': {
    backgroundColor: '#bf4d01',
  },
  backgroundColor: '#f26101',
  padding: '14px 24px',
}

export const ClaimEdit = () => {
  const [open, setOpen] = React.useState(false)

  const handleTooltipClose = () => {
    setOpen(!open)
  }

  const handleTooltipOpen = () => {
    setOpen(!open)
  }
  return (
    <Box mt={{ sm: 16, xs: 8 }}>
      <Card>
        <CardHeader
          title={
            <Typography
              variant="h4"
              sx={{
                color: palette.common.black,
                fontFamily: 'DM Sans',
                fontSize: 16,
              }}
            >
              CLAIM & EDIT
            </Typography>
          }
          sx={{
            backgroundColor: 'rgba(0,0,0,0.03)',
          }}
        />
        <Divider />
        <CardContent>
          <Tooltip
            PopperProps={{
              disablePortal: true,
            }}
            arrow
            placement="top"
            onClose={handleTooltipClose}
            open={open}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            title={<TooltipBox tooltipText={tooltipText1} />}
          >
            <Button onClick={handleTooltipOpen}>Click</Button>
          </Tooltip>

          <Typography
            variant="body1"
            my={4}
            sx={{
              color: palette.common.black,
              fontSize: 16,
            }}
          >
            Claim a school to let others know that you are committed to holding
            your school accountable. The goal is to get every school to an A+.
            This page is a guideline you can use to organize and help your
            school create a safer campus for neurodivergent students.
          </Typography>
          <ClaimButton buttonTitle={buttonTitle2} />
          <Box mt={4}>
            <ClaimButton
              buttonTitle={buttonTitle3}
              buttonStyle={buttonStyle3}
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}
