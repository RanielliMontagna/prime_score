import { Outlet } from 'react-router-dom'

import { OutletContainer } from './styles'

export function PublicLayout() {
  return (
    <OutletContainer>
      <Outlet />
    </OutletContainer>
  )
}
