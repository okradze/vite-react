import cn from 'classnames'
import { ReactElement, useCallback, useState } from 'react'

import reactLogo from '@/assets/react.svg'

import styles from './Counter.module.scss'

function Counter(): ReactElement {
  const [count, setCount] = useState(0)

  const handleClick = useCallback(() => {
    setCount(count => count + 1)
  }, [])

  return (
    <div className={styles.container}>
      <div>
        <a href='https://vitejs.dev' target='_blank' rel='noreferrer noopener'>
          <img src='/vite.svg' className={styles.logo} alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank' rel='noreferrer noopener'>
          <img src={reactLogo} className={cn(styles.logo, styles.react)} alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className={styles.card}>
        <button onClick={handleClick}>Count is {count}</button>
      </div>
      <p className={styles.readDocs}>Click on the Vite and React logos to learn more</p>
    </div>
  )
}

export default Counter
