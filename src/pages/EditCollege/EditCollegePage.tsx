import { Container } from '@mui/material'

import {
  EditCollegeHeader,
  EditMeta,
  Properties,
  Accessibility,
  Inclusion,
  Safety,
  CriticalPedagogy,
  Description,
} from '.'

export const EditCollege = () => {
  return (
    <Container>
      <EditCollegeHeader />
      <EditMeta />
      <Properties />
      <Accessibility />
      <Inclusion />
      <Safety />
      <CriticalPedagogy />
      <Description />
    </Container>
  )
}
