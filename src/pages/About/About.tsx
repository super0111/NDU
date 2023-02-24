import { Container } from '@mui/material'

import { OurMission, AdvisoryBoard, Staff, ScrollTop } from './index'

export const About = () => {
  return (
    <Container
      sx={{
        padding: { md: '92px 16px', sm: '56px 16px', xs: '40px 16px' },
      }}
    >
      <OurMission />
      <AdvisoryBoard />
      <Staff />
      <ScrollTop />
    </Container>
  )
}
