import { Typography, MenuItem, FormControl, OutlinedInput } from '@mui/material'
import type { SelectChangeEvent } from '@mui/material/Select'
import Select from '@mui/material/Select'
import * as React from 'react'

export const SelectControl = ({ item }: { item: any }) => {
  const [selectItem, setSelectItem] = React.useState<string[]>([])

  const handleChange = (event: SelectChangeEvent<typeof selectItem>) => {
    const {
      target: { value },
    } = event
    setSelectItem(typeof value === 'string' ? value.split(',') : value)
  }

  return (
    <FormControl sx={{ width: '100%' }}>
      <Select
        displayEmpty
        value={selectItem}
        onChange={handleChange}
        input={<OutlinedInput />}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return (
              <Typography
                variant="body1"
                sx={{
                  color: '#545353',
                  fontSize: 16,
                }}
              >
                {item[0]}
              </Typography>
            )
          }
          return selected.join(', ')
        }}
        inputProps={{ 'aria-label': 'Without label' }}
        sx={{
          '& div': {
            color: '#012A4A',
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: 1.5,
            padding: '12px 24px',
          },
          '& fieldset': {
            border: '2px solid #ced4da',
            borderRadius: '8px',
          },
        }}
      >
        {item.map((name: any) => (
          <MenuItem
            key={name}
            value={name}
            style={{
              fontSize: 16,
            }}
          >
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
