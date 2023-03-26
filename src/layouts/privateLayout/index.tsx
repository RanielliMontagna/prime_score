import { useEffect } from 'react'

import { Outlet, useLocation } from 'react-router-dom'

import app from 'libs/firebase'
import { getAuth } from 'firebase/auth'

import { OutletContainer, PrivateLayoutContainer } from './styles'

import { useAppStore } from 'store/app/app'
import { SideBar } from 'components/sidebar'
import { Loading } from 'components/loading'
import { useAuthStore } from 'store/auth/auth'

export function PrivateLayout() {
  const { setUser } = useAuthStore()
  const { loading } = useAppStore()
  const { pathname } = useLocation()

  const auth = getAuth(app)

  if (
    pathname === '/404' ||
    pathname === '/termos' ||
    pathname === '/privacidade'
  ) {
    return <Outlet />
  }

  //Responsável por verificar se o usuário está logado e setar o usuário no store
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
    })

    return unsubscribe
  }, [auth])

  return (
    <PrivateLayoutContainer>
      <SideBar />
      {loading && <Loading />}
      <OutletContainer>
        <Outlet />
      </OutletContainer>
    </PrivateLayoutContainer>
  )
}
