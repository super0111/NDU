import { Box, Typography } from '@mui/material'
import { Editor } from '@tinymce/tinymce-react'
import React from 'react'

import { CollegeButton } from '../../components'
import { palette } from '../../themes'

const buttonTitle = 'Save'

export const Description = () => {
  return (
    <Box my={{ sm: 8, xs: 4 }}>
      <Typography
        variant="body1"
        mb={{ sm: 4, xs: 2 }}
        sx={{
          color: palette.common.black,
          fontSize: 16,
          fontWeight: 700,
        }}
      >
        Description
      </Typography>
      <Typography
        variant="body1"
        mb={4}
        sx={{
          color: '#919aa1',
          fontSize: 16,
        }}
      >
        Use this space to write a short, opinionated summary of your campus. Max
        600 words.
      </Typography>

      <Box mb={4}>
        <Editor
          tinymceScriptSrc="/path/to/tinymce.min.js"
          init={{
            content_style:
              'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
            menubar: 'file edit view format tools',
            min_height: 450,
            plugins:
              'print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons',
            resize: true,
            toolbar:
              'undo redo | formatselect | bold italic | alignleft aligncenter alignright alignjustify | outdent indent',
          }}
        />
      </Box>

      <CollegeButton buttonTitle={buttonTitle} />
    </Box>
  )
}
