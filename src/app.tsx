import { BrowserRouter } from 'react-router-dom'
import { Notifications } from '@mantine/notifications'

import { MantineProvider } from '@mantine/core'

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
      <Notifications position="top-right" limit={3} />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </MantineProvider>
  )
}

export default App
