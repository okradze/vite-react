import { fireEvent, render, screen } from '@testing-library/react'

import Counter from '../Counter'

describe('Counter', () => {
  it('renders component', () => {
    render(<Counter />)
    expect(screen.getByText('Vite + React')).toBeInTheDocument()
  })

  it('renders with count and increments', () => {
    render(<Counter />)
    fireEvent.click(screen.getByText('Count is 0'))
    expect(screen.getByText('Count is 1')).toBeInTheDocument()
  })
})
