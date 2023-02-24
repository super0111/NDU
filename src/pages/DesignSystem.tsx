import { Typography, Button, Box } from '@mui/material'

const Palette = ({ name, value }: { name: string; value: string }) => {
  return (
    <Box mb={4}>
      <Typography variant="body1" mb={1}>
        {name}
      </Typography>
      <Typography variant="body1" mb={1}>
        {value}
      </Typography>
      <Box width={120} height={40} sx={{ background: value, border: 1 }} />
    </Box>
  )
}
export const DesignSystem = () => {
  return (
    <Box p={5} display="flex" gap={4}>
      <Box>
        <Box>
          <Typography variant="h1">Typography h1</Typography>
          <Typography variant="h2">Typography h2</Typography>
          <Typography variant="h3">Typography h3</Typography>
          <Typography variant="h4">Typography h4</Typography>
          <Typography variant="h5">Typography h5</Typography>
          <Typography variant="h6">Typography h6</Typography>
          <Typography variant="subtitle1">Typography subtitle1</Typography>
          <Typography variant="subtitle2">Typography subtitle2</Typography>
          <Typography variant="body1">Typography body1</Typography>
          <Typography variant="body2">Typography body2</Typography>
          <Typography variant="button">Typography button</Typography>
          <Typography variant="caption">Typography caption</Typography>
        </Box>
        <Box mb={2}>
          <Button variant="contained">Button Contained</Button>
        </Box>
        <Box>
          <Button variant="outlined">Button outlined</Button>
        </Box>
      </Box>
      <Box>
        <Typography variant="h2">Palettes</Typography>
        <Box mt={2}>
          <Palette name="common black" value="#000" />
          <Palette name="common white" value="#FFF" />
          <Palette name="primary main" value="#FDD649" />
          <Palette name="primary dark" value="#513F01" />
          <Palette name="secondary main" value="#3ffefd" />
          <Palette name="text primary" value="#090A0C" />
          <Palette name="text secondary" value="#596673" />
          <Palette name="text disabled" value="#596673" />
        </Box>
      </Box>
    </Box>
  )
}
