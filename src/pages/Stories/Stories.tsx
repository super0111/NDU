import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import WarningAmberIcon from '@mui/icons-material/WarningAmber'
import { Container, Box, Typography, Grid } from '@mui/material'

import image1 from '../../assets/images/Stories/page 01.jpg'
import image2 from '../../assets/images/Stories/page 02.jpg'
import image3 from '../../assets/images/Stories/page 03.jpg'
import image4 from '../../assets/images/Stories/page_04-min.jpg'
import image5 from '../../assets/images/Stories/page_05-min.jpg'
import { palette } from '../../themes'

const items = [
  {
    image: image1,
    narration:
      'Along with the rest of the world, it seemed like 2020 was the closest I’ve gotten so far to hell. Everything around me was dark, hopeless, and painfu',
    scene:
      'A major street in downtown Philadelphia, Pennsylvania, with tall buildings stretching to the sky. But the streets are empty and quiet because of COVID lockdown.',
    student: '',
    width: '55%',
  },
  {
    image: image2,
    narration:
      'A month ago, the Temple University psychiatrist diagnosed me with Borderline Personality Disorder (BPD). Last April, I was diagnosed with PTSD.',
    scene:
      'A clinician’s office. The narrator is sitting on a chair, her back to the reader. She sits before a psychiatrist, who appears large and imposing behind his office desk.',
    student: '',
    width: '55%',
  },
  {
    image: image3,
    narration:
      'I spent most of the year venting to friends and family, and felt like a burden to the people I know and love',
    scene:
      'The night of December 9th, 2020. The narrator is a young, Black woman. She is a student with long, curly hair. She is crying. Photos of friends and family hang on the wall behind her. In one photo, her father, wearing sunglasses and a cap, is taking a selfie with her younger brother. In another photo, her mother is wrapping her arms around the narrator, pictured as a child. In the third photo is a group of her friends, smiling at the camera',
    student: '',
    width: '55%',
  },
  {
    image: image4,
    narration:
      'The student picks up her smartphone. On the screen, it shows that she has dialed the National Suicide ',
    scene:
      'I was alone in my tiny campus studio apartment when I made the decision to reach out to the National Suicide Hotline.',
    student: '',
    width: '55%',
  },
  {
    image: image5,
    narration:
      ' She (the person at the call center) had the entirety of the next five months of my life in her hands.',
    scene:
      'The room is dark. The student, dressed in plain night clothes, is sitting at the edge of her bed, holding the phone closely to her face. Her back is to the reader.',
    student: '“I want to die right now.”',
    width: '55%',
  },
]

export const Stories = () => {
  const goToTop = () => {
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
    })
  }

  return (
    <Container
      sx={{
        padding: { sm: '42px 16px 88px 16px', xs: '42px 16px' },
      }}
    >
      <Typography
        variant="h1"
        sx={{
          color: '#090A0C',
          fontSize: { sm: '62px', xs: '42px' },
          textAlign: 'center',
        }}
      >
        Title of the student story
      </Typography>
      <Box
        mt={7}
        py={2}
        px={4}
        sx={{
          background: '#FEE486',
          border: '0.5px solid #FDC90D',
          borderRadius: '8px',
          position: 'relative',
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: '#8D6F01',
            fontSize: 15,
            fontWeight: 700,
          }}
        >
          Content warning:
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: '#8D6F01',
            fontSize: 15,
            fontWeight: 400,
            maxWidth: { sm: '93%', xs: '85%' },
          }}
        >
          This story contains references to suicidal ideation and addiction, and
          depictions of police violence and assault.
        </Typography>
        <WarningAmberIcon
          sx={{
            color: '#8D6F01',
            position: 'absolute',
            right: { sm: '18px', xs: '8px' },
            top: { md: '18px', sm: '29px', xs: '6px' },
          }}
        />
      </Box>

      <Box
        sx={{
          background: '#F3F5F6',
          borderRadius: '20px',
          margin: '42px 0 4px 0',
          padding: '10px 16px 10px 46px',
          position: 'relative',
          width: '90px',
        }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            background: '#610BEF',
            borderRadius: '50%',
            height: '35px',
            left: 0,
            position: 'absolute',
            top: '5px',
            width: '35px',
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: '#FCFCFC',
              fontSize: 14,
            }}
          >
            An
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{
            color: palette.common.black,
            fontSize: 16,
          }}
        >
          Anonymous
        </Typography>
      </Box>

      <Box>
        {items.map((item, i) => (
          <Grid
            key={i}
            container
            spacing={4}
            sx={{ margin: '38px 0', width: '100% !important' }}
          >
            <Grid
              item
              md={9}
              sm={8}
              xs={12}
              sx={{
                alignItems: 'center',
                background: palette.common.white,
                border: '0.5px solid #E1E1E1',
                borderRadius: '24px',
                boxShadow: '0px 14px 20px rgba(0, 0, 0, 0.24)',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Box
                component="img"
                src={item.image}
                alt="image"
                sx={{
                  height: { md: '658px', sm: '460px', xs: 'initial' },
                  width: `${item.width}`,
                }}
              />
            </Grid>
            <Grid item md={3} sm={4} xs={12}>
              <Typography
                variant="body1"
                sx={{
                  color: palette.common.black,
                  fontSize: 12,
                }}
              >
                <span style={{ fontWeight: 'bold' }}>Scene: </span>
                {item.scene}
              </Typography>
              {i === 4 ? (
                <Typography
                  mt={1}
                  variant="body1"
                  sx={{
                    color: palette.common.black,
                    fontSize: 12,
                  }}
                >
                  <span style={{ fontWeight: 'bold' }}>
                    {' '}
                    Student (speaking to the person on the phone):{' '}
                  </span>
                  {item.student}
                </Typography>
              ) : (
                ''
              )}
              <Typography
                mt={1}
                variant="body1"
                sx={{
                  color: palette.common.black,
                  fontSize: 12,
                }}
              >
                <span style={{ fontWeight: 'bold' }}>Narration: </span>
                {item.narration}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        onClick={goToTop}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          mr={4}
          sx={{
            background: 'rgba(243, 245, 246, 0.7)',
            borderRadius: '4px',
            height: '42px',
            width: '42px',
          }}
        >
          <ArrowUpwardIcon />
        </Box>
        <Typography
          variant="body1"
          sx={{
            color: palette.text.primary,
            fontSize: 12,
            fontWeight: 700,
          }}
        >
          Back to top
        </Typography>
      </Box>
    </Container>
  )
}
