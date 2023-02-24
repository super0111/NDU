import { Box, Typography } from '@mui/material'

import { palette } from '../../themes'

export const Sharing = () => {
  return (
    <Box mt={4}>
      <Typography
        variant="h4"
        sx={{
          color: palette.common.black,
        }}
      >
        3. SHARING AND DISCLOSURE OF PERSONAL DATA
      </Typography>
      <Typography
        variant="body1"
        my={4}
        sx={{
          color: palette.common.black,
          fontSize: 16,
        }}
      >
        In certain circumstances we may share your Personal Data with third
        parties without further notice to you, unless required by the law,
        solely in the limited circumstances set forth below:
      </Typography>

      <ul className="privacy-policy">
        <li>
          Business Transfers: If we are involved in a merger, acquisition,
          financing due diligence, reorganization, bankruptcy, receivership,
          sale of all or a portion of our assets, or transition of service to
          another provider, your Personal Data and other information may be
          shared in the diligence process with counterparties and others
          assisting with the transaction and transferred to a successor or
          affiliate as part of that transaction along with other assets.
        </li>
        <li>
          Legal Requirements: If required to do so by law or in the good faith
          belief that such action is necessary to (i) comply with a legal
          obligation, including to meet national security or law enforcement
          requirements, (ii) protect and defend our rights or property, (iii)
          prevent fraud, (iv) act in urgent circumstances to protect the
          personal safety of Users, or the public, or (v) protect against legal
          liability.
        </li>
        <li>
          What Happens If You Agree to Receive Information From Third Parties or
          Request That We Share Your Information: You may be presented with an
          opportunity to receive information and/or marketing offers from one or
          more third parties. If you agree at that time to have your Personal
          Data shared, your Personal Data will be disclosed to that third party
          (or parties) and will be subject to the privacy policy and practices
          of that third party. We are not responsible for the privacy policies
          and practices of third parties, and, if you later decide that you no
          longer want to receive communications from a third party, you will
          need to contact that third party directly. You also may request,
          sometimes through your use of a Social Media Site or similar
          interactive feature or third-party application, that we share
          information about you with a third party and we will typically do so
          under those circumstances.
        </li>
      </ul>
    </Box>
  )
}
