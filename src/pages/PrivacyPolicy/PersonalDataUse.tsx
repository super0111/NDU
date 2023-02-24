import { Box, Typography, Link } from '@mui/material'

import { palette } from '../../themes'

export const PersonalDataUse = () => {
  return (
    <Box mt={4}>
      <Typography
        variant="h4"
        sx={{
          color: palette.common.black,
        }}
      >
        2. HOW WE USE PERSONAL DATA
      </Typography>
      <Typography
        variant="body1"
        my={4}
        sx={{
          color: palette.common.black,
          fontSize: 16,
        }}
      >
        We may use Personal Data for the following purposes:
      </Typography>

      <ul className="terms-of-use">
        <li>To provide the Site;</li>
        <li>To respond to your inquiries, comments, feedback, or questions;</li>
        <li>
          To send administrative information to you, for example, information
          regarding the Site, and changes to our terms, conditions, and
          policies;
        </li>
        <li>To analyze how you interact with the Site;</li>
        <li>
          To maintain and improve the content and functionality of the Site;
        </li>
        <li>To develop new products and services;</li>
        <li>
          To prevent fraud, criminal activity, or misuses of the Site, and to
          ensure the security of our IT systems, architecture, and networks; and
        </li>
        <li>
          To comply with legal obligations and legal process and to protect our
          rights, privacy, safety, or property, and/or that of our affiliates,
          you, or other third parties.
        </li>
      </ul>

      <Typography
        variant="body1"
        mt={4}
        sx={{
          color: palette.common.black,
          fontSize: 16,
        }}
      >
        <strong>Aggregated Information</strong>: We may aggregate Personal Data
        and use the aggregated information to analyze the effectiveness of our
        Site, to improve and add features to our Site, and for other similar
        purposes. In addition, from time to time, we may analyze the general
        behavior and characteristics of Users and share aggregated information
        like general User statistics with prospective business partners. We may
        collect aggregated information through the Site, through cookies, and
        through other means described in this Privacy Policy.
      </Typography>
      <Typography
        variant="body1"
        mt={4}
        sx={{
          color: palette.common.black,
          fontSize: 16,
        }}
      >
        <strong>Marketing</strong>: We may use your Personal Data to contact you
        with information about the Site. You may opt out of receiving emails by
        following the instructions contained in each email we send you. If at
        any time you agree to receive emails from us, you will also be able to
        control the emails you receive by updating your settings through your
        account. In addition, if at any time you do not wish to receive future
        communications, you may
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
      </Typography>
    </Box>
  )
}
