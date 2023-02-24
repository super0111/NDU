import { Box, Typography, Divider } from '@mui/material'

import { palette } from '../../../themes'

export const Description = () => {
  return (
    <Box mt={{ sm: 10, xs: 6 }}>
      <Typography
        variant="body1"
        mb={6}
        sx={{
          color: palette.text.primary,
          fontWeight: 700,
        }}
      >
        Description:
      </Typography>
      <Divider />
      <Box my={{ sm: 6, xs: 4 }}>
        <Typography
          variant="body1"
          sx={{
            color: palette.text.primary,
            fontSize: 16,
          }}
        >
          Stanford University is a mid-size private university, with 6,996
          undergraduate students enrolled last year. Stanford University does
          not appear on the Campus Pride Index, a national database of LGBTQ
          friendly campuses. In 2014, it was ranked as the top LGBTQ-friendly
          campus in the nation by the Princeton Review, but it did not even make
          the top 20 list this year.
        </Typography>
        <Typography
          variant="body1"
          my={2}
          sx={{
            color: palette.text.primary,
            fontSize: 16,
          }}
        >
          Stanford has very draconian policies towards neurodivergence, allowing
          members of its community to report concerning behavior on its Stanford
          Safety website. Although its guidance cautions people not to allow
          "unexamined biases and prejudices" to shape their judgments based on
          "race, ethnicity, gender, religion and personal background," Stanford
          nevertheless stigmatizes neurodivergence and mental illness by
          presenting the following behaviors as warning signs of imminent
          violence: "Alienates him/herself from others/family," "Changes in
          behavior (sudden or otherwise)," "Bizarre behavior," "Displays
          paranoia," "Change appearance/declining hygiene," and "Social
          isolation," to name a few.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: palette.text.primary,
            fontSize: 16,
          }}
        >
          While these behaviors may be signs of acute distress, they may also be
          manifestations of neurodivergence and/or mental illness, neither of
          which are inherently more dangerous than their counterparts
          neurotypicality and sanity.
        </Typography>
      </Box>
      <Divider />
    </Box>
  )
}
