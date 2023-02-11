import { renderHook, act } from '@testing-library/react'

import useCounter from '../useCounter'

describe('useCounter', () => {
  it('should start at 0 if no count provided', () => {
    const { result } = renderHook(() => useCounter())

    expect(result.current[0]).toBe(0)
  })

  it('should start at specified initial count', () => {
    const { result } = renderHook(() => useCounter({ initialCount: 5 }))

    expect(result.current[0]).toBe(5)
  })

  it('should increment the count', () => {
    const { result } = renderHook(() => useCounter())

    expect(result.current[0]).toBe(0)

    act(() => {
      result.current[1]()
    })

    expect(result.current[0]).toBe(1)
  })
})
