import { Box, Divider } from '@mui/material'

import Pillar1 from './Pillar1'
import Pillar2 from './Pillar2'
import Pillar3 from './Pillar3'
import Pillar4 from './Pillar4'

export const PillarFiled = () => {
  return (
    <Box mt={{ sm: 8, xs: 6 }}>
      <Pillar1 />
      <Divider />
      <Pillar2 />
      <Divider />
      <Pillar3 />
      <Divider />
      <Pillar4 />
      <Divider />
    </Box>
  )
}
