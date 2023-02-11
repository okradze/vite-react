import { ReactElement } from 'react'

import styles from './Spinner.module.scss'

function Spinner(): ReactElement {
  return <span data-testid='spinner' className={styles.spinner} />
}

export default Spinner
