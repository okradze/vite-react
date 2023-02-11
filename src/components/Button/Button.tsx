import { ButtonHTMLAttributes, ReactElement, ReactNode } from 'react'

import styles from './Button.module.scss'

type ButtonProps = {
  children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

function Button({ children, ...props }: ButtonProps): ReactElement {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  )
}

export default Button
