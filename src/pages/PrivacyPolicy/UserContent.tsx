import { Box, Typography } from '@mui/material'

import { palette } from '../../themes'

export const UserContent = () => {
  return (
    <Box mt={4}>
      <Typography
        variant="h4"
        sx={{
          color: palette.common.black,
        }}
      >
        9. USER CONTENT AND CONDUCT
      </Typography>
      <Typography
        variant="body1"
        mt={4}
        sx={{
          color: palette.common.black,
          fontSize: 16,
        }}
      >
        The Site or the Services may include public or restricted access
        reviews, discussion forums, or other interactive areas or services (“
        <strong>Interactive Areas</strong>“), including chat rooms or message
        boards or other areas or services in which you or other users create,
        post or store messages, information, text, music or sound files, still
        or video images, graphics, data, code or any other digital content of
        any kind on the Site (“<strong>User Content</strong>“). Interactive
        Areas are provided “as is” and your use of the Interactive Areas is at
        your own risk.
      </Typography>
      <Typography
        variant="body1"
        my={4}
        sx={{
          color: palette.common.black,
          fontSize: 16,
        }}
      >
        If you post User Content, you acknowledge and agree that your User
        Content will be accessible and viewed by others. You agree not to post,
        upload, transmit, distribute, store, create or otherwise publish on or
        through the Site any of the following:
      </Typography>

      <ul className="terms-of-use">
        <li>
          User Content that is unlawful, libelous, defamatory, obscene,
          pornographic, indecent, lewd, suggestive, harassing, threatening,
          invasive of privacy or publicity rights, abusive, inflammatory,
          fraudulent or otherwise objectionable;
        </li>
        <li>
          User Content that would constitute, encourage or provide instructions
          for a criminal offense, violate the rights of any party, or that would
          otherwise create liability or violate any local, state, national or
          international law;
        </li>
        <li>
          User Content that may infringe any patent, trademark, trade secret,
          copyright or other intellectual or proprietary right of any party. By
          posting any User Content, you represent and warrant that you have the
          lawful right to distribute, reproduce and license such User Content in
          the manner and for the purposes contemplated by these Terms of Use;
        </li>
        <li>
          User Content that impersonates any person or entity or otherwise
          misrepresents your affiliation with a person or entity;
        </li>
        <li>
          Any unauthorized commercial use such as, but not limited to, engaging
          in unsolicited promotions, political campaigning, advertising, or
          solicitations, hyperlinking from the Site, or collecting user data for
          any purpose whatsoever;
        </li>
        <li>
          Private or confidential information of any third party, including,
          without limitation, addresses, phone numbers, email addresses, Social
          Security numbers and credit card numbers;
        </li>
        <li>
          Viruses, bots, Trojan horses, malware, worms, corrupted data or other
          harmful, disruptive or destructive files of any kind or nature;
        </li>
        <li>
          Encrypted content or content that can be demonstrated to contain
          encoded messages;
        </li>
        <li>
          Content in any language other than English if an accurate, reliable
          translation cannot be reasonably acquired;
        </li>
        <li>
          Multimedia content of any kind, such as photo, audio and/or video
          files, except when invited by the Site to do so; and
        </li>
        <li>
          User Content that, in the sole judgment of NDU, is objectionable or
          that restricts or inhibits any other person from using or enjoying the
          Interactive Areas or the Site, or which may expose NDU or its users to
          any harm or liability of any type.
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
        This foregoing is a non-exclusive and incomplete list of examples of
        prohibited acts and practices, and NDU will at all times have sole
        discretion to interpret and determine conduct, including User Content,
        that violates these Terms of Use.
      </Typography>
      <Typography
        variant="body1"
        mt={4}
        sx={{
          color: palette.common.black,
          fontSize: 16,
        }}
      >
        NDU is not responsible, and assumes no liability, for any User Content
        posted, stored or uploaded by you or any third party, or for any loss or
        damage thereto or resulting therefrom, nor is NDU liable for any
        mistakes, defamation, slander, libel, omissions, falsehoods, obscenity,
        profanity or other objectionable content you may encounter. As a
        provider of interactive services, NDU is not responsible or liable for
        any statements, representations or User Content provided by its users in
        any public forum or other Interactive Area. Accordingly, NDU has no
        obligation to screen, edit, or monitor User Content or the Interactive
        Areas. However, NDU reserves the right, and has absolute discretion, to
        refuse, block, move, or remove any User Content posted or stored on the
        Site at any time with or without cause, for any reason or no reason and
        without notice. You are solely responsible for creating backup copies of
        and replacing any User Content you post or store on the Site or through
        the Services at your sole cost and expense. Any use of the Interactive
        Areas or other portions of the Site or the Services in violation of the
        foregoing violates these Terms of Use and may result in, among other
        things, termination or suspension of your rights to use the Interactive
        Areas, the Site and/or the Services.
      </Typography>
    </Box>
  )
}
