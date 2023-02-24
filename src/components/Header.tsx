import DehazeIcon from '@mui/icons-material/Dehaze'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import {
  List,
  ListItem,
  Box,
  Typography,
  Button,
  Container,
  Collapse,
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  styled,
} from '@mui/material'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import type { INavMenu } from '../App'
import logo from '../assets/images/Logo.png'
import { palette } from '../themes'

import { NuLink } from './NuLink'

const storyItems = [
  'In my moment of crisis...',
  "Someone's anonymous report...",
]

const StoryMenu = ({
  anchorElNav,
  handleCloseNavMenu,
}: {
  anchorElNav: HTMLElement | null
  handleCloseNavMenu: AnyFunction
}) => {
  const navigate = useNavigate()

  const handleClick = (key: number) => {
    handleCloseNavMenu()
    if (key > -1) navigate('/stories')
  }
  return (
    <Menu
      id="menu-appbar"
      anchorEl={anchorElNav}
      anchorOrigin={{
        horizontal: 'left',
        vertical: 'bottom',
      }}
      keepMounted
      transformOrigin={{
        horizontal: 'left',
        vertical: 'top',
      }}
      open={Boolean(anchorElNav)}
      onClose={handleCloseNavMenu}
    >
      {storyItems.map((title, key) => (
        <MenuItem key={key} onClick={() => handleClick(key)}>
          <Typography textAlign="center">{title}</Typography>
        </MenuItem>
      ))}
    </Menu>
  )
}

const NavListItem = styled(ListItem)(() => ({
  fontFamily: 'DM Sans',
  fontSize: 14,
  fontWeight: 700,
}))

const MobileNavbar = ({
  closeMobileNavbar,
  menus,
}: {
  closeMobileNavbar: AnyFunction
  menus: INavMenu[]
}) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleClick = () => {
    closeMobileNavbar()
  }

  return (
    <Box sx={{ background: `${palette.primary.main} !important` }}>
      <List>
        {menus.map((item: INavMenu, key: number) => (
          <div key={key}>
            <NavListItem
              onClick={(e) => {
                if (item.url) handleClick()
                else handleOpenNavMenu(e)
              }}
            >
              {item.url && <NuLink to={item.url}>{item.label}</NuLink>}
              {!item.url && (
                <span style={{ textTransform: 'uppercase' }}>{item.label}</span>
              )}
            </NavListItem>
            {item.children && (
              <StoryMenu
                anchorElNav={anchorElNav}
                handleCloseNavMenu={handleCloseNavMenu}
              />
            )}
          </div>
        ))}
        <NavListItem>
          <Box display="flex" gap={2}>
            <Button sx={{ color: palette.text.primary }} onClick={handleClick}>
              <NuLink to="/login">LOGIN</NuLink>
            </Button>
            <Button
              variant="contained"
              sx={{ background: '#8D6F01', color: 'white' }}
              onClick={handleClick}
            >
              <NuLink to="/register">Register</NuLink>
            </Button>
          </Box>
        </NavListItem>
      </List>
    </Box>
  )
}
export const Header = ({ menus }: { menus: INavMenu[] }) => {
  const location = useLocation()
  const isHome =
    location.pathname.indexOf('home') > -1 || location.pathname === '/'
  const [open, setOpen] = useState(false)
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }
  return (
    <AppBar position="static" color={isHome ? 'primary' : 'transparent'}>
      <Container>
        <Box display="flex" justifyContent="space-between" py={4}>
          <Box py={2}>
            <NuLink to="/">
              <img src={logo} alt="" />
            </NuLink>
          </Box>
          <Box
            display={{ md: 'flex', xs: 'none' }}
            gap={4}
            sx={{
              '& button': {
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
              },
            }}
          >
            {menus.map((item: INavMenu, key: number) => (
              <div key={key}>
                <Button
                  key={key}
                  sx={{
                    borderBottom: item.isActive
                      ? `3px solid ${palette.primary.light}`
                      : `3px solid transparent`,
                    color: `${palette.text.primary} !important`,
                  }}
                  endIcon={
                    item.children &&
                    (Boolean(anchorElNav) ? <ExpandLess /> : <ExpandMore />)
                  }
                  onClick={(e: React.MouseEvent<HTMLElement>) => {
                    if (item.children) handleOpenNavMenu(e)
                  }}
                >
                  {item.url && <NuLink to={item.url}>{item.label}</NuLink>}
                  {item.children && <>{item.label}</>}
                </Button>
                {item.children && (
                  <StoryMenu
                    anchorElNav={anchorElNav}
                    handleCloseNavMenu={handleCloseNavMenu}
                  />
                )}
              </div>
            ))}
          </Box>
          <Box display="flex" gap={2}>
            <Box display={{ sm: 'flex', xs: 'none' }} gap={2}>
              <Button sx={{ color: palette.text.primary }}>
                <NuLink to="/login">Login</NuLink>
              </Button>
              <Button variant="contained" sx={{ background: '#8D6F01', px: 6 }}>
                <NuLink to="/register" sx={{ color: palette.common.white }}>
                  Register
                </NuLink>
              </Button>
            </Box>
            <IconButton
              sx={{ display: { md: 'none', xs: 'block' } }}
              onClick={() => setOpen(!open)}
            >
              <DehazeIcon />
            </IconButton>
          </Box>
        </Box>
        <Box position="relative" width="100%">
          <Collapse in={open} sx={{ width: '100%' }}>
            <MobileNavbar
              closeMobileNavbar={() => setOpen(false)}
              menus={menus}
            />
          </Collapse>
        </Box>
      </Container>
    </AppBar>
  )
}
