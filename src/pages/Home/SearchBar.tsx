import { Box, Container } from '@mui/material'

import { Search } from '../../components/Search'

const buttonText = 'Search'
const placeholder1 = 'Or start by searching a college'
const placeholder2 = 'Search a college'

export const SearchBar = () => {
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          justifyConteint: 'center',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            left: '0',
            position: 'absolute',
            top: { sm: '-40px', xs: '-28px' },
            width: '100%',
          }}
        >
          <Search
            placeholder1={placeholder1}
            placeholder2={placeholder2}
            buttonText={buttonText}
          />
        </Box>
      </Box>
    </Container>
  )
}
