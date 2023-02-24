import { Box, Typography } from '@mui/material'

import { palette } from '../../themes'

export const ThirdPartyContent = () => {
  return (
    <Box mt={4}>
      <Typography
        variant="h4"
        sx={{
          color: palette.common.black,
        }}
      >
        8. THIRD PARTY CONTENT AND APPLICATIONS
      </Typography>
      <Typography
        variant="body1"
        mt={4}
        sx={{
          color: palette.common.black,
          fontSize: 16,
        }}
      >
        In addition to the Site Materials, our Site may include third party
        content and may provide links to websites and content of third parties
        (collectively the “<strong>Third Party Content</strong>”) as a service
        to those interested in this information, including content and views of
        various individuals such as product managers, employees, customers,
        experts or members of the public. The views expressed in such Third
        Party Content are those of the creators thereof and are not, and should
        not be construed as, the views of NDU. In addition, the Site may include
        certain applications, features, programs and services provided by third
        parties (the “<strong>Third Party Applications</strong>”). NDU does not
        monitor Third Party Content or Third Party Applications and makes no
        guarantee as to the accuracy or completeness of such Third Party Content
        or Third Party Applications. NDU is not responsible or liable in any
        manner for any Third Party Content or Third Party Applications, or for
        any loss, liability, harm or damages of any sort incurred as the result
        of your use thereof or access thereto, and makes no representations or
        warranties in connection with any Third Party Content or Third Party
        Applications, which at all times and in each instance is provided “as
        is. ” Third Party Applications may be subject to additional terms and
        conditions or agreements between you and the provider(s) of the Third
        Party Applications, and you agree to fully comply with all such
        additional terms, conditions and agreements. Your use of Third Party
        Content and Third Party Applications is at your own risk.
      </Typography>
    </Box>
  )
}
