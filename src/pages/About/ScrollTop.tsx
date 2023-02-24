import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import { Box } from '@mui/material'

export const ScrollTop = () => {
  const goToTop = () => {
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
    })
  }
  return (
    <Box display="flex" justifyContent="end" mt={18}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        onClick={goToTop}
        sx={{
          background: 'rgba(243, 245, 246, 0.7)',
          borderRadius: '4px',
          height: '30px',
          width: '30px',
        }}
      >
        <ArrowUpwardIcon fontSize="small" />
      </Box>
    </Box>
  )
}
