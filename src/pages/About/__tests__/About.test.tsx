import { render, screen } from '@testing-library/react'

import About from '../About'

describe('About', () => {
  test('renders About', () => {
    render(<About />)
    expect(screen.getByText('About Page')).toBeInTheDocument()
    expect(screen.getByText('Example')).toBeInTheDocument()
  })
})
