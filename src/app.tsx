import { BrowserRouter } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'

import { Router } from 'routes/routes'
import { theme } from 'styles/theme'

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </MantineProvider>
  )
}

export default App
