import { render, screen } from '@testing-library/react'

import { SideBar } from '.'
import { QuantunProvider } from '@quantun/core'
import { BrowserRouter } from 'react-router-dom'

import { theme } from 'styles/theme'

describe('SidebarComponent', () => {
  test('should render', () => {
    render(
      <QuantunProvider theme={theme}>
        <BrowserRouter>
          <SideBar />
        </BrowserRouter>
      </QuantunProvider>,
    )

    expect(screen.getByText('PS')).toBeInTheDocument()
  })
})
