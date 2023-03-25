import { Outlet } from 'react-router-dom'

import { SideBar } from 'components/sidebar'
import { OutletContainer } from './styles'

export function DefaultLayout() {
  return (
    <OutletContainer>
      <SideBar />
      <Outlet />
    </OutletContainer>
  )
}
