import { ReactElement } from 'react'

import { ViteIcon, ReactIcon } from '@/components/Icons'

import useCounter from './hooks/useCounter'

import styles from './Counter.module.scss'

function Counter(): ReactElement {
  const [count, handleIncrement] = useCounter()

  return (
    <div className={styles.container}>
      <div>
        <a href='https://vitejs.dev' target='_blank' rel='noreferrer noopener'>
          <ViteIcon className={styles.logo} />
        </a>
        <a href='https://reactjs.org' target='_blank' rel='noreferrer noopener'>
          <ReactIcon className={styles.logo} />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className={styles.card}>
        <button onClick={handleIncrement}>Count is {count}</button>
      </div>
      <p className={styles.readDocs}>Click on the Vite and React logos to learn more</p>
    </div>
  )
}

export default Counter
