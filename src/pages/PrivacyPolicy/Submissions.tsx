import { Box, Typography } from '@mui/material'

import { palette } from '../../themes'

export const Submissions = () => {
  return (
    <Box mt={4}>
      <Typography
        variant="h4"
        sx={{
          color: palette.common.black,
        }}
      >
        11. SUBMISSIONS RELATING TO SITE OR SERVICES
      </Typography>
      <Typography
        variant="body1"
        mt={4}
        sx={{
          color: palette.common.black,
          fontSize: 16,
        }}
      >
        You acknowledge and agree that, except for User Content submitted in an
        Interactive Area, any materials, including but not limited to questions,
        comments, suggestions, ideas, plans, notes, drawings, original or
        creative materials, images or other information regarding the Site, the
        Services, or NDU, provided or submitted by you for any reason, including
        by way of example, in response to an invitation or request to
        participate in surveys or other forums hosted by or for NDU or any third
        party manufacturer, distributor or vendor, on the Site or related to the
        Site, in whatever form, or any other submissions to NDU by or through
        any means, including email or any postings on the Site, are
        non-confidential and shall be the sole property of NDU, and that upon
        submission of such materials to NDU you thereby assign without
        additional consideration all right, title and interest you may hold in
        such materials to NDU. NDU shall own exclusive rights, including all
        intellectual property rights, in such materials and shall be entitled to
        the unrestricted use and dissemination of these materials for any
        purpose, commercial or otherwise, without acknowledgment or compensation
        to or review by you.
      </Typography>
    </Box>
  )
}
