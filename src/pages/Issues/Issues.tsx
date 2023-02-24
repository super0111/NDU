import { Container, Box, Typography, Divider, Link } from '@mui/material'

import neurodivergenceImage from '../../assets/images/neurodivergence.jpg'
import { palette } from '../../themes'

const keyPoints = [
  {
    text: 'The neurodiversity paradigm is a rejection of the idea that those who fall outside the margins of neuronormativity are inherently disordered.',
  },
  {
    text: 'Neurodivergence is not a condition; it is an inseparable part of someone that is either innate or acquired.',
  },
  {
    text: 'Neurodivergence is neither meant to be a euphemism for autism and ADHD exclusively, nor an umbrella term for all the myriad, socially constructed conditions described in the DSM.',
  },
  { text: 'There will never be a complete typology of neurodivergence.' },
]

const descriptions = [
  {
    text: 'The concepts of neurodiversity and neurodivergence are not really complicated, although they tend to be misused and get misappropriated by certain individuals and institutions, often in a narrow, exclusionary way that is counter to their original, inclusive intent and that reinforces a pathologizing paradigm. As Nick Walker describes in her book, Neuroqueer Heresies, the terms were coined in the 1990s as people in the autistic rights movement sought to distance autistic identity and wellbeing away from the dominant, pathologizing narrative of the medical establishment, according to which people “suffer from autism” and autism is a “condition that must be cured.”',
  },
  {
    text: 'Fundamental to this shift in conceptualizing autism was the concept of neurodiversity -- “the idea that just as humanity is ethnically diverse and diverse in terms of gender and myriad other qualities, humanity is also neurocognitively diverse” (Walker). The neurodiversity paradigm is thus rejection of a narrowly defined normal way of being (i.e. neuronormativity), and by the same token, rejection of the idea that those who fall outside the margins of neuronormativity are inherently disordered. The implications are profound and can be profoundly healing, since the neurodiversity paradigm shifts the focus of pathology away from the individual and instead to society, which marginalizes and largely fails to accommodate the needs of neurodivergent people.',
  },
  {
    text: 'In this context, the neurodiversity paradigm is highly compatible with the social model of disability, though we acknowledge that not all neurodivergent people identify as disabled. To illustrate, if you ask a neurodivergent person why they are depressed, they will tell you that living in a society built predominantly for neurotypical needs is distressing. In contrast, if you ask a person who identifies as mentally ill or Mad, they may tell you that they believe they have a chemical imbalance and that their brain is flawed. One way of thinking is consistent with the neurodiversity paradigm, while the other way reasserts pathologization wherein “all the frictions and failures” (Walker) are the result of the individual’s condition. That said, it is important to acknowledge that other ways of identifying (e.g. mentally ill, or Mad) are no less valid, and may be more appropriate than a neurodiversity framework to understanding certain people’s experiences.',
  },
  {
    text: 'In keeping with the original intent of foundational scholars like Kassiane Asasumasu, Judy Singer, and Nick Walker, Neurodivergent-U supports a broad and inclusive definition of neurodivergence. While neurodivergence has been generally accepted to encompass neurocognitive styles such as autism, ADHD, and dyslexia, it also includes people with psychiatric diagnoses including psychosis, social anxiety, and depression, many of whom are people with unrecognized autism. It may be more precise to say that conditions like anxiety, depression, and being labeled as having a personality disorder are sometimes symptoms or oppressions that neurodivergent people experience by living in an abusive, ableist society that fails to acknowledge our needs, though people with chronic dysthymia, general anxiety, and schizophrenia are all neurodivergent in their own right.',
  },
  {
    text: 'It may seem reasonable to ask, what “conditions” can be considered forms of neurodivergence? However, there are good reasons why the foundational thinkers avoided any attempts to construct a typology of neurodivergence. For one, it would be a form of gatekeeping, which is antithetical to any conception of neurodiversity. Furthermore, in keeping with the tenets of the neurodiversity paradigm, Neurodivergent-U advocates for movement away from a pathology-focused, medical model of disability, including diagnostic classification, except to the extent that such biomedical categorization is necessary for receiving services and support within existing systems. Neurodivergence is neither meant to be a euphemism for autism and ADHD exclusively, nor an umbrella term for all the myriad, socially constructed conditions described in the DSM. There are practically infinite ways of being that fall outside of neuronormativity, and to attempt to categorize all such ways of being is not only futile, but counter to the neurodiversity paradigm, which rejects pathologization and biomedical reductivism.',
  },
  {
    text: 'Finally, it is important that we push back on erroneous claims that neurodiversity only encompasses genotypically induced variation. An amalgam of many factors produces neurodivergence, including genetics, neuroplasticity, and environment. Because trauma alters neurocognitive functioning, for example, a person with PTSD has acquired neurodivergence. Similarly, longtime practitioners of meditation can become neurodivergent as meditation has been shown to alter their neuronal structure. Thus, neurodivergence is not necessarily innate and may not even be conventionally associated with stigma or pathology. To be clear, there will never be a complete typology of neurodivergence; neurodivergence is not a condition; and there is no map of all neurodivergent traits.',
  },
  { text: 'For further reading:' },
]

export const Issues = () => {
  return (
    <Container>
      <Box my={{ sm: 12, xs: 8 }} display="flex" justifyContent="center">
        <Box
          component="img"
          src={neurodivergenceImage}
          alt="neurodivergenceImage"
          sx={{
            width: '100%',
          }}
        />
      </Box>
      <Typography
        variant="h2"
        sx={{
          color: palette.text.primary,
          fontSize: { sm: 42, xs: 24 },
        }}
      >
        What is Neurodivergence?
      </Typography>
      <Box my={4}>
        <Divider />
      </Box>
      <Typography
        variant="h4"
        sx={{
          color: palette.text.primary,
          fontSize: { sm: 28, xs: 18 },
        }}
      >
        KEY POINTS
      </Typography>

      <ul>
        {keyPoints.map((item, i) => (
          <li
            key={i}
            style={{
              fontFamily: 'DM Sans',
              fontSize: 16,
              fontWeight: 500,
              margin: '16px 0',
            }}
          >
            {item.text}
          </li>
        ))}
      </ul>

      <Box my={4}>
        <Divider />
      </Box>

      <Box>
        {descriptions.map((item, i) => (
          <Typography
            key={i}
            variant="body1"
            my={4}
            sx={{
              color: palette.text.primary,
              fontSize: 16,
            }}
          >
            {item.text}
          </Typography>
        ))}
      </Box>

      <Box display="flex" alignItems="center" mt={4} mb={12}>
        <Typography
          variant="body1"
          sx={{
            color: palette.text.primary,
            fontSize: 16,
          }}
        >
          Nick Walker,
        </Typography>
        <Link
          variant="body1"
          ml={1}
          href="https://neuroqueer.com/neuroqueer-heresies/"
          target="_blank"
          sx={{
            '&:hover': {
              textDecoration: 'underline !important',
            },
            color: '#CA9F02',
            fontSize: 16,
          }}
        >
          Neuroqueer Heresies
        </Link>
      </Box>
    </Container>
  )
}
