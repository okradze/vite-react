import { useCallback, useState } from 'react'

type UseCounter = [number, () => void]

type UseCounterProps = {
  initialCount?: number
}

function useCounter({ initialCount = 0 }: UseCounterProps = {}): UseCounter {
  const [count, setCount] = useState(initialCount)

  const increment = useCallback(() => {
    setCount(count => count + 1)
  }, [])

  return [count, increment]
}

export default useCounter
