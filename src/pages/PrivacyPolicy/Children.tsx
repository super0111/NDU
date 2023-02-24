import { Box, Typography, Link } from '@mui/material'

import { palette } from '../../themes'

export const Children = () => {
  return (
    <Box mt={4}>
      <Typography
        variant="h4"
        sx={{
          color: palette.common.black,
        }}
      >
        7. CHILDREN
      </Typography>
      <Typography
        variant="body1"
        mt={4}
        sx={{
          color: palette.common.black,
          fontSize: 16,
        }}
      >
        Our Site is not directed to children who are under the age of 18. NDU
        does not knowingly collect Personal Data from children under the age of
        18. If you have reason to believe that a child under the age of 18 has
        provided Personal Data to NDU through the Site, please
        <Link
          href="mailto:info@neurodivergentu.com"
          target="_blank"
          mx={1}
          sx={{
            color: '#F26101 !important',
            textDecoration: 'underline',
          }}
        >
          contact us.
        </Link>
        and we will endeavor to delete that information from our databases.
      </Typography>
    </Box>
  )
}
