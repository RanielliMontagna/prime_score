import { Routes, Route, Navigate } from 'react-router-dom'

import { Login } from 'containers/login'
import { Home } from 'containers/home'
import { Erro404 } from 'containers/erro404'

import { PrivateLayout } from 'layouts/privateLayout'
import { PublicLayout } from 'layouts/publicLayout'
import { useAuthStore } from 'store/auth/auth'

export function Router() {
  const { token } = useAuthStore()

  if (!token) {
    return (
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route path="/" element={<Login />} />
        </Route>
      </Routes>
    )
  }

  return (
    <Routes>
      <Route path="/" element={<PrivateLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/404" element={<Erro404 />} />

        <Route path="*" element={<Navigate to="/404" />} />
      </Route>
    </Routes>
  )
}
