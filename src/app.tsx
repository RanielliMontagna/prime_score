import { BrowserRouter } from 'react-router-dom'
import { useState } from 'react'

import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core'

import { Router } from 'routes/routes'
import { theme } from 'styles/theme'
import { useAppStore } from 'store/app/app'

function App() {
  const { theme: colorScheme } = useAppStore()

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        ...theme,
        colorScheme,
      }}
    >
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </MantineProvider>
  )
}

export default App
