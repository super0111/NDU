import {
  Box,
  Grid,
  Typography,
  Pagination,
  Button,
  PaginationItem,
} from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import data from '../../data.json'
import { palette } from '../../themes'

import usePagination from './usePagination'

const Next: React.FC = () => <span>Next</span>
const Previous: React.FC = () => <span>Previous</span>

export const CollegeRankingList = () => {
  const navigate = useNavigate()
  const [page, setPage] = React.useState(1)
  const PER_PAGE = 10

  const count = Math.ceil(data.items.length / PER_PAGE)
  const paginationData = usePagination(data.items, PER_PAGE)

  const handleChange = (e: React.ChangeEvent<unknown>, p: number) => {
    setPage(p)
    paginationData.jump(p)
  }

  const handleRankingItemClick = (id: number) => {
    navigate(`/ranking-sub-page/${id}`)
  }

  return (
    <Box display="flex" flexDirection="column" justifyContent="space-between">
      <Box>
        {paginationData.currentData().map((item: any, i: number) => (
          <Box
            key={i}
            sx={{
              borderBottom:
                i % 9 !== 0 || i === 0 ? '0.1rem solid #91BED4' : '',
            }}
            onClick={() => handleRankingItemClick(i)}
          >
            <Grid container spacing={4} mt={2} py={{ sm: 4, xs: 2 }}>
              <Grid
                item
                md={8}
                sm={8}
                xs={12}
                gap={{ sm: 4, xs: 2 }}
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    alignItems: 'center',
                    backgroundColor: '#F26101',
                    borderRadius: '8px',
                    color: `${palette.common.white} !important`,
                    display: 'flex',
                    flexShrink: 0,
                    fontSize: 24,
                    fontWeight: 700,
                    height: { sm: '60px', xs: '50px' },
                    justifyContent: 'center',
                    width: { sm: '70px', xs: '60px' },
                  }}
                >
                  {item.abb}
                </Typography>
                <Box display="flex" flexDirection="column" ml={4}>
                  <Typography
                    variant="h4"
                    sx={{
                      color: palette.common.black,
                      fontFamily: 'Playfair Display',
                      fontSize: { sm: 28, xs: 20 },
                      textTransform: 'uppercase',
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: palette.text.primary,
                      fontSize: { sm: 16, xs: 14 },
                      fontWeight: 700,
                      lineHeight: { sm: '160%', xs: '130%' },
                    }}
                  >
                    {item.user}
                  </Typography>
                </Box>
              </Grid>

              <Grid
                item
                md={4}
                sm={4}
                xs={12}
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
              >
                {i === 0 ? (
                  <Typography
                    variant="h4"
                    mr={8}
                    sx={{
                      alignItems: 'center',
                      backgroundColor: '#94C804',
                      borderRadius: '8px',
                      color: `${palette.common.white} !important`,
                      display: { md: 'flex', xs: 'none' },
                      fontSize: 24,
                      fontWeight: 700,
                      height: '60px',
                      justifyContent: 'center',
                      width: '70px',
                    }}
                  >
                    B+
                  </Typography>
                ) : (
                  ''
                )}
                <Button
                  sx={{
                    '&:hover': {
                      backgroundColor: '#987702',
                    },
                    backgroundColor: '#CA9F02',
                    borderColor: '#8b6d01',
                    borderRadius: '16px !important',
                    color: '#FFF !important',
                    display: { sm: 'block', xs: 'none' },
                    fontFamily: 'DM Sans',
                    fontSize: '18px !important',
                    fontWeight: 700,
                    height: '60px',
                    padding: '6px 36px',
                    textTransform: 'initial',
                  }}
                >
                  View Details
                </Button>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Box>

      <Box display="flex" justifyContent="center" mt={8}>
        <Pagination
          count={count}
          size="large"
          page={page}
          shape="rounded"
          renderItem={(item) => (
            <PaginationItem
              slots={{ next: Next, previous: Previous }}
              {...item}
            />
          )}
          onChange={handleChange}
          sx={{
            '& .MuiPaginationItem-root': {
              color: '#CA9F02',
              fontSize: 14,
              textDecoration: 'none',
            },
            '& .MuiPaginationItem-root.Mui-selected': {
              backgroundColor: '#CA9F02',
              borderRadius: '0px',
              color: palette.common.white,
              fontSize: 14,
              textDecoration: 'none',
            },
          }}
        />
      </Box>
    </Box>
  )
}
