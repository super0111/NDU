import { Box } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'

import data from '../../../data.json'

import { UniversityDetails, RankingSubPageHeader, RankingSubPageBody } from './'

interface IInfo {
  id: number
  description: string
  abb: string
  name: string
}
export const RankingSubPage = () => {
  const { id } = useParams()
  const _id = id ? id : 0
  const [userInfo, setUserInfo] = React.useState({} as IInfo | undefined)

  React.useEffect(() => {
    const info: IInfo | undefined = data.items.find((ad: IInfo) => ad.id == _id)
    setUserInfo(info)
  }, [id])
  return (
    <Box>
      <RankingSubPageHeader data={userInfo} />
      <UniversityDetails />
      <RankingSubPageBody />
    </Box>
  )
}
