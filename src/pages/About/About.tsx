import { ReactElement } from 'react'

import styles from './About.module.scss'

function About(): ReactElement {
  return (
    <section className={styles.container}>
      <h1>About Page</h1>
      <p>Example</p>
    </section>
  )
}

export default About
