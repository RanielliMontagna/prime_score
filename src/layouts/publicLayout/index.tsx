import { Loading } from 'components/loading'
import { Outlet } from 'react-router-dom'
import { useAppStore } from 'store/app/app'

import { OutletContainer } from './styles'

export function PublicLayout() {
  const { loading } = useAppStore()

  return (
    <OutletContainer>
      {loading && <Loading />}
      <Outlet />
    </OutletContainer>
  )
}
