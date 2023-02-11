import { ReactElement } from 'react'

import Button from '@/components/Button'
import Spinner from '@/components/Spinner'

import styles from './Home.module.scss'

function Home(): ReactElement {
  return (
    <section className={styles.container}>
      <h1>Welcome to React Boilerplate</h1>
      <Button>Example Button</Button>
      <Spinner />
    </section>
  )
}

export default Home
