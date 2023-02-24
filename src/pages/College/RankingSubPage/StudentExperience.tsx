import { Box, Typography } from '@mui/material'

import student1 from '../../../assets/images/student1.png'
import student2 from '../../../assets/images/student2.png'
import { ClaimButton } from '../../../components/ClaimButton'
import { palette } from '../../../themes'

const buttonTitle = 'Review this University'
const buttonStyle = {
  width: '100%',
}

const items = [
  {
    avatar: student1,
    date: 'October 10, 2019',
    description:
      'In 2019, Stanford settled a class-action lawsuit with Disability Rights Advocates for its "egregious" policies that coerced students to take leaves of absence if they experienced a mental health crisis. According to reporting by the Chronicle of Higher Education, "students said they had been falsely accused by administrators of disrupting the lives of their friends and had generally been treated as if they had committed behavioral infractions rather than simply asking for treatment, in an appropriate manner, for their disabilities during times of crisis." One student noticed that, in recent years, students who were hospitalized for psychiatric treatment would "effectively disappear from campus."',
    name: 'Harvard_student03',
  },
  {
    avatar: student1,
    date: 'October 10, 2019',
    description:
      '"Rather than to call out the Stanford coaches decision as an explicit act of homophobia, he said that his Instagram post sought to highlight how a homophobic culture within Stanfords team was already alienating him from the swimming community and presented a broader obstacle to the success of queer swimmers. An important reason why he did not support Team USA at the meet, he said, was because he felt that neither coaches nor athletes on the team respected him and his experiences as a gay swimmer."',
    name: 'Harvard_student04',
  },
  {
    avatar: student2,
    date: 'October 10, 2019',
    description:
      '"2017 alone saw 22 hate crimes, all in the form of swastikas painted around campus, eight in student residences. Only four reports of hate crimes were made last calendar year: one defacement of a disabled parking sign, the posting of a sign "commenting on national origin" affixed to a students door and two thefts that involved an element of bias against a religion."',
    name: 'Harvard_student05',
  },
]

export const StudentExperience = () => {
  return (
    <Box mt={12}>
      <Typography
        variant="h4"
        my={4}
        sx={{
          color: palette.common.black,
          fontFamily: 'Playfair Display',
          fontSize: { sm: 24, xs: 20 },
          textAlign: { sm: 'initial', xs: 'center' },
        }}
      >
        Negative Student Experiences::
      </Typography>

      <Typography
        variant="body1"
        mt={2}
        mb={4}
        sx={{
          color: palette.common.black,
          fontSize: 16,
          textAlign: { sm: 'initial', xs: 'center' },
        }}
      >
        Share your thoughts with other students
      </Typography>

      <ClaimButton buttonTitle={buttonTitle} buttonStyle={buttonStyle} />

      <Box mt={6} mb={20}>
        {items.map((item, i) => (
          <Box
            my={6}
            key={i}
            sx={{
              border: '1px solid #F3F5F6',
              borderRadius: '8px',
            }}
          >
            <Box
              p={{ sm: 4, xs: 2 }}
              display="flex"
              alignItems="center"
              sx={{
                background: '#F3F5F6',
                borderTopLeftRadius: '8px',
                borderTopRightRadius: '8px',
              }}
            >
              <Box
                py={1}
                pl={1}
                pr={3}
                display="flex"
                alignItems="center"
                sx={{
                  background: palette.common.white,
                  borderRadius: 30,
                }}
              >
                <Box
                  component="img"
                  src={item.avatar}
                  alt="avatar"
                  sx={{
                    height: '30px',
                    width: '30px',
                  }}
                />
                <Typography
                  ml={2}
                  variant="body1"
                  sx={{
                    color: palette.common.black,
                    fontSize: 12,
                  }}
                >
                  {item.name}
                </Typography>
              </Box>
              <Typography
                ml={4}
                variant="body1"
                sx={{
                  color: palette.common.black,
                  fontSize: 12,
                }}
              >
                {item.date}
              </Typography>
            </Box>
            <Box p={{ sm: 6, xs: 4 }} sx={{}}>
              <Typography
                variant="body1"
                sx={{
                  color: palette.common.black,
                  fontSize: 14,
                }}
              >
                {item.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
