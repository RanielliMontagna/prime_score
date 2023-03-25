import { Outlet, useLocation } from 'react-router-dom'

import { SideBar } from 'components/sidebar'
import { OutletContainer } from './styles'

export function DefaultLayout() {
  const { pathname } = useLocation()

  if (pathname === '/404') {
    return <Outlet />
  }

  return (
    <OutletContainer>
      <SideBar />
      <Outlet />
    </OutletContainer>
  )
}
