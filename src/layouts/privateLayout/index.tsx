import { Outlet, useLocation } from 'react-router-dom'

import { OutletContainer } from './styles'

import { SideBar } from 'components/sidebar'
import { Loading } from 'components/loading'
import { useAppStore } from 'store/app/app'

export function PrivateLayout() {
  const { loading } = useAppStore()
  const { pathname } = useLocation()

  if (pathname === '/404') {
    return <Outlet />
  }

  return (
    <OutletContainer>
      {loading && <Loading />}
      <SideBar />
      <Outlet />
    </OutletContainer>
  )
}
