import { Box, Typography } from '@mui/material'

import titleLogo from '../../assets/images/About/title logo.png'
import { palette } from '../../themes'

const missionTexts = [
  {
    text: 'Neurodivergent and disabled students face significant hurdles in academia. Autistic students are among the least represented demographic groups at college, with only 44% enrollment (compared to 67% for the general population), and a 39% graduation rate from post-secondary institutions. Disabled students face a double jeopardy of sorts, because not only do their disabilities increase the likelihood that they will struggle academically and socially – mainly due to lack of institutional supports and ableism, NOT because of any inherent characteristics – but failures in these areas can also flag students by administration and law enforcement. For example, in Pasco County, Florida, an investigation by the Tampa Bay Times found that the Sheriff’s Office was flagging students who were struggling with grades and attendance as future criminals, with the intent to “make their lives miserable,” and was even planning to surveil students who had multiple psychiatric hospitalizations. University administrations and faculty as well have implemented policies that create an unsafe learning environment for disabled students, often with explicit goals of weeding out students and setting disabled students up for failure.',
  },
  {
    text: 'One of the principal motivating factors for the creation of Neurodivergent-U (NDU) was our observation that, during the past decade, as the media has perpetuated harmful stereotypes associating neurodivergence and disability with criminality, organizations like Autism Speaks, NAMI (and its offshoot, the Treatment Advocacy Center), and the American Psychiatric Association have been inexcusably silent and often complicit with lawmakers as they enacted policies based on these harmful tropes. NDU seeks to amplify the critical voices that challenge the dominant cultural and media narratives about us, and to promote policies that actually heal and support rather than harm.',
  },
  {
    text: 'Since its inception, NDU’s focus has been the development of a college ranking system designed specifically for the needs of disabled and neurodivergent students. Our rating system comprises 16 precisely defined metrics based on four pillars: Support and Accessibility; Inclusion; Safety; and Critical Pedagogy. Our goal was not to create a scientifically valid instrument, but rather a medium to validate the truths of students’ lived experiences, one that is often erased by those who either presume to speak for us or actively silence us. This project is part experiment, part activism, and part work of art.',
  },
  {
    text: 'We believe that schools should take a transparent, collaborative, and nonpunitive approach to helping students. Therefore, although our college ranking system aims specifically to help the disabled student in higher education, we also aim to work with university administrations to change policies that implicitly or explicitly target or harm neurodivergent and disabled students.',
  },
  {
    text: 'As part of our broader mission to advocate for neurodivergent and disabled students in higher education, we are committed to shedding light on the McCarthyistic policy of identifying and reporting “Students of Concern” (SoC) at US college campuses, which codifies discrimination against neurodivergence and disability. SoC policies enable faculty to view disabled students with fear and suspicion, and may discourage students from seeking help and support. As Dr. Melanie Tucker, a Vice President and Dean of Students at Maryville College, wrote in one of the first critical scholarly works on SoC, “[I]f these students are increasingly construed as concerning, with a need for case management or some other type of intervention, there is a risk for assigning yet another label to students with disabilities or reinforcing the assumption made by some who regard having a disability as negative.”',
  },
  {
    text: 'Although SoC policies are publicly touted on university websites as tools of care and support, in the past decade we have too often seen that in practice such policies are used to coerce students into taking medical leaves and often force disabled students out of higher education altogether. These policies are discriminatory, and have caused real harm to students, especially multiply marginalized students and particularly racially minoritized students. Outside our campuses as well, we see policies that are touted as “CARE” being used to incarcerate and disappear the most vulnerable and marginalized people from society.',
  },
  {
    text: 'This policing of neurodivergence and disability on college campuses should be considered in context with other indicators of growing fascism around the country, including the rolling back of women’s rights by the US Supreme Court, the backlash against the MeToo movement, and reactionary political campaigns built upon platforms that would stifle LGBTQ expression and equality. The policing of neurodivergence and disability stems from the same white supremacist, patriarchal, and colonial ethos that polices Trans and gender non-conforming bodies, women’s bodies, and Black bodies.',
  },
  {
    text: 'As we too often see with these injustices, the harms that disabled people experience frequently fall outside the scope of legal justice, and a culture of silence reinforces the shame and powerlessness often felt with victimization. The probability of bringing a discrimination case successfully to court, let alone winning, is discouragingly low, and the burden of proof on claimants is prohibitively high. That is why we believe that advocacy beyond the legal arena, including grassroots organizing, is so important for students who have been harmed but otherwise have no platform on which to speak their truths. On this website we plan to share stories of students who have been harmed, and to shine a steady light exposing the systemic ableism and discrimination in academia and higher education.',
  },
  {
    text: 'Neurodivergent-U is a fiscally sponsored project of Community Partners, a nonprofit 501(c)(3) public benefit corporation.',
  },
]

export const OurMission = () => {
  return (
    <Box>
      <Box
        sx={{
          alignItems: { sm: 'center', xs: 'flex-start' },
          display: 'flex',
          flexDirection: { sm: 'row', xs: 'column' },
        }}
      >
        <Typography
          variant="h1"
          mr={{ sm: 6, xs: 0 }}
          sx={{
            color: palette.text.primary,
            fontSize: { sm: '62px', xs: '42px' },
          }}
        >
          Our Mission at
        </Typography>
        <Box
          component="img"
          src={titleLogo}
          alt="title logo"
          sx={{
            height: '62px',
            width: '142px',
          }}
        />
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          margin: {
            md: '56px 0 120px 0',
            sm: '32px 0 80px 0',
            xs: '32px 0 48px 0',
          },
        }}
      >
        {missionTexts.map((item, i) => (
          <Typography
            key={i}
            variant="body1"
            sx={{
              color: '#090A0C !important',
            }}
          >
            {item.text}
          </Typography>
        ))}
      </Box>
    </Box>
  )
}
