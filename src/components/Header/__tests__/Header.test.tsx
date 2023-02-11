import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import Header from '../Header'

describe('Header', () => {
  test('renders links', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    )
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
  })
})
