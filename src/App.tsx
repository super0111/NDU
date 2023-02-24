import { ThemeProvider } from '@mui/material'
import React, { useEffect } from 'react'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useLocation,
} from 'react-router-dom'

import './App.scss'
import { Header, Footer } from './components'
import {
  Home,
  About,
  Login,
  Register,
  College,
  CreatCollege,
  EditCollege,
  Issues,
  Stories,
  Setting,
  TermsOfUse,
  DesignSystem,
  RankingSubPage,
  PrivacyPolicy,
  Reset,
} from './pages'
import theme from './themes'
export interface INavMenu {
  label: string
  url?: string
  children?: any[]
  isActive: boolean
}
const Root: React.FC = () => {
  const location = useLocation()

  const scrollToTop = () => window.scrollTo({ behavior: 'smooth', top: 0 })

  useEffect(() => {
    if (window.pageYOffset > 0) scrollToTop()
  }, [location.pathname])

  const menus: INavMenu[] = [
    {
      isActive: location.pathname.indexOf('/colleges') > -1,
      label: 'COLLEGES',
      url: 'colleges',
    },
    {
      isActive: location.pathname.indexOf('/about') > -1,
      label: 'ABOUT',
      url: 'about',
    },
    {
      isActive: location.pathname.indexOf('/issues') > -1,
      label: 'THE ISSUES',
      url: 'issues',
    },
    {
      children: [
        { label: 'In my moment of crisis...', url: '/stories' },
        { label: "Someone's anonymous report...", url: '/stories' },
      ],
      isActive: location.pathname.indexOf('/storiess') > -1,
      label: 'stories',
    },
  ]
  return (
    <>
      <Header menus={menus} />
      <Outlet />
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    children: [
      {
        element: <Home />,
        path: '',
      },
      {
        element: <About />,
        path: '/about',
      },
      {
        element: <Login />,
        path: 'login',
      },
      {
        element: <Register />,
        path: 'register',
      },
      {
        element: <Home />,
        path: 'home',
      },
      {
        element: <About />,
        path: 'about',
      },
      {
        element: <Issues />,
        path: 'issues',
      },
      {
        element: <College />,
        path: 'colleges',
      },
      {
        element: <CreatCollege />,
        path: 'create-college',
      },
      {
        element: <EditCollege />,
        path: 'edit-college',
      },
      {
        element: <RankingSubPage />,
        path: 'ranking-sub-page/:id',
      },
      {
        element: <Setting />,
        path: 'settings',
      },
      {
        element: <DesignSystem />,
        path: 'design',
      },
      {
        element: <Stories />,
        path: 'stories',
      },
      {
        element: <TermsOfUse />,
        path: 'terms-of-use',
      },
      {
        element: <PrivacyPolicy />,
        path: 'privacy-policy',
      },
      {
        element: <Register />,
        path: 'register',
      },
      {
        element: <Reset />,
        path: 'reset',
      },
    ],
    element: <Root />,
    path: '/',
  },
])

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
