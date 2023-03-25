import { Routes, Route, Navigate } from 'react-router-dom'

import { Login } from 'containers/login'
import { Home } from 'containers/home'
import { Erro404 } from 'containers/erro404'

import { PrivateLayout } from 'layouts/privateLayout'
import { PublicLayout } from 'layouts/publicLayout'
import { useAuthStore } from 'store/auth/auth'
import { Torneios } from 'containers/torneios'

export function Router() {
  const { token } = useAuthStore()

  if (!token) {
    return (
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route path="/login" element={<Login />} />

          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Route>
      </Routes>
    )
  }

  return (
    <Routes>
      <Route path="/" element={<PrivateLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/torneios" element={<Torneios />} />
        <Route path="/404" element={<Erro404 />} />

        <Route path="/login" element={<Navigate to="/" />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Route>
    </Routes>
  )
}
