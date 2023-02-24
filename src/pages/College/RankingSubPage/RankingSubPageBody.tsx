import { Container, Box } from '@mui/material'

import {
  DataSubmittedBy,
  CollegeType,
  Description,
  PillarFiled,
  StudentExperience,
} from './'

export const RankingSubPageBody = () => {
  return (
    <Container>
      <Box pt={{ sm: 16, xs: 8 }} pb={6} px={{ lg: 0, sm: 20, xs: 1 }}>
        <DataSubmittedBy />
        <CollegeType />
        <Description />
        <PillarFiled />
        <StudentExperience />
      </Box>
    </Container>
  )
}
