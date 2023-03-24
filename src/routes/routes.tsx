import { Routes, Route, Navigate } from 'react-router-dom'

import { Home } from 'containers/home'
import { DefaultLayout } from 'layouts/defaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  )
}
