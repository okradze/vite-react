import { render, screen } from '@testing-library/react'

import Button from '../Button'

describe('Button', () => {
  test('renders children', () => {
    const text = 'Click me'
    render(<Button>{text}</Button>)
    const button = screen.getByText(text)
    expect(button).toBeInTheDocument()
  })
})
