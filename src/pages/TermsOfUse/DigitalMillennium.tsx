import { Box, Typography, Link } from '@mui/material'

import { palette } from '../../themes'

export const DigitalMillennium = () => {
  return (
    <Box mt={4}>
      <Typography
        variant="h4"
        sx={{
          color: palette.common.black,
        }}
      >
        5. DIGITAL MILLENNIUM COPYRIGHT ACT (“DMCA”) NOTICE
      </Typography>
      <Typography
        variant="body1"
        mt={4}
        sx={{
          color: palette.common.black,
          fontSize: 16,
        }}
      >
        In operating the Site, we may act as a “services provider” (as defined
        by the DMCA) and offer services as online provider of materials and
        links to third party sites. As a result, third party materials that we
        do not own or control may be transmitted, stored, accessed or otherwise
        made available using the Site. If you believe any material available via
        the Site infringes a copyright, you should notify us using the notice
        procedure for claimed infringement under the DMCA. We will respond
        expeditiously to remove or disable access to the material claimed to be
        infringing and will follow the procedures specified in the DMCA to
        resolve the claim between the notifying party and the alleged infringer
        who provided the content. Our designated agent (i.e., proper party for
        notice) to whom you should address infringement notices under the DMCA
        can be reached
        <Link
          href="mailto:info@neurodivergentu.com"
          target="_blank"
          mx={1}
          sx={{
            color: '#F26101 !important',
            textDecoration: 'underline',
          }}
        >
          by email.
        </Link>
      </Typography>
    </Box>
  )
}
