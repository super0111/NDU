import { Box } from '@mui/material'

import { HeaderBar, SearchBar, OurPillars, SendEmail, Ourwork } from './'

export const Home = () => {
  return (
    <Box
      sx={{
        background: '#FDD649',
      }}
    >
      <HeaderBar />
      <SearchBar />
      <OurPillars />
      <SendEmail />
      <Ourwork />
    </Box>
  )
}
