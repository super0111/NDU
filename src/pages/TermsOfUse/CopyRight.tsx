import { Box, Typography } from '@mui/material'

import { palette } from '../../themes'

export const CopyRight = () => {
  return (
    <Box mt={4}>
      <Typography
        variant="h4"
        sx={{
          color: palette.common.black,
        }}
      >
        4. COPYRIGHT AND LIMITED LICENSE
      </Typography>
      <Typography
        variant="body1"
        mt={4}
        sx={{
          color: palette.common.black,
          fontSize: 16,
        }}
      >
        Except as provided in these Terms of Use or as otherwise indicated on
        the Site, the Site, the Services and all content and other materials on
        the Site, including without limitation, all designs, text, graphics,
        creative, images, information, data, software, routines, documentation,
        technology, and digital files, as well as the selection and arrangement
        thereof (collectively, the “<strong>Site Materials</strong>”) are the
        intellectual and proprietary property of NDU or its licensors or users
        and are protected by U.S. and international copyright, trademark, trade
        secret and other laws. You are granted a limited license, without the
        right to sublicense, to access and use the Site and the Services for
        your informational, non-commercial and personal use only. Such license
        is subject to these Terms of Use and any other applicable terms and
        conditions. Except as explicitly permitted under these Terms of Use or
        agreed to by NDU, no portion or element of the Site or Site Materials
        may be copied or retransmitted via any means and the Site, the Site
        Materials and all related rights shall remain the exclusive property of
        NDU or its licensors. You may not remove any copyright, trademark or
        other proprietary notices from any Site Materials.
      </Typography>
      <Typography
        variant="body1"
        mt={4}
        sx={{
          color: palette.common.black,
          fontSize: 16,
        }}
      >
        Any use or attempted use of the Site, the Site Materials or the Services
        other than as specifically authorized herein, without the express prior
        written permission of NDU or its licensors or users, is strictly
        prohibited and will, among other things, terminate the license granted
        herein. Such unauthorized use or attempted use may also violate
        applicable laws, including without limitation, copyright and trademark
        laws and applicable communications regulations and statutes. Except as
        explicitly stated herein, nothing in these Terms of Use shall be
        construed as conferring any license to any intellectual property rights,
        whether by estoppel, implication or otherwise. This license is revocable
        at any time, in NDU’s sole discretion.
      </Typography>
    </Box>
  )
}
