import { render, screen } from '@testing-library/react'

import Spinner from '../Spinner'

describe('Spinner', () => {
  test('renders spinner', () => {
    render(<Spinner />)
    const spinner = screen.getByTestId('spinner')
    expect(spinner).toBeInTheDocument()
  })
})
