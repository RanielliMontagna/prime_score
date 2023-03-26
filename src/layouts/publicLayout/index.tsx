import { Loading } from 'components/loading'
import { Outlet, useLocation } from 'react-router-dom'
import { PublicHeader } from 'shared/publicHeader'
import { useAppStore } from 'store/app/app'

import { OutletContainer } from './styles'

export function PublicLayout() {
  const { loading } = useAppStore()
  const { pathname } = useLocation()

  return (
    <div>
      {loading && <Loading />}
      {pathname !== '/login' && <PublicHeader />}
      <OutletContainer withHeader={pathname !== '/login'}>
        <Outlet />
      </OutletContainer>
    </div>
  )
}
