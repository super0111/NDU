import { Link } from 'react-router-dom'

import { palette } from '../themes'

export const NuLink = ({
  to,
  sx,
  children,
}: {
  to: string
  sx?: object
  children: React.ReactNode
}) => {
  return (
    <Link
      to={to}
      style={{ color: palette.text.primary, textDecoration: 'none', ...sx }}
    >
      {children}
    </Link>
  )
}
