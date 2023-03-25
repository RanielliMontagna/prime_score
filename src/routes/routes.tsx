import { Routes, Route, Navigate } from 'react-router-dom'

import { Home } from 'containers/home'
import { DefaultLayout } from 'layouts/defaultLayout'
import { Erro404 } from 'containers/erro404'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/404" element={<Erro404 />} />

        <Route path="*" element={<Navigate to="/404" />} />
      </Route>
    </Routes>
  )
}
