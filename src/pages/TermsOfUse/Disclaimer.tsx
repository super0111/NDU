import { Box, Typography } from '@mui/material'

import { palette } from '../../themes'

export const Disclaimer = () => {
  return (
    <Box mt={4}>
      <Typography
        variant="h4"
        sx={{
          color: palette.common.black,
        }}
      >
        13. DISCLAIMER
      </Typography>
      <Typography
        variant="body1"
        mt={4}
        sx={{
          color: palette.common.black,
          fontSize: 16,
        }}
      >
        EXCEPT AS EXPRESSLY PROVIDED TO THE CONTRARY IN A WRITING BY NDU, THE
        SITE, THE SITE MATERIALS, THE SERVICES, AND ALL CONTENT MADE AVAILABLE
        ON, CONTAINED IN, OR ACCESSED THROUGH THE SITE ARE PROVIDED ON AN “AS
        IS” BASIS WITHOUT WARRANTY BY NDU OF ANY KIND, EITHER EXPRESS OR
        IMPLIED. NDU DOES NOT REPRESENT OR WARRANT THAT THE CONTENT AND SITE
        MATERIALS ON THE SITE OR THE SERVICES ARE ACCURATE, COMPLETE, RELIABLE,
        CURRENT OR ERROR- OR DEFECT-FREE. NDU DOES NOT REPRESENT OR WARRANT THAT
        THE SITE OR THEIR HOST SERVERS ARE FREE OF VIRUSES OR OTHER HARMFUL
        COMPONENTS. NDU IS NOT RESPONSIBLE FOR TYPOGRAPHICAL ERRORS OR OMISSIONS
        RELATING TO PROGRAMS, TEXT OR IMAGERY. WHILE NDU ATTEMPTS TO MAKE YOUR
        ACCESS AND USE OF THE SITE AND THE SERVICES SAFE, NDU CANNOT AND DOES
        NOT REPRESENT OR WARRANT THAT THE SITE OR THE SERVICES ARE FREE OF
        VIRUSES OR OTHER HARMFUL COMPONENTS.
      </Typography>
    </Box>
  )
}
